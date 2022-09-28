<template>
  <div class="search__wrapper">
    <div class="search__field-outline">
      <div class="search__field-inner">
        <SearchOptionField
          v-for="config in selectedConfig"
          :key="config.id"
          :initFieldConfig="config"
          :avalible-options="getAvalibleOptions(config)"
          @field-changed="onFieldChanged($event, 'CHANGE')"
          @remove-option-key="onFieldChanged($event, 'REMOVE')"
          :custom-class="`search__option reset__position ${
            config.isEdit && config.value ? 'edit' : ''
          }`"
        />
        <BaseAutocomplete
          v-if="selectOptionKey"
          placeholder="Click to start search"
          :options="optionKeyitems"
          @select="onKeySelected"
          custom-class="search__autocomplete reset__position"
        />
      </div>
      <div
        :class="`search__field-reset ${
          selectedConfig.length > 0 ? '' : 'hidden'
        }`"
        @click="reset"
      >
        <b-icon icon="close-circle-outline" type="is-primary"></b-icon>
      </div>
    </div>
    <SearchButton :disabled="!allowSearch" @search="search" />
  </div>
</template>

<script>
import SearchButton from "./SearchButton.vue";
import BaseAutocomplete from "@/components/Base/BaseAutocomplete.vue";
import SearchOptionField from "./SearchOptionField.vue";
import { cloneDeep, pick, chain } from "lodash";

export default {
  name: "Search",
  components: {
    SearchButton,
    BaseAutocomplete,
    SearchOptionField,
  },
  props: {
    initConfig: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      config: [],
      multipleConfig: [],
      selectedConfig: [],
      selectOptionKey: true,
    };
  },
  watch: {
    initConfig(newVal) {
      this.init(newVal);
    },
  },
  computed: {
    optionKeyitems() {
      return this.config.map((el) => ({
        value: el.key,
        display: el.label,
      }));
    },
    multipleSelectedPair() {
      const pair = {}; // key: [options]
      this.multipleConfig.forEach((key) => {
        const selected =
          this.selectedConfig.filter((config) => config.key === key) || [];
        const selectedOptions = selected.map((item) => item.value) || [];
        console.log("selected", selected, selectedOptions);
        pair[key] = selectedOptions || [];
      });
      return pair;
    },
    allowSearch() {
      return (
        this.selectedConfig.length === 0 ||
        this.selectedConfig.some(({ key, value }) => key && value)
      );
    },
  },
  created() {
    this.init(this.initConfig);
  },
  methods: {
    init(initConfig) {
      this.config = cloneDeep(initConfig);
      this.multipleConfig =
        chain(this.config)
          .filter(({ multiple }) => multiple)
          .map(({ key }) => key)
          .uniq()
          .value() || [];
    },
    onKeySelected(payload) {
      console.log(payload);
      const { value } = payload;
      // 找到原始 config
      const index = this.config.findIndex((el) => el.key === value);
      // 加入 user 所選
      this.selectedConfig.push({
        ...this.config[index],
        isEdit: true,
        id: Math.random().toString(36).substr(2, 9),
      });
      // 切換模式
      this.selectOptionKey = false;
    },
    onFieldChanged(payload, action) {
      const { id, key } = payload;
      // 更新 user 所選 selectedConfig -> render display tag
      this.updateSelectedConfig(id, payload, action);
      // 更新原始可選條件 -> render option key list
      this.updateConfig(key);
      // 切換模式
      if (payload.isEdit && payload.value && action !== "REMOVE") {
        this.selectOptionKey = false;
      } else {
        this.selectOptionKey = true;
      }
    },
    updateSelectedConfig(id, payload, action = "CHANGE") {
      const index = this.selectedConfig.findIndex((el) => el.id === id);
      if (action === "REMOVE") {
        this.selectedConfig.splice(index, 1);
      } else {
        this.selectedConfig.splice(index, 1, payload);
      }
    },
    updateConfig(key) {
      const index = this.config.findIndex((el) => el.key === key);
      if (index > -1) {
        const fullSelected = this.multipleIsFullSelected(index);
        if (fullSelected) {
          this.config.splice(index, 1);
        }
      } else {
        const initFieldConfig = this.initConfig.find((el) => el.key === key);
        this.config.push(initFieldConfig);
      }
    },
    multipleIsFullSelected(index) {
      const { multiple, options, key } = this.config[index];
      // 複選有選項 -> 已選滿 true，則 config 剔除該選項
      // 複選沒選項 -> false，保留（可填無限多個）
      // 不是複選 -> 無條件 true，則 config 剔除該選項
      return multiple
        ? options && options.length === this.multipleSelectedPair[key].length
        : true;
    },
    reset() {
      this.selectedConfig = [];
      this.config = cloneDeep(this.initConfig);
      this.selectOptionKey = true;
    },
    search() {
      const params = [];
      this.selectedConfig.forEach((item) => {
        if (item.multiple) {
          this.formatMultipleParams(params, item);
        } else {
          params.push(pick(item, ["key", "value"]));
        }
      });
      console.log("params", params);
      this.$emit("search", params);
    },
    formatMultipleParams(params, item) {
      const index = params.findIndex((param) => param.key === item.key);
      if (index > -1) {
        params.splice(index, 1, {
          ...params[index],
          value: [...params[index].value, item.value],
        });
      } else {
        params.push({ key: item.key, value: [item.value] });
      }
      return params;
    },
    getAvalibleOptions({ key: configKey, multiple, isEdit, value }) {
      const originOptions =
        this.config.find(({ key }) => key === configKey)?.options || [];
      const avalibleOptions = originOptions.filter((option) =>
        multiple
          ? !this.multipleSelectedPair[configKey]?.includes(option.value)
          : option
      );
      console.log(originOptions, avalibleOptions);
      const selfOption = originOptions.find((item) => item.value === value);
      return value && isEdit
        ? avalibleOptions.concat(selfOption)
        : avalibleOptions;
    },
  },
};
</script>

<style lang="scss" scoped>
.search__wrapper {
  width: 100%;
  display: flex;
  // align-items: center;
}

.search__field {
  &-outline {
    min-width: 0;
    flex: 1;
    box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
    background: transparent;
    border: 1px solid #dbdbdb;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    position: relative;
  }

  &-inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0 calc(0.75em - 1px);
    overflow-x: auto;
  }

  &-reset {
    position: absolute;
    top: 0;
    right: 0;
    height: 2.5em;
    width: 2.5em;
    cursor: pointer;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.9)
    );
    display: flex;
    justify-content: center;
    align-items: center;

    &.hidden {
      display: none;
    }
  }
}

.search__autocomplete,
.search__option {
  flex: 1 0 auto;
}

.edit {
  flex: 0 0 auto;
}

.reset__position {
  & ::v-deep .autocomplete {
    position: static;

    &::v-deep .input {
      position: static;
    }
  }

  & ::v-deep .control {
    position: static;
  }

  & ::v-deep .input {
    border: none;
    box-shadow: none;
    background: transparent;
    position: static;
  }
}

/* Scrollbar */
/* width */
::-webkit-scrollbar {
  width: 0px;
  height: 4px;
  background-color: hsl(0, 0%, 98%);
}

/* Track */
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff62;
  background-image: linear-gradient(
    225deg,
    #ffffff 0%,
    #f2effb 11%,
    #8769d9 72%,
    #552fbc 100%
  );
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #8769d9;
  background-image: linear-gradient(236deg, #8769d9 0%, #552fbc 100%);
}
</style>

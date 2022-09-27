<template>
  <div class="search__wrapper">
    <div class="search__field-outline">
      <div class="search__field-inner">
        <SearchOptionField
          v-for="config in selectedConfig"
          :key="config.id"
          :initFieldConfig="config"
          @field-changed="onFieldChanged"
          custom-class="search__option reset__position"
        />
        <BaseAutocomplete
          v-if="selectOptionKey"
          :options="optionKeyitems"
          @select="onKeySelected"
          custom-class="search__autocomplete reset__position"
        />
      </div>
      <div
        :class="`search__field-reset ${
          selectedConfig.length > 0 ? '' : 'hidden'
        }`"
      >
        <b-icon icon="close-circle-outline" type="is-primary"></b-icon>
      </div>
    </div>
    <SearchButton />
  </div>
</template>

<script>
import SearchButton from "./SearchButton.vue";
import BaseAutocomplete from "@/components/Base/BaseAutocomplete.vue";
import SearchOptionField from "./SearchOptionField.vue";

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
      config: this.initConfig,
      selectedConfig: [],
      selectOptionKey: true,
    };
  },
  watch: {
    initConfig(newVal) {
      this.config = newVal;
    },
  },
  computed: {
    optionKeyitems() {
      return this.config.map((el) => ({
        value: el.key,
        display: el.label,
      }));
    },
  },
  methods: {
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
      // 檢查是否可複選
      // 若不可則 config 剔除該選項
      if (!this.config[index]?.multiple) {
        this.config.splice(index, 1);
      }
      // 切換模式
      this.selectOptionKey = false;
    },
    onFieldChanged(payload) {
      console.log("change", payload);
      const { id } = payload;
      // 找到 user 所選 config 中的這個 field
      const index = this.selectedConfig.findIndex((el) => el.id === id);
      // splice 放進去
      this.selectedConfig.splice(index, 1, payload);
      // 切換模式
      this.selectOptionKey = true;
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
    width: 80%;
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
  height: 6px;
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

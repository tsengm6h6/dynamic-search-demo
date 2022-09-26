<template>
  <div>
    <BaseAutocomplete
      v-if="selectOptionKey"
      :options="optionKeyitems"
      @select="onKeySelected"
    />
    <SearchButton />
  </div>
</template>

<script>
import SearchButton from "./SearchButton.vue";
import BaseAutocomplete from "@/components/Base/BaseAutocomplete.vue";

export default {
  name: "Search",
  components: {
    SearchButton,
    BaseAutocomplete,
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
      this.selectedConfig.push(this.config[index]);
      // 檢查是否可複選
      // 若不可則 config 剔除該選項
      if (!this.config[index]?.multiple) {
        this.config.splice(index, 1);
      }
      // 切換模式
      this.selectOptionKey = false;
    },
  },
};
</script>

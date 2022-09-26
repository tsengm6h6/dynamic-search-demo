<template>
  <div :class="`${config.isEdit ? customClass : ''}`">
    <div
      v-if="config.isEdit"
      class="control field__wrapper"
      :class="customClass"
    >
      <b-tag type="is-primary" aria-close-label="Close tag" closable>
        {{ config.key }}
      </b-tag>
      <div class="field__component">
        <BaseInput v-bind="config.attrs" @save-field="handleFieldSave" />
      </div>
    </div>
    <div v-else>
      <div class="control tag__wrapper">
        <b-taglist attached>
          <b-tag type="is-dark">{{ config.key }}</b-tag>
          <b-tag type="is-info">{{ config.value }}</b-tag>
        </b-taglist>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput.vue";

export default {
  name: "SearchOptionField",
  components: {
    BaseInput,
  },
  props: {
    initFieldConfig: {
      type: Object,
      default: () => {},
    },
    customClass: {
      type: [String, Array],
      default: "",
    },
  },
  computed: {
    config: {
      get() {
        return this.initFieldConfig;
      },
      set(newConfig) {
        this.$emit("field-change", newConfig);
      },
    },
  },
  methods: {
    handleFieldSave(value) {
      console.log("enter", value);
      // 把值存入 config 物件
      const saveConfig = {
        ...this.config,
        isEdit: false,
        value,
      };
      // emit 給複層更新 selectedConfig -> render
      this.$emit("field-changed", saveConfig);
    },
  },
};
</script>

<style lang="scss" scoped>
.field__wrapper {
  display: flex;
  align-items: center;

  & .field__component {
    flex: 1 0 auto;
  }

  & ::v-deep .input {
    border: none;
    box-shadow: none;
    background: transparent;
  }
}

.tag__wrapper {
  margin: calc(0.5em - 1px) 0.5em calc(0.5em - 1px) 0;

  &::v-deep .tags {
    flex-wrap: nowrap;
  }
}
</style>

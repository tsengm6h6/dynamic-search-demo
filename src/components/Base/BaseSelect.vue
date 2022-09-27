<template>
  <b-field :label="label">
    <b-select v-bind="$attrs" v-model="currValue">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.display }}
      </option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
};
</script>

<template>
  <b-field :label="label">
    <b-input
      v-bind="$attrs"
      v-model="currValue"
      @keydown.enter.native="$emit('save-field', $event.target.value)"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
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

<template>
  <b-field
    :type="invalid ? 'is-danger' : ''"
    :message="invalid ? invalidMessage : ''"
    :label="label"
  >
    <b-input
      v-bind="$attrs"
      v-model="currValue"
      @keydown.enter.native="onKeyDown"
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
    invalid: {
      type: Boolean,
      default: false,
    },
    invalidMessage: {
      type: String,
      default: "Required",
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
  methods: {
    onKeyDown(evt) {
      if (!evt.target.value.trim()) return;
      this.$emit("save-field", evt.target.value.trim());
    },
  },
};
</script>

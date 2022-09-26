<template>
  <b-field label="Name">
    <b-input v-model="currValue"></b-input>
  </b-field>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
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

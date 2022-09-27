<template>
  <div class="my-2 display__field">
    <b-field v-for="option in options" :key="option.value" grouped>
      <b-input v-model="option.display" disabled expanded></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "DisplayField",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.display__field {
  max-height: 150px;
  overflow: auto;
}
</style>

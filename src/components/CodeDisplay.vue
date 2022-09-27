<template>
  <div>
    <h1 class="has-text-weight-semibold is-size-5 mt-6 mb-2">{{ title }}</h1>
    <pre class="display-height">{{ list }}</pre>
  </div>
</template>

<script>
export default {
  name: "CodeDisplay",
  props: {
    title: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.display-height {
  height: 300px;
  overflow: auto;
}
</style>

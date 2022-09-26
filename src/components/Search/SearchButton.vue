<template>
  <b-button
    type="is-primary"
    icon-left="magnify"
    class="search__button"
    :disabled="$attrs.disabled"
    @click.stop.prevent="$emit('search')"
  >
  </b-button>
</template>

<script>
export default {
  name: "SearchButton",
};
</script>

<style lang="scss" scoped>
.search__button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
  border: 1px solid #8769d9;
  outline: 1px solid #8769d9;
}
</style>

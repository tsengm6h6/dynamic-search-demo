<template>
  <div class="buttons">
    <b-button type="is-primary" outlined @click.stop.prevent="$emit('reset')">
      Reset
    </b-button>
    <b-button
      type="is-primary"
      :disabled="$attrs.disabled"
      @click.stop.prevent="$emit('search')"
    >
      Search
    </b-button>
    <b-button
      v-if="showExport"
      type="is-primary-light"
      :disabled="$attrs.disabled"
      @click.stop.prevent="$emit('export')"
    >
      Export
    </b-button>
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  inheritAttrs: false,
  props: {
    showExport: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

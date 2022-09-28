<template>
  <b-field :class="customClass" :label="label">
    <b-autocomplete
      ref="autocomplete"
      v-model="input"
      v-bind="$attrs"
      :placeholder="placeholder"
      keep-first
      open-on-focus
      :data="filteredDataObj"
      field="display"
      @select="onSelect"
    >
      <template #empty> No results found </template>
    </b-autocomplete>
  </b-field>
</template>

<script>
export default {
  name: "BaseAutocomplete",
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
    customClass: {
      type: [String, Array],
      default: "",
    },
    placeholder: {
      type: String,
      default: "Click to start search",
    },
  },
  data() {
    return {
      input: "",
      selected: null,
    };
  },
  watch: {
    options() {
      this.init();
    },
    value: {
      handler() {
        this.init();
      },
      immediate: true,
    },
  },
  computed: {
    filteredDataObj() {
      return this.options.filter((option) => {
        return (
          option.display
            .toString()
            .toLowerCase()
            .indexOf(this.input.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    init() {
      this.selected =
        this.options?.find((el) => el.value === this.value) || null;
      console.log(this.selected);
      this.input = this.selected?.display || "";
    },
    onSelect(option) {
      console.log(option);
      this.selected = option;
      this.$emit("select", option);
      this.$emit("save-field", option.value);
    },
  },
  mounted() {
    if (this.$attrs.autofocus) this.$refs.autocomplete.focus();
  },
};
</script>

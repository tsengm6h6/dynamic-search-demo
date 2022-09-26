<template>
  <b-field :class="customClass" :label="label">
    <b-autocomplete
      v-model="input"
      placeholder="e.g. Anne"
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
      type: String,
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
  },
  data() {
    return {
      input: "",
      selected: null,
    };
  },
  watch: {
    options(newVal) {
      console.log("auto", newVal);
      this.init();
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
    },
  },
};
</script>

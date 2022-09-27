<template>
  <div>
    <div v-if="options.length > 0" class="mb-2 option__fields">
      <b-field v-for="option in options" :key="option.value" grouped>
        <b-input v-model="option.display" disabled expanded></b-input>
      </b-field>
    </div>
    <b-field
      :type="newOptionMessage ? 'is-danger' : ''"
      :message="newOptionMessage ? newOptionMessage : ''"
      grouped
    >
      <b-input v-model="currValue" expanded placeholder="Option..."></b-input>
      <p class="control">
        <b-button label="Add" type="is-primary" @click="addOption" />
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "OptionField",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      newOptionMessage: "",
    };
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
    addOption() {
      if (!this.value) {
        this.newOptionMessage = "Required";
        return;
      }
      this.$emit("add-option");
      this.newOptionMessage = "";
    },
  },
};
</script>

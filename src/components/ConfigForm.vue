<template>
  <div class="mt-4 p-5">
    <h1 class="has-text-weight-semibold is-size-5 mb-2">Enter your config</h1>
    <section>
      <BaseInput
        label="Key"
        v-model="form.key"
        placeholder="Input a config key"
      />
      <BaseInput
        label="Label"
        v-model="form.label"
        placeholder="Input a config label"
      />
      <BaseSelect
        label="Type"
        expanded
        v-model="form.type"
        :options="typeOptions"
        placeholder="Select a search type"
      />
      <div
        v-if="form.type === 'autocomplete' && form.options.length > 0"
        class="mb-2 option__fields"
      >
        <b-field v-for="option in form.options" :key="option.value" grouped>
          <b-input
            v-model="option.display"
            disabled
            expanded
            placeholder="Input an option"
          ></b-input>
        </b-field>
      </div>
      <b-field v-if="form.type === 'autocomplete'" grouped>
        <b-input v-model="newOption" expanded placeholder="Option..."></b-input>
        <p class="control">
          <b-button label="Add" type="is-primary" @click="addOption" />
        </p>
      </b-field>
      <BaseInput
        disabled
        label="Value"
        v-model="form.value"
        placeholder="Input a config value"
      />
      <div class="block">
        <b-field label="Multiple">
          <b-radio v-model="form.multiple" native-value="true"> True </b-radio>
          <b-radio v-model="form.multiple" native-value="false">
            False
          </b-radio>
        </b-field>
      </div>
    </section>
    <div class="buttons is-pulled-right">
      <b-button type="is-success" outlined @click="resetConfig"
        >Reset Config</b-button
      >
      <b-button type="is-success" @click="addConfig">Add Config</b-button>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput";
import BaseSelect from "@/components/Base/BaseSelect";
import { v4 as uuidv4 } from "uuid";
import { cloneDeep } from "lodash";

const RAW_FORM = {
  key: "",
  label: "",
  type: null,
  value: null,
  options: [],
  multiple: false,
};

export default {
  name: "ConfigFrom",
  components: {
    BaseInput,
    BaseSelect,
  },
  data() {
    return {
      form: cloneDeep(RAW_FORM),
      typeOptions: [
        {
          value: "input",
          display: "Input",
        },
        {
          value: "autocomplete",
          display: "Autocomplete",
        },
      ],
      newOption: "",
      config: [],
    };
  },
  methods: {
    addOption() {
      this.form.options.push({
        value: uuidv4(),
        display: this.newOption,
      });
      this.newOption = "";
    },
    addConfig() {
      this.config.push(this.form);
      this.$emit("use-config", this.config);
      this.resetForm();
    },
    resetConfig() {
      this.$emit("use-config", []);
      this.resetForm();
    },
    resetForm() {
      this.form = cloneDeep(RAW_FORM);
    },
  },
};
</script>

<style lang="scss" scoped>
.option__fields {
  max-height: 150px;
  overflow: auto;
}
</style>

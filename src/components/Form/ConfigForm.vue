<template>
  <div class="mt-4 p-5">
    <h1 class="has-text-weight-semibold is-size-5 mb-2">Enter your config</h1>
    <section>
      <BaseInput
        label="Key"
        v-model="form.key"
        :invalid="this.invalidList.includes('key')"
        placeholder="Input a config key"
      />
      <BaseInput
        label="Label"
        v-model="form.label"
        :invalid="this.invalidList.includes('label')"
        placeholder="Input a config label"
      />
      <BaseSelect
        label="Type"
        expanded
        v-model="form.type"
        :options="typeOptions"
        :invalid="this.invalidList.includes('type')"
        placeholder="Select a search type"
      />
      <OptionField
        v-if="form.type === 'autocomplete'"
        v-model="newOption"
        :options="form.options"
        @add-option="addOption"
      />
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
      <b-button
        type="is-success"
        :disabled="disabledAddConfig"
        @click="addConfig"
        >Add Config</b-button
      >
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput";
import BaseSelect from "@/components/Base/BaseSelect";
import { v4 as uuidv4 } from "uuid";
import { cloneDeep } from "lodash";
import OptionField from "./OptionField.vue";

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
    OptionField,
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
      invalidList: [],
    };
  },
  computed: {
    requiredField() {
      return {
        key: true,
        label: true,
        type: true,
        value: false,
        options: this.form.type === "autocomplete",
        multiple: true,
      };
    },
    disabledAddConfig() {
      return (
        this.form.type === "autocomplete" && this.form.options.length === 0
      );
    },
  },
  methods: {
    addOption() {
      if (!this.newOption) {
        this.showAlert({ message: "Option is required !" });
        return;
      }
      this.form.options.push({
        value: uuidv4(),
        display: this.newOption,
      });
      this.newOption = "";
    },
    addConfig() {
      const isValid = this.validate();
      if (!isValid) {
        this.showAlert({ message: "Please fillin required fields." });
        return;
      }
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
    validate() {
      this.invalidList = [];
      Object.keys(this.form).forEach((key) => {
        if (typeof this.form[key] === "boolean") return;
        if (Array.isArray(this.form[key])) {
          if (
            this.form.type === "autocomplete" &&
            this.form[key].length === 0
          ) {
            this.showAlert({
              message: "Autocomplete is required at least one option",
            });
            this.invalidList.push(key);
          }
        } else {
          if (this.requiredField[key] && !this.form[key])
            this.invalidList.push(key);
        }
      });
      return this.invalidList.length === 0;
    },
    showAlert({ message, type = "is-warning" }) {
      this.$buefy.snackbar.open({
        message: message,
        type: type,
        position: "is-top",
        actionText: "Got it",
        duration: 3500,
        onAction: () => {},
      });
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

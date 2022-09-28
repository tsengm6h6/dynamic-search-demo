<template>
  <div>
    <b-field label="Attributes" class="pr-3" v-if="attrOptions.length > 0">
      <b-select expanded v-model="newAttr.key" placeholder="Attrs. key">
        <option
          v-for="option in attrOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.display }}
        </option>
      </b-select>
      <b-input
        expanded
        v-model="newAttr.value"
        :disabled="!newAttr.key"
        placeholder="Attrs. value"
      ></b-input>
      <div class="control">
        <b-button
          icon-right="plus"
          type="is-primary"
          :disabled="!newAttr.key || !newAttr.value"
          @click="addAttribute()"
        />
      </div>
    </b-field>

    <div class="attr__field mb-4 pr-3">
      <b-field
        v-for="(value, key, index) in currentAttrs"
        :key="key"
        expanded
        :label="attrOptions.length === 0 && index === 0 ? 'Attributes' : ''"
      >
        <b-select expanded disabled :value="key" placeholder="Attrs. key">
          <option
            v-for="attr in originAttributes"
            :key="attr.value"
            :value="attr.value"
          >
            {{ attr.display }}
          </option>
        </b-select>
        <b-input
          :value="value"
          disabled
          placeholder="Attrs. value"
          expanded
        ></b-input>
        <div class="control">
          <b-button
            icon-right="delete"
            type="is-primary"
            outlined
            @click="removeAttribute(key)"
          />
        </div>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttrField",
  props: {
    attributes: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {
      newAttr: {
        key: null,
        value: null,
      },
      originAttributes: [
        {
          value: "placeholder",
          display: "Placeholder",
        },
        {
          value: "min",
          display: "MMMMin",
        },
        {
          value: "max",
          display: "MAXXX",
        },
        {
          value: "max11",
          display: "MAXXX222",
        },
        {
          value: "max33",
          display: "MAXXX44",
        },
      ],
    };
  },
  watch: {
    "newAttr.value": {
      handler(val) {
        if (val) {
          this.$emit("ready-to-save", false);
        } else {
          this.$emit("ready-to-save", true);
        }
      },
    },
  },
  computed: {
    attrOptions() {
      return (
        this.originAttributes.filter(
          ({ value }) => !this.selected.includes(value)
        ) || []
      );
    },
    selected() {
      return Object.keys(this.attributes) || [];
    },
    currentAttrs: {
      get() {
        return this.attributes;
      },
      set(newVal) {
        console.log("set", newVal);
        this.$emit("change-attrs", newVal);
      },
    },
  },
  methods: {
    addAttribute() {
      if (!this.newAttr.key || !this.newAttr.value) return;
      this.currentAttrs = {
        ...this.currentAttrs,
        [this.newAttr.key]: this.newAttr.value,
      };
      this.newAttr = {
        key: null,
        value: null,
      };
      this.$emit("ready-to-save", true);
    },
    removeAttribute(key) {
      const obj = {
        ...this.currentAttrs,
      };
      delete obj[key];
      this.currentAttrs = { ...obj };
    },
  },
};
</script>

<style lang="scss" scoped>
.attr__field {
  max-height: 150px;
  overflow: auto;
}
</style>

<template>
  <div>
    <b-field label="Attributes" v-if="attrOptions.length > 0">
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

    <b-field
      class="attr__field p-r-2"
      v-for="option in list"
      :key="option.key"
      grouped
      :label="attrOptions.length === 0 ? 'Attributes' : ''"
    >
      <b-field expanded>
        <b-select
          expanded
          disabled
          v-model="option.key"
          placeholder="Attrs. key"
        >
          <option
            v-for="attr in originAttributes"
            :key="attr.value"
            :value="attr.value"
          >
            {{ attr.display }}
          </option>
        </b-select>
        <b-input
          v-model="option.value"
          disabled
          placeholder="Attrs. value"
          expanded
        ></b-input>
      </b-field>
      <div class="control">
        <b-button
          icon-right="delete"
          type="is-primary"
          outlined
          @click="removeAttribute(option)"
        />
      </div>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "AttrField",
  props: {
    options: {
      type: Array,
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
      return this.list?.map(({ key }) => key) || [];
    },
    list: {
      get() {
        return (
          this.options.map((item) => ({
            key: Object.keys(item)[0],
            value: Object.values(item)[0],
          })) || []
        );
      },
      set(newVal) {
        const list = newVal?.map(({ key, value }) => ({ [key]: value })) || [];
        this.$emit("change-attrs", list);
      },
    },
  },
  methods: {
    addAttribute() {
      if (!this.newAttr.key || !this.newAttr.value) return;
      this.list = this.list.concat(this.newAttr);
      this.newAttr = {
        key: null,
        value: null,
      };
      this.$emit("ready-to-save", true);
    },
    removeAttribute({ key }) {
      this.list = this.list.filter((option) => option.key !== key);
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

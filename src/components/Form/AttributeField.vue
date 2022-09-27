<template>
  <div>
    <b-field label="Attributes" v-if="attrOptions.length > 0" grouped expanded>
      <b-field expanded>
        <b-select v-model="newAttr.key" placeholder="Attrs. key">
          <option
            v-for="(option, index) in attrOptions"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </b-select>
        <b-input
          v-model="newAttr.value"
          :disabled="!newAttr.key"
          placeholder="Attrs. value"
          expanded
        ></b-input>
      </b-field>
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
      class="attr__field"
      :label="attrOptions.length === 0 ? 'Attributes' : ''"
    >
      <b-field v-for="option in list" :key="option.key" grouped expanded>
        <b-field expanded>
          <b-select disabled v-model="option.key" placeholder="Attrs. key">
            <option
              v-for="(attr, index) in allowAttrs"
              :key="index"
              :value="attr"
            >
              {{ attr }}
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
    </b-field>
  </div>
</template>

<script>
const ALLOW_ATTRS = ["placeholder"];

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
      allowAttrs: ALLOW_ATTRS,
      newAttr: {
        key: null,
        value: null,
      },
      selectedAttrs: [],
    };
  },
  computed: {
    attrOptions() {
      return this.allowAttrs.filter(
        (item) => !this.selectedAttrs.includes(item)
      );
    },
    list: {
      get() {
        return this.options.map(({ key, value }) => ({ key, value }));
      },
      set(newVal) {
        console.log("list");
        this.$emit("change-attrs", newVal);
      },
    },
  },
  methods: {
    addAttribute() {
      if (!this.newAttr.key || !this.newAttr.value) return;
      this.selectedAttrs.push(this.newAttr.key);
      this.list = this.list.concat(this.newAttr);
      this.newAttr = {
        key: null,
        value: null,
      };
    },
    removeAttribute({ key, id }) {
      console.log(key, id);
      this.selectedAttrs = this.selectedAttrs.filter((attr) => attr !== key);
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

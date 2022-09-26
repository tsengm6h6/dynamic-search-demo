<template>
  <div id="app">
    <BaseCard>
      <Search :init-config="config" />
    </BaseCard>
    <b-button @click="changeConfig">Switch</b-button>
  </div>
</template>

<script>
import BaseCard from "./components/Base/BaseCard.vue";
import Search from "./components/Search/Search.vue";
import { mockSearchConfigOne } from "@/mock/mockData.js";
import { mockSearchConfigTwo } from "@/mock/mockData.js";

export default {
  name: "App",
  components: {
    BaseCard,
    Search,
  },
  data() {
    return {
      useConfig: "one",
      config: mockSearchConfigOne,
    };
  },
  methods: {
    changeConfig() {
      this.config =
        this.useConfig === "one" ? mockSearchConfigTwo : mockSearchConfigOne;
      this.useConfig = this.useConfig === "one" ? "two" : "one";
    },
  },
};
</script>

<style></style>

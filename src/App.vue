<template>
  <div id="app">
    <BaseCard>
      <Search :init-config="config" @search="setResult" />
      <div class="is-flex is-flex-direction-column">
        <CodeDisplay title="Config" :list="config" />
        <CodeDisplay title="Result" :list="result" />
      </div>
    </BaseCard>
    <b-button @click="changeConfig">Switch</b-button>
  </div>
</template>

<script>
import BaseCard from "./components/Base/BaseCard.vue";
import Search from "./components/Search/Search.vue";
import CodeDisplay from "./components/CodeDisplay.vue";
import { mockSearchConfigOne } from "@/mock/mockData.js";
import { mockSearchConfigTwo } from "@/mock/mockData.js";

export default {
  name: "App",
  components: {
    BaseCard,
    Search,
    CodeDisplay,
  },
  data() {
    return {
      useConfig: "one",
      config: mockSearchConfigOne,
      result: [],
    };
  },
  methods: {
    changeConfig() {
      this.config =
        this.useConfig === "one" ? mockSearchConfigTwo : mockSearchConfigOne;
      this.useConfig = this.useConfig === "one" ? "two" : "one";
    },
    setResult(payload) {
      this.result = payload;
    },
  },
};
</script>

<style></style>

<template>
  <div id="app">
    <BaseCard>
      <Search ref="search" :init-config="config" @search="setResult" />
      <div class="mt-4">
        <b-button type="is-success" @click="onTryIt">Try it</b-button>
      </div>
      <div class="columns is-multiline is-centered">
        <ConfigForm
          class="column is-8"
          v-if="addConfig"
          @use-config="changeConfig"
        />
        <CodeDisplay class="column is-6" title="Config" :list="config" />
        <CodeDisplay class="column is-6" title="Result" :list="result" />
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "./components/Base/BaseCard.vue";
import Search from "./components/Search/Search.vue";
import CodeDisplay from "./components/CodeDisplay.vue";
import ConfigForm from "./components/Form/ConfigForm.vue";
import { mockSearchConfigOne } from "@/mock/mockData.js";

export default {
  name: "App",
  components: {
    BaseCard,
    Search,
    CodeDisplay,
    ConfigForm,
  },
  data() {
    return {
      useConfig: "one",
      config: mockSearchConfigOne,
      result: [],
      addConfig: false,
    };
  },
  methods: {
    changeConfig(payload) {
      this.config = payload;
      this.$refs.search.reset();
      this.result = [];
    },
    setResult(payload) {
      this.result = payload;
    },
    onTryIt() {
      this.config = [];
      this.addConfig = true;
    },
  },
};
</script>

<style></style>

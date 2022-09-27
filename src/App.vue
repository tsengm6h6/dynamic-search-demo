<template>
  <div id="app">
    <BaseCard>
      <Search ref="search" :init-config="config" @search="setResult" />
      <div class="mt-4">
        <b-button type="is-success" @click="toggleTryIt">
          {{ tryIt ? "Back to Demo" : "Try it" }}
        </b-button>
      </div>
      <div>
        <div class="columns is-multiline">
          <ConfigForm
            class="column is-4"
            v-if="tryIt"
            @use-config="changeConfig"
          />
          <CodeDisplay
            :class="`column ${tryIt ? 'is-4' : 'is-6'}`"
            title="Config"
            :list="config"
          />
          <CodeDisplay
            :class="`column ${tryIt ? 'is-4' : 'is-6'}`"
            title="Result"
            :list="result"
          />
        </div>
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
      tryIt: false,
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
    toggleTryIt() {
      this.tryIt = !this.tryIt;
      this.config = this.tryIt ? [] : mockSearchConfigOne;
      this.reset();
    },
    reset() {
      this.$refs.search.reset();
      this.result = [];
    },
  },
};
</script>

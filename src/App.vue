<template>
  <div id="app">
    <BaseCard>
      <div class="is-flex is-justify-content-center is-flex-grow-0 mb-5">
        <div>
          <h1
            :class="`typer has-text-weight-semibold is-size-5 is-family-monospace ${
              tryIt ? 'border-none' : ''
            }`"
          >
            Dynamic Search Component
          </h1>
        </div>
      </div>
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

<style lang="scss" scoped>
.typer {
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
  border-right: 0.1em solid #edac4b;
  letter-spacing: 0.1em;
  animation: typing 3.5s steps(40, end), caret 0.75s step-end infinite;
}

.border-none {
  border: none;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #edac4b;
  }
}
</style>

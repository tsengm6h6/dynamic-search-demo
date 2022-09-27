<template>
  <div class="p-6">
    <div class="card is-flex-grow-1">
      <div class="card-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

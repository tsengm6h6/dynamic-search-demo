<template>
  <div class="py-4 px-2">
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

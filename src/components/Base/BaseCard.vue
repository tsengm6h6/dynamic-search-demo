<template>
  <div class="container is-fluid mt-6">
    <div class="card">
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

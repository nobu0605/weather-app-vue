<template>
  <div class="bg-black text-white p-3 font-bold w-32 text-sm">
    <NuxtLink :to="{ path: '/' }">
      {{ text }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MenuItem',
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

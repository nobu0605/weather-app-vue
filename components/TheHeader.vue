<template>
  <h1 class="text-3xl font-bold underline">{{ title }}</h1>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      title: 'Hello, World!',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'description' },
      ],
    }
  },
}
</script>

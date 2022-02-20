<template>
  <div>
    <div class="flex justify-start items-center pt-15 pb-15 pl-15">
      <NuxtLink to="/">
        <h1 class="text-2xl font-bold p-4">Weather app</h1>
      </NuxtLink>
    </div>
    <div class="flex flex-row bg-black text-center">
      <MenuItem text="Home" link="/" />
      <MenuItem text="Local Weather" link="/" />
      <MenuItem text="World Weather" link="/" />
      <MenuItem text="City List" link="/" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TheHeader',
  head() {
    return {
      title: 'Weather app',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
}
</script>

<template>
  <div>
  <HomeHero />
    <HomeTrailer />
    <HomeAbout />
    <HomeCast />
    <HomePhotos />
    <HomeDirector />
    <!-- <HomeIntro /> -->
    <!-- <HomeReinforcement />
    <HomeHero />
    <HomeBenefit />
    <HomeClosingStatement /> -->
  </div>
</template>

<script setup>
useHead({
  title: 'Mithera - Short Movie',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Mithera is a short movie.' }
  ],
  bodyAttrs: {
    class: 'home'
  }
})
</script>

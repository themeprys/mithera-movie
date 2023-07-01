<template>
  <div>
  <HomeHero />
    <HomeTrailer />
    <HomeNews />
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

<script lang="ts" setup>

useHead({
  title: 'Mithera - a Film by Adinegoro Natsir | Mondiblanc Film Workshop',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Mother is sick and her daughter Rara is trying hard to make her feel better. But mother can only be cured if her daughter is willing to make a sacrifice' }
  ],
  bodyAttrs: {
    class: 'home'
  }
})



</script>

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
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  // charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Mithera is a short movie produced by Adinegoro Natsir and written by Diah Hayu Ramyastri as part of Omnibus Q released by Mondiblanc Film Workshop.' }
  ],
  bodyAttrs: {
    class: 'home'
  }
})



</script>

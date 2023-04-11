<template>
    <section class="mth_trailer bg-black pb-5">
        <div class="container py-5 text-center">
            <h3>Trailer</h3>
    <div class='embed-container'><iframe src='https://www.youtube.com/embed/ZzxALLPRN0g' frameborder='0' allowfullscreen></iframe></div>
  </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
.mth_trailer {
    background: url(~/public/img/hero.webp) no-repeat center right scroll; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.mth_trailer h3 {
    font-size: 6vh;
    font-weight: bold;
    padding-bottom: 50px;
    color: #eee;
}
.mth_trailer .container {
    max-width: 800px;
}
</style>
<template>
    <section class="mth_trailer bg-black pb-5" id="trailer">
        <div class="container py-5 text-center">
            <h3><i class="fa-brands fa-youtube"></i> Movie Trailer</h3>
            <div class='embed-container'>
                <iframe src='https://www.youtube.com/embed/ZzxALLPRN0g' frameborder='0'
                    allowfullscreen></iframe>
            </div>
            <div class="ms-3 mt-5 text-white fw-bold">
                2023 Official Selection 
                <img src="~/public/img/MinikinoFilmWeek.png" class="img-fluid ps-3" style="max-width:100px"/>
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
.mth_trailer {
    background: url(~/public/img/hero.webp) no-repeat center right fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.mth_trailer h3 {
    font-size: 50px;
    font-weight: bold;
    padding-bottom: 50px;
    color: #eee;
}

.mth_trailer .container {
    max-width: 800px;
}
</style>
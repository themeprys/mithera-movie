<script setup>
const { pending, data: posts } = useFetch('https://mondiblanc.org/wp-json/wp/v2/posts?categories=724', {
    lazy: true
})
</script>

<template>
    <section id="news" class="mth_news py-5">
        <div class="container mt-5 mb-5">
            <h3 class="text-center"><i class="fa-solid fa-newspaper"></i> Latest Update</h3>
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2 px-4">
                    <div class="row">
                        <div class="col-12 col-md-4 p-4 p-md-2" v-for="item in posts.slice(0, 3)" :key="item.id">
                            <a :href="item.link" target="_blank">
                                <div class="card border-0">
                                    <!-- <div class="img-wrap ratio-4-3">
                                        <div class="img-content"> -->
                                            <!-- <div class="imagewrapper"> -->
                                    <img :src="item.jetpack_featured_media_url" style="width: 100%; height: 200px; object-fit: cover; object-position: 100% 50%;" alt="Mithera">
                                <!-- </div>                                     -->
                                    <!-- </div>
                                    </div> -->
                                    <div class="card-body">
                                        <h4 style="color: black;">{{ item.title.rendered }}</h4>
                                        <p>{{ $dayjs(item.date).format('DD-MM-YYYY') }}</p>
                                        <!-- <p class="card-text">
                                            {{ item.content.rendered }}

                                        </p> -->
                                        <!-- <p class="card-text">Some quick example text to build on the card title and make up
                                            the bulk of
                                            the card's content.</p> -->
                                    </div>
                                </div>
                            </a>
                        </div>
                        <!-- <div class="col-12 col-md-4 p-4 p-md-2">
                    <div class="card">
                        <img src="https://place-hold.it/600x400?text=News" class="card-img-top" alt="Mithera">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 p-4 p-md-2">
                    <div class="card">
                        <img src="https://place-hold.it/600x400?text=News" class="card-img-top" alt="Mithera">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
.mth_news {
    background: url(~/public/img/hero-black.webp) no-repeat center right fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.mth_news h3 {
    font-size: 50px;
    font-weight: bold;
    padding-bottom: 50px;
    color: #fff;
}

.mth_news a {
    text-decoration: none;
    color: #222;
}
 
</style>

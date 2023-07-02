<template>
  <div class="mth_hero">
    <div class="container">
      <div class="row">
        <div class="col-12 d-block d-md-none">
          <img src="~/public/img/stone.webp" class="img-fluid" />
        </div>
        <div class="col-12 col-md-4 pt-3 pt-md-5">
          <img src="~/public/img/title.webp" class="img-fluid" />
          <p class="lead mb-4 mth_subheadline pt-4 ps-3">
            Mother is sick and her daughter Rara is trying hard to make her feel better. But mother can only be cured if
            her daughter is willing to make an ultimate sacrifice.
          </p>

          <!-- <div class="ms-3"> -->
            <div class="d-grid gap-2">
            <a href="#trailer" type="button" class="btn btn-light btn-lg px-4 gap-3">
              <i class="fa-brands fa-youtube"></i> Watch Movie Trailer
            </a>

          <!-- </div> -->

            <!-- <a href="#trailer" type="button" class="btn btn-light btn-lg px-4 gap-3">
              <i class="fa-brands fa-youtube"></i> Watch Movie Trailer
            </a> -->
          </div>
          <!-- <div class="ms-3 mt-5 col-12 mth_minikino"> 
            <img src="~/public/img/MinikinoFilmWeek.png" class="img-fluid" width="100px"> 2023 Official Selection           
          </div> -->
        </div>
        <div class="col-12 col-md-7 offset-1 d-none d-md-block">
          <img src="~/public/img/stone.webp" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mth_hero {
  background: url(~/public/img/hero.webp) no-repeat center right scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 160px 0 100px;
  /* min-height: 900px; */
}

/* .mth_headline {
  font-size: 10vh;
  color: #fffcdd;
  text-transform: uppercase;
} */

.mth_subheadline {
  color: #fff;
  font-size: 15px;
}
.mth_minikino {
  font-size: 20px;
  color: #fff;
}
</style>
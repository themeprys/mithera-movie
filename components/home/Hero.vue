<template>
  <div class="mth_hero">
    <div class="container">
    <div class="row">
      <div class="col-12 d-block d-md-none">
            <img src="~/public/img/stone.webp" class="img-fluid" />
          </div>      
          <!-- <h1 class="display-5 fw-bold text-body-emphasis mth_headline">Mithera</h1> -->
          <div class="col-12 col-md-4 pt-5">
            <img src="~/public/img/title.webp" class="img-fluid" />            
            <p class="lead mb-4 mth_subheadline pt-4 ps-3">
              Mother is sick and her daughter Rara is trying hard to make her feel better. But mother can only be cured if her daughter is willing to make an ultimate sacrifice.
            </p>
            <div class="d-grid gap-2 d-sm-flex mt-5">

              <a href="#trailer" type="button" class="btn btn-light btn-lg px-4 gap-3">
                Watch Movie Trailer
              </a>
            </div>
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
  padding: 60px 0 50px;
  /* min-height: 900px; */
}
.mth_headline {
  font-size: 10vh;
  color: #fffcdd;
  text-transform: uppercase;
}
.mth_subheadline {
  color: #fffcdd;
  font-size: 2vh;
}
</style>
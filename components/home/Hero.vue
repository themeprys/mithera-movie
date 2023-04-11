<template>
  <div class="mth_hero">
    <div class="container">
    <div class="row">
          <!-- <h1 class="display-5 fw-bold text-body-emphasis mth_headline">Mithera</h1> -->
          <div class="col-4 pt-5">
            <img src="~/public/img/title.webp" class="img-fluid" />            
            <!-- <p class="lead mb-4 mth_subheadline">
              a film about life and death and sacrifice within
            </p> -->
            <div class="d-grid gap-2 d-sm-flex mt-5">
              <button type="button" class="btn btn-light btn-lg px-4 gap-3">
                Watch Trailer
              </button>
            </div>
          </div>
          <div class="col-8">
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
  font-size: 3vh;
}
</style>
<template>
  <div class="mth_photos px-2 pt-4 pb-5">
    <div class="container">
      <h3 class="text-center pb-5">Still Photo</h3>      
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="~/public/img/01.webp" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="~/public/img/02.webp" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="~/public/img/03.webp" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="~/public/img/04.webp" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="~/public/img/05.webp" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mth_photos {
  background: black;
  /* padding: 100px; */
}
.mth_photos h3 {
    font-size: 6vh;
    font-weight: bold;
    color: #eee;
  }
  .mth_photos .lead {
    padding: 20px 0
  }
  </style>
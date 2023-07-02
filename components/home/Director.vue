<template>
  <section id="statement" class="mth_director text-dark pb-5 pb-md-0 pt-5">
    <div class="container">
      <div class="row justify-content-center pt-5">
        <h3 class="text-center pb-5"><i class="fa-solid fa-quote-right"></i> Director's Statement</h3>

        <div class="col-12 col-md-4 text-center d-none d-md-block">
          <img alt="Image" src="~/public/img/adi.webp" class="img-fluid"/>
        </div>
        <div class="col-12 col-md-8 pt-3">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button bg-dark text-white fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Overview
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    "As a filmmaker, I am inspired to tell the story of a selfless daughter who is willing to sacrifice
                    her own life to save her sick mother.<br><br>The film explores the complex relationship between a
                    mother and daughter and the lengths they will go to for each other. Through the daughter's
                    perspective, the film highlights the theme of love and sacrifice, as well as the struggle between life
                    and death.<br><br>This film aims to shed light on the selfless acts of love and devotion that exist
                    within families, and to show that the bond between mother and daughter is unbreakable.”
                  </p>
                  <span>Adinegoro Natsir, Director</span>
                  <img alt="Image" src="~/public/img/adi.webp" class="img-fluid pb-5 d-block d-md-none"/>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-dark text-white fw-bold" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
                  Profile
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Adinegoro Natsir is a multi-talented individual with a passion for the performing arts. He discovered
                    his love for acting in junior high school when he joined the theater extracurricular program. During
                    his college years at the University of Indonesia (UI), he was an active member of the Agora Theatre, a
                    theater group for Philosophy students. He has participated in several notable performances, including
                    "Kudeta," directed by Tommy F Awuy. Currently, Adinegoro is pursuing a Master's degree in American
                    Studies at UI, with a focus on comparative studies of the American and Indonesian entertainment
                    industries.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-dark text-white fw-bold" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  Filmography
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>Sorry — 2022, Short Fiction - Actor</li>
                    <li>What It Takes to Get a Shot — 2022, Short Fiction - Assistant Director</li>
                    <li>Unstockholm — 2022, Short Fiction - Actor</li>
                  </ul>



                </div>
              </div>
            </div>
          </div>
          <!-- <img src="~/public/img/mondiblanc.png" class="img-fluid"/> -->

          <!-- <p class="h2">
                  "As a filmmaker, I am inspired to tell the story of a selfless daughter who is willing to sacrifice her own life to save her sick mother.<br><br>The film explores the complex relationship between a mother and daughter and the lengths they will go to for each other. Through the daughter's perspective, the film highlights the theme of love and sacrifice, as well as the struggle between life and death.<br><br>This film aims to shed light on the selfless acts of love and devotion that exist within families, and to show that the bond between mother and daughter is unbreakable.”
                </p>
                <span>Adinegoro Natsir, Director</span> -->
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {};
</script>
  
<style>
.mth_director {
  background: #fafafa;
}
.mth_director h3 {
  font-size: 50px;
    font-weight: bold;
    color: #000;  
}
.accordion-button:focus {
  border-color: #111 !important;
  box-shadow: unset !important;
}</style>


function About() {
  return (
    <>
      <section class="section about" id="about">
        <div class="container">

          <figure class="about-banner">

            <img src="/images/about-banner.jpg" width="800" height="652" loading="lazy" alt="Abishek's Photo"
              class="img-cover" />
            <div class="abs-icon abs-icon-1">
              <ion-icon name="logo-css3"></ion-icon>
            </div>

            <div class="abs-icon abs-icon-2">
              <ion-icon name="logo-javascript"></ion-icon>
            </div>

            <div class="abs-icon abs-icon-3">
              <ion-icon name="logo-react"></ion-icon>
            </div>

          </figure>

          <div class="about-content">

            <p class="section-subtitle">I'm a React Developer</p>

            <h2 class="h2 section-title">I Develop Application that Help People</h2>

            <p class="section-text">
              Hi! My name is Abishek. I'm a web developer and digital visual artist. I love creating things that exist on the internet. My interest in web development started in 2021 when I decided to upload my digital concept arts online.
            </p>
            <p class="section-text">
              Instead of creating an online Concepts Art website, i started
              enjoying web development. Creating custom things for web taught
              me a lot about design & development!
            </p>

            <a href="#projects" class="btn btn-primary blue">View Project</a>

          </div>

        </div>
      </section>
    </>
  )

}

export default About;
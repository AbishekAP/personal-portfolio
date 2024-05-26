

function Hero(){
    return (
        <>
        <section class="hero" style={{backgroundImage: "url('/images/hero-bg.jpg')"}} id="home">
              <div class="container">
        
                <div class="hero-banner">
        
                  <img src="/images/hero-banner.jpg" width="800" height="864" loading="lazy" alt="Abishek"
                    class="img-cover" />
                    
                  <div class="elem elem-1">
                    <p class="elem-title">2</p>
        
                    <p class="elem-text">Years of Success</p>
                  </div>
        
                  <div class="elem elem-2">
                    <p class="elem-title">80+</p>
        
                    <p class="elem-text">Projects Completed</p>
                  </div>
        
                  <div class="elem elem-3">
                    <ion-icon name="trophy"></ion-icon>
                  </div>
        
                  <img src="/images/rotate-img.png" width="169" height="172" alt="I'm developer from Chennai"
                    class="rotate-img" />
                    
                </div>
        
                <div class="hero-content">
        
                  <h2 class="hero-title">
                    <span>Hello I'm</span>
                    <strong>Abishek R</strong> Web Developer from Chennai
                  </h2>
        
                  <p class="hero-text">
                  Web Developer with experience of Digital Concept Arts, Frontend Web Designs. I Love fun Web UI, collaboration and making products.
                  </p>
        
                  <div class="btn-group">
                    <a href="#contact" class="btn btn-primary blue">Get a Quote</a>
        
                    <a href="#about" class="btn">About Me</a>
                  </div>
        
                </div>
        
              </div>
            </section> 
        </>
    )
}
export default Hero;
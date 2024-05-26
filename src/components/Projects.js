

function Projects(){
    return (
        <>
        <section class="section projects" id="projects">
              <div class="container">
        
                <p class="section-subtitle">Projects</p>
        
                <h2 class="h2 section-title">My Amazing Works</h2>
        
                {/* <p class="section-text">
                  Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate
                </p> */}
        
                <ul class="project-list">
        
                  <li>
                    <a href="https://abishekap.github.io/netkart/" class="project-card" target="_blank" rel="noopener noreferrer" style={{backgroundImage:"url('/images/project-1.jpg')"}}>
                      <div class="card-content">
        
                        <p class="card-subtitle">NerKart</p>
        
                        <h3 class="h3 card-title">Online shopping platform</h3>
        
                        <span class="btn-link">
                          <span>View Project</span>
        
                          <ion-icon name="arrow-forward"></ion-icon>
                        </span>
        
                      </div>
                    </a>
                  </li>
        
                  <li>
                    <a href="https://abishekap.github.io/hand-cricket/" target="_blank" rel="noopener noreferrer" class="project-card" style={{backgroundImage:"url('/images/project-2.jpg')"}}>
                      <div class="card-content">
        
                        <p class="card-subtitle">Hand Cricket</p>
        
                        <h3 class="h3 card-title">Informal cricket variant</h3>
        
                        <span class="btn-link">
                          <span>View Project</span>
        
                          <ion-icon name="arrow-forward"></ion-icon>
                        </span>
        
                      </div>
                    </a>
                  </li>
        
                  <li>
                    <a href="https://abishekap.github.io/movie-finder/" class="project-card" target="_blank" rel="noopener noreferrer" style={{backgroundImage: "url('/images/project-3.jpg')"}}>
                      <div class="card-content">
        
                        <p class="card-subtitle">Movie Finder</p>
        
                        <h3 class="h3 card-title">Film information retrieval</h3>
        
                        <span class="btn-link">
                          <span>View Project</span>
        
                          <ion-icon name="arrow-forward"></ion-icon>
                        </span>
        
                      </div>
                    </a>
                  </li>
        
                  <li>
                    <a href="https://abishekap.github.io/chat-ai/" class="project-card" target="_blank" rel="noopener noreferrer" style={{backgroundImage: "url('/images/project-4.jpg')"}}>
                      <div class="card-content">
        
                        <p class="card-subtitle">Chatai</p>
        
                        <h3 class="h3 card-title">Conversational AI interface</h3>
        
                        <span class="btn-link">
                          <span>View Project</span>
        
                          <ion-icon name="arrow-forward"></ion-icon>
                        </span>
        
                      </div>
                    </a>
                  </li>
        
                </ul>
        
              </div>
            </section>
        </>

    )
}


export default Projects;
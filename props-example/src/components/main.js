import Project from "./projects";


export default function Main() {

        const projects = ["Angular" ,"Microservices"];
       const projElement = projects.map((proj)=>
        {
            console.log(proj)
            return <Project cardText={proj}></Project>
        });


    return (
        <main id="main">
       
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>Following are the git hub projects that i worked on ..This include wide verity of git repositories.</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        
                    {projElement} 


                    

                    </div>

                </div>
            </section>
        </main>
    )
}
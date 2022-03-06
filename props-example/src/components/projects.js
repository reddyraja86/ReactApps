import profile from '../img/portfolio/portfolio-1.jpg'


export default function Project(props) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">

            <div className="portfolio-wrap" >
                <img className="card-img-top" src={profile} alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">{props.cardText}</p>
                </div>
            </div>
        </div>
    )
}
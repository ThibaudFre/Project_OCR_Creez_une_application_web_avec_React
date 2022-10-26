import "../css/Banner.css"

const Banner = (props) => {
    return (
    <section className="bannerContainer">
        <img src={props.source} alt={props.attribut} />
        <h1>{props.title}</h1>
    </section>
    )
        
}

export default Banner;
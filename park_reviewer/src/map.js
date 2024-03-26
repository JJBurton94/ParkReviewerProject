import "./map.css"

export default function Map({img="https://pepperpot-studios.co.uk/cdn/shop/products/worcestershire-2_f2220d91-1020-4c8d-82f6-148c68f9098a_1200x1200.jpg?v=1631538308"}){
    return(
        <div>
        <img className="map" src={img} alt="map of Worcestershire"></img>
        <h6>this will be interacitve once live</h6>
        </div>
    )
}
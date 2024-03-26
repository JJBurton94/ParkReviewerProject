import "./activityList.css"

export default function ActivityList({location}){
    return(
        <div className="container">
        <div className="activityList">
            <h1>Top things to do in {location}</h1>
        </div>  
        </div>
    )
}
import react from "react"


 const Pet = (props) => {
    return(
        <div className="Pet">
            <h1>{props.name}, {props.breed}</h1>
        </div>
    )
}

export default Pet;
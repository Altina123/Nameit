import React from "react";
import NameCard from "../NameCards/NameCards";
import './ResultContainer.css'

const ResultContainer = ({suggestedNames}) =>{
    const namesJsx = suggestedNames.map((suggestedName)=>{
        //return <p key={suggestedName}>{suggestedName}</p>
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })


    return(
        <div className="results-container">
         <p>{namesJsx}</p>
        </div>
          )
}


export default ResultContainer;
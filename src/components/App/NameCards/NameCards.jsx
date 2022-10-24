import React from "react";
import './NameCards.css'


const nameCheapUrl ="https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
const NameCard = ({suggestedName}) => {
    return (
       <a 
       target= "_blank" rel="noreferrer"
       className="card-link" href={`${nameCheapUrl}${suggestedName}`}>
         <div className="result-name-card">
            <p className="resultname"> {suggestedName}</p></div>
       </a>
        
    )
}


export default NameCard;
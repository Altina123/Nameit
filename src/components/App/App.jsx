import React from "react";
import './App.css'
import Header from "./Header/Header";
import ResultContainer from "./ResultContainer/ResultContainer";
import SearchBox from "./SearchBox/SearchBox";

const name = require ('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
      headerText : "Name it",
      headerExpanded : true ,
      suggestedNames : [],
    }

    handleInputChange = (inputText) => {
    //console.log("input text is :",inputText)
    
    this.setState({headerExpanded:!inputText,
                  suggestedNames:inputText ? name(inputText):[]})


    }
    render(){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} 
                headTitle={this.state.headerText}/>
                <SearchBox onInputChange= {this.handleInputChange}/>
                <ResultContainer suggestedNames= {this.state.suggestedNames}/>
            </div>
        )
    }
}


export default App
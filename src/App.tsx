import React from "react"
import "./App.css"
import AtlasClientState from "./classes/client/AtlasClientState"
import Router from "./components/router/Router"
import StyleConventions from "./style/StyleConventions"

class App extends React.Component {
   state: AtlasClientState = new AtlasClientState(this)

   render() {
      return (
         <StyleConventions.GlobalStyleWrap>
            <Router state={this.state} />
         </StyleConventions.GlobalStyleWrap>
      )
   }
}

export default App

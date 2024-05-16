import React, { Component } from 'react'
import StatusComponent from './StatusComponent'
interface Prop{

}
interface State{
    formStatus:string;
}

export default class AppComponent extends Component <Prop,State>{
    constructor(prop:Prop){
        super(prop);
        this.state = {
            formStatus:"Open the form"
        }
    }
    toggleFormStatus = () =>{
        this.setState(prevState => ({
            formStatus: prevState.formStatus === "Open the form" ? "Close the form" : "Open the form"
        }))
    }
  render() {
    return (
      <div>
        <StatusComponent status={this.state.formStatus}></StatusComponent>
        <button onClick={this.toggleFormStatus}>Change props</button>
      </div>
    )
  }
}

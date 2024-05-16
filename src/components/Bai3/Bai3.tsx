import React, { Component } from 'react'
interface Prop{

}
interface State{
    companyName:string;
}
export default class Bai3 extends Component <Prop,State>{
    constructor(prop:Prop){
        super(prop);
        this.state = {
            companyName: "Rikkei Academy"
        }
    }
    toggleCompany = () => {
        this.setState(prevState => ({
            companyName: prevState.companyName === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy"
        }))
    }
  render() {
    return (
      <div>
        <h1>Bài 3</h1>
        <h3>Company: {this.state.companyName}</h3>
        <button onClick={this.toggleCompany}>Change state</button>
      </div>
    )
  }
}

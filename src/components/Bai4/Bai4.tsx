import React, { Component } from 'react'
interface Prop{

}
interface State{
  slogan:string;
}
export default class Bai4 extends Component<Prop,State> {
  constructor(prop:Prop){
    super(prop);
    this.state = {
      slogan:"Học code để đi làm"
    }
  }
  handleChangeState = () =>{
    const newSlogan = this.state.slogan === "Học code để đi làm" ? "Học code để đi làm" : "Học code để đi làm";
    this.setState({slogan:newSlogan});
  }
  shouldComponentUpdate(nextProps: Prop, nextState: State) {
    return nextState.slogan !==  this.state.slogan;
  }
  render() {
    return (
      <div>
        <h1>Bài 4</h1>
        <h3>Slogan: "{this.state.slogan}"</h3>
        <button onClick={this.handleChangeState}>Chang state</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
interface Prop{

}
interface State{
    userName:string;
}
export default class Exercise1 extends Component <Prop,State>{
    constructor(props:Prop){
        super(props);
        this.state = {
            userName:"Ngô Minh Đức",
        }
    }
  render() {
    return (
      <div>
            <h1>Bài 1</h1>
            <p>UserName: {this.state.userName}</p>
      </div>
    )
  }
}

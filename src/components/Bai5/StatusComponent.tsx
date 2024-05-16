import React, { Component } from 'react'
interface Prop{
  status:string;
}

export default class StateComponent extends Component <Prop> {
  render() {
    return (
      <div>
        <h1>Bài 5</h1>
        <h3>Status: "{this.props.status}"</h3>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component <{}, { message: string }>{
    constructor(props: {}) {
        super(props);
        this.state = {
          message: 'Interface rendering'
        };
      }
    
      changeMessage = () => {
        this.setState({ message: 'New Message' });
      };
    
  render() {
    return (
      <div>
        <h1>Bài 6</h1>
        <h3>Trước khi click:</h3>
        <Child message={this.state.message}></Child>
        <button onClick={this.changeMessage}>Change props</button>
        <h3>Sau khi click:</h3>
        <Child message={this.state.message}></Child>
      </div>
    )
  }
}

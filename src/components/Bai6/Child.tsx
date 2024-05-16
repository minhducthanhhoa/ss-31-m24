import React, { Component } from 'react'

interface MessageProps {
    message: string;
  }
  
  interface MessageState {
    message: string;
  }
  
export default class Child extends Component <MessageProps, MessageState>{
    constructor(props: MessageProps) {
        super(props);
        this.state = {
          message: this.props.message
        };
      }
      shouldComponentUpdate(nextProps: MessageProps) {
        return false; 
      }
  render() {
    return (
      <div>
        <p>Message: "{this.state.message}"</p>
      </div>
    )
  }
}

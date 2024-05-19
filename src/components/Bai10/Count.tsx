import React, { Component } from 'react'
interface Prop{

}
interface State{
    count:number;
    timerId:number;
}

export default class Count extends Component <Prop,State>{
    constructor(props: Prop){
        super(props);
        this.state ={
            count:0,
            timerId:0,
        }
    }
    componentDidMount(): void {
      const timerId = setInterval(() => {
        if(this.state.count === 9){
            this.setState({
                count:0,
            })
        } else {
            this.setState({
                count: this.state.count + 1,
            })
        }
            
        },1000)
        this.setState({
            timerId: timerId,
        })
    }
    
    componentWillUnmount(): void {
        
    }
  render() {
    return (
      <div>Count: {this.state.count}</div>
    )
  }
}

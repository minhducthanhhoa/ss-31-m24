import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string;
    age:number;
    loading:boolean;
    count:number;
}
export default class Classcomponent extends Component <Props,State>{
    constructor(props:Props){
        super(props)
        this.state = {
            name:"hoa",
            age:20,
            loading:true,
            count:0
        }
    }
    componentDidMount():void{
      /*
        phương thức componentDidMount được chạy sau khi component render các UI 
        dược cập nhật vào DOM
        đây là nơi lí tưởng để thực hiện các việc xủ lí như call API lấy dữ liệu
        và hiển thị
       */
      console.log("chạy sau khi component được render lần dầu");
      
    }
    // dùng các phương thức mặc định 
    componentWillMount():void{
      console.log("chạy sau khi constructor khởi tạo xong giá trị state.");
      /*
        Trong phương thức componentwillmount có thể tính toán lại state 
        nhưng lưu ý cái thời điểm chuyển từ phương thức componentwillMount đến phương thức render rất nhanh 
        nên lưu ý việc cập nhật state
       */
      
    }
    handleClick = () => {
      this.setState({
        count:this.state.count+1,
      })
    }
    /*
      Các phương thức cung cấp trong gia đoạn updating:
      
     */
    shouldComponentUpdate(): boolean {
      console.log("shouldcomponentupdate được gọi");
      // bắt buộc phải return về true hoặc false
      return true
    }
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
      console.log("componentwillupdate được gọi");
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
      console.log("componentdidupdate được gọi ");
    }
  render() {
    console.log("component được re-render");
    
    /*
      this.setState({
        name:"hồng"
      })
     */
    console.log("component được render lần đầu");
    this.setState({
      name:"hong"
    })
    
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <p>Giá trị count: {this.state.count}</p>
        <button onClick={this.handleClick}>Thay đổi state</button>
      </div>
    )
  }
}

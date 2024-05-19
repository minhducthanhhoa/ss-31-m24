import React, { useState } from 'react'
import Classcomponent from './components/Classcomponent'
import A from './components/A'
import Exercise1 from './components/Bai1/Exercise1';
import Notification from './components/Bai2/Notification';
import Bai3 from './components/Bai3/Bai3';
import Bai4 from './components/Bai4/Bai4';
import AppComponent from './components/Bai5/AppComponent';
import Parent from './components/Bai6/Parent';
import Count from './components/Bai10/Count';
import Bai11 from './components/Bai11/Bai11';
import Bai12 from './components/Bai12/Bai12';
export default function App() {
  const [active,setActive] = useState<boolean>(true);
  const removeComponent = () => {
      console.log("đã gọi vào hàm remove");
      setActive(!active);
  }
  return (
    <div>App
      {/* lifecucle: vòng đời của class component
      function component ko có vòng dời 
      VD: 1 con người sẽ có vòng dời:
      sinh ra -- lớn lên -- trưởng thành -- lập sự nghiệp -- lập gia đình -- mất
      class component nó cũng có vòng đời riêng của nó
      4 giai đoạn 
      giai đoạn 1: khởi tao(initial)
       - đi khởi tạo props và state
       thực thi 1 lần
      giai đoạn 2: mounting
      chạy các chương trình sau :
      componentWillmount
      render()
      componentDimount
      giai đoạn 3: updating(cập nhật)
        khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì giai đoạn updating xảy ra 
        cung cấp các phương thức sau:
          componentShouldUpdate
          componentwillupdate
          render()
          componentdidupdate
      giai đoạn 4: unmounting(gỡ bỏ khỏi UI)
          cung cấp phương thức 
          componentwillunmount: thường dùng để xử lí các vấn đề như clearTimount
          để tránh rò rỉ bộ nhớ
       */}
      <Classcomponent></Classcomponent>
      {active ? <A></A> : ""}
      <button onClick={removeComponent}>Tháo gỡ component A</button>
       <Exercise1></Exercise1>
       <Notification></Notification>
       <Bai3></Bai3>
       <Bai4></Bai4>
       <AppComponent></AppComponent>
       <Parent></Parent>
       <Count></Count>
       <Bai11></Bai11>
       <Bai12></Bai12>
    </div>
  )
}

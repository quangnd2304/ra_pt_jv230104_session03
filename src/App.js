import React from 'react';
import ClassCompDemo from './components/ClassCompDemo';
import FuncCompDemo from './components/FuncCompDemo';
import Course from './components/Course';
import RikkeiAcademy from './components/RikkeiAcademy';
import Rikkei from './components/Rikkei';

function App() {
  //Bình thường ReactJS
  const elementRa = React.createElement('h2', { className: 'rikkeiAcademy' }, "Rikkei Academy");
  //JSX
  const elementJSX = <h2 className='raJSX'>Học viện đào tạo CNTT chất lượng nhật bản</h2>
  // viết hàm format tên user
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  }
  const user = {
    firstName: "Nguyễn Văn",
    lastName: "A"
  }
  return (
    <div className="App">
      {/* Hiển thị ra 1 thẻ h2 chứa nội dung Rikkei Academy */}
      {elementRa}
      {elementJSX}
      {formatName(user)}
      <ClassCompDemo></ClassCompDemo>
      <FuncCompDemo />
      <Course />
      {/* Định nghĩa props có tên là company, giá trị là Rikkei Academy */}
      {/* Java: props đặc biệt có tên là children */}
      <RikkeiAcademy company="Rikkei Academy" raClass="JV230104">Java</RikkeiAcademy>
      <Rikkei rikkei="Rikkeisoft">Việt Nam</Rikkei>
      <RikkeiAcademy company="Rikkei Academy" raClass="JS230202">Javascript</RikkeiAcademy>
    </div>
  );
}

export default App;

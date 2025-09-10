import React from "react";
import { Login } from "react-admin";

const CustomLoginPage = (props) => {
  return (
    <div
      style={{
        backgroundImage: "url(https://example.com/your-image.jpg)", // 원하는 이미지 URL로 변경
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // 화면 전체를 덮도록 설정
      }}
    >
      <Login {...props} />
    </div>
  );
};

export default CustomLoginPage;

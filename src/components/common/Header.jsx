import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="memo__header">
      <div className="memo__header-logo clear">
        <span>로고</span>
        <h1>memo</h1>
      </div>
      <nav>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

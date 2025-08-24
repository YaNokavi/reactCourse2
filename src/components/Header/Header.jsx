import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
// import "./Header.css";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;

  h3 {
    margin: 0;
    font-size: 24px;
    color: #333;
  }

  span {
    font-size: 16px;
    color: #666;
  }
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeaderContainer>
      <h3>CunaEdu</h3>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}

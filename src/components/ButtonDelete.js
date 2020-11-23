import React from "react";
import styled from "styled-components";
const ButtonCardDelete = styled.button`
  border: none;
  margin: 5px 5px;
  background: #f908f9;
  border-radius: 10px;
  padding: 15px;
  width: 45%;
  max-width: 100%;
  transition: 0.6s;
  color: #353333;
  &:hover {
    filter: drop-shadow(0px 0px 5px #f908f9);
    transform: translateY(-5px);
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;

const ButtonDelete = ({ text, deleteTask, id }) => {
  return (
    <ButtonCardDelete onClick={() => deleteTask(id)}>{text}</ButtonCardDelete>
  );
};

export default ButtonDelete;

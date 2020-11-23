import React from 'react'
import styled from "styled-components";

const ButtonCardEdit = styled.button`
  border: none;
  margin: 5px 5px;
  background: #00e7ff;
  border-radius: 10px;
  padding: 15px;
  width: 45%;
  max-width: 100%;
  transition: 0.6s;
  color: #353333;
  &:hover {
    filter: drop-shadow(0px 0px 5px #000000);
    transform: translateY(-5px);
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;


const ButtonEdit = ({text,activeEdit,id,task,title}) => {
  return (
    <ButtonCardEdit data-toggle="modal"
    data-target="#exampleModal"
    data-whatever="@mdo" onClick={()=> activeEdit(task,id,title)}>{text}</ButtonCardEdit>
    )
}

export default ButtonEdit;

import React, { useState } from "react";
import styled from "styled-components";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

const Title = styled.h1`
  font-size: 1.3rem;
  color: #f2f2f2;
  text-transform: uppercase;
`;
const Container = styled.div`
  filter: drop-shadow(0px 0px 2px #000000);
  color: #f908f9;
  background: #353333;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 10px;
  padding: 20px;
  transition: 0.6s;
  &::after {
    content: "";
    width: 3px;
    height: 100%;
    background: #f908f9;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover {
    filter: drop-shadow(0px 0px 1px #f2f2f2);
  }
  @media (max-width: 360px) {
    margin: 5px auto;
  }
`;
const Paragraph = styled.p`
  color: #f2f2f2;
`;
const SpanParagraph = styled.span`
  font-weight: bold;
  color: #f908f9;
  text-decoration: underline;
`;
const ContainerSpan = styled.div`
  overflow-x: scroll;
  margin: 20px;
  scrollbar-width: none;
`;
const CheckedButton = styled.button`
  border: none;
  margin: 5px 5px;
  background: #c4f908;
  border-radius: 10px;
  padding: 5px;
  width: 15%;
  max-width: 100%;
  transition: 0.6s;
  color: #353333;
  &:hover {
    filter: drop-shadow(0px 0px 5px #000000);
    transform: translateY(-2px);
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;
const Checked = styled.h1`
  font-size: 1.3rem;
  color: red;
  text-transform: uppercase;
`;
const ParagraphTask = styled.p`
  color: #f2f2f2;
  font-size: 1rem;
  text-transform: capitalize;
`;
const Card = ({
  id,
  task,
  title,
  date,
  deleteTask,
  activeEdit,
  hour,
  edition,
}) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <Container
      className={
        checked
          ? "checked col-11 col-md-6 col-lg-2"
          : "col-11 col-md-5  col-lg-2"
      }
    >
      {checked ? <Checked>{title}</Checked> : <Title> {title} </Title>}

      <Paragraph>
        Date: <SpanParagraph>{date}</SpanParagraph>
      </Paragraph>
      <Paragraph>
        Hour: <SpanParagraph>{hour}</SpanParagraph>
      </Paragraph>
      <Paragraph>What to do:</Paragraph>
      <label>Done:</label>
      <CheckedButton className={checked ? "" : "nope"} onClick={() => toggle()}>
        {checked ? (
          <i className="fas fa-check "></i>
        ) : (
          <i className="fas fa-times"></i>
        )}{" "}
      </CheckedButton>
      <ContainerSpan>
        <ParagraphTask>{task}</ParagraphTask>
      </ContainerSpan>
      {!edition && (
        <ButtonEdit
          text="Edit"
          activeEdit={activeEdit}
          id={id}
          task={task}
          title={title}
        />
      )}

      <ButtonDelete text="Delete" deleteTask={deleteTask} id={id} />
    </Container>
  );
};

export default Card;

import React from "react";
import Title from "../components/Title";
import "../styles/pages/createUser.css";
import Form from "../components/Form";
import SubTitle from "../components/SubTitle";
function CreateUser() {
  return (
    <>
      <Title title="App usuarios"></Title>
      <SubTitle subTitle="Crear usuario"></SubTitle>
      <Form></Form>
    </>
  );
}

export default CreateUser;

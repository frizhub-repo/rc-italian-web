import React, { useState } from "react";
import { Modal, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

import SignIn from "./signIn";
import SignUp from "./signUp";

export default function AuthModal(props) {
  const [activeTab1, setActivetab1] = useState(true);
  const [activeTab2, setActivetab2] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const check1 = () => {
    setActivetab2(false);
    setActivetab1(true);
  };

  const check2 = () => {
    setActivetab1(false);
    setActivetab2(true);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body>
        <ListGroup horizontal style={{ width: "100%" }}>
          <ListGroup.Item
            active={activeTab1}
            style={{
              width: "100%",
              textAlign: "center",
            }}
            action
            onClick={check1}
          >
            Log In
          </ListGroup.Item>
          <ListGroup.Item
            active={activeTab2}
            action
            onClick={check2}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Sign Up
          </ListGroup.Item>
        </ListGroup>
        <div style={{ marginTop: "20px" }}>
          {activeTab1 && (
            <SignIn
              register={register}
              handleSubmit={handleSubmit}
              onHide={props.onHide}
            />
          )}

          {activeTab2 && (
            <SignUp
              register={register}
              handleSubmit={handleSubmit}
              onHide={props.onHide}
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

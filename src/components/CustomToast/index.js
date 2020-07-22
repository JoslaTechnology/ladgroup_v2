import React, { Fragment } from "react";
import Toast from "react-bootstrap/Toast";

const CustomToast = (title, body) => {
  // const [show, setShow] = useState(false);
  return (
    <Fragment>
      {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide> */}
      <Toast
        show={true}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: 0,
          right: 0
        }}
      >
        <Toast.Header>
          <strong className="text-center">{title}</strong>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </Fragment>
  );
};

export default CustomToast;

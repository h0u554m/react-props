import React from "react";
import Card from "react-bootstrap/Card";
import Name from "./../profile/FullName";
import Address from "./../profile/Address";
import "../../App.css";
class ProfilPhoto extends React.Component {
  render() {
    return (
      <>
        <Card.Img variant="top" src="./Re3poDBhOaY.png" />
        <Card.Body>
          <Name />
          <Address />
        </Card.Body>
      </>
    );
  }
}
export default ProfilPhoto;

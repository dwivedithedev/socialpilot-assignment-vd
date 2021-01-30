import { Jumbotron, Container, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import ReadCSV from "./ReadCSV";
import MultiImage from "./MultiImage";
import LocationSearchInput from "./LocationSearchInput";

export default function App() {
  const toggleScratchFields = () => {
    let a = document.getElementById("scratchFields");
    let b = document.getElementById("uploadFields");
    if (a.style.display === "none") {
      a.style.display = "block";
      b.style.display = "none";
    } else {
      a.style.display = "none";
    }
  };

  const toggleUploadFields = () => {
    let a = document.getElementById("scratchFields");
    let b = document.getElementById("uploadFields");
    if (b.style.display === "none") {
      b.style.display = "block";
      a.style.display = "none";
    } else {
      b.style.display = "none";
    }
    document.getElementById("thirdStepImg").style.display = "block";
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let address = document.getElementById("userAddress").value;
    let beds = document.getElementById("bedrooms").value;
    let baths = document.getElementById("bathrooms").value;
    let desc = document.getElementById("desc").value;

    console.log("User Input:::");
    console.log("Address:- " + address);
    console.log("No. of beds:- " + beds);
    console.log("No. of bathrooms:- " + baths);
    console.log("Description:- " + desc);

    document.getElementById("thirdStepImg").style.display = "block";
  };

  return (
    <div className="App">
      <Container fluid>
        <Jumbotron fluid>
          <Container>
            <h1>Property Form</h1>
            <p>Fill the form.</p>
          </Container>
        </Jumbotron>
        <Row>
          <Col>
            <Button size="lg" onClick={toggleScratchFields} variant="secondary">
              Add from Scratch
            </Button>
          </Col>
          <Col>
            <Button size="lg" onClick={toggleUploadFields} variant="secondary">
              Upload CSV
            </Button>
          </Col>
        </Row>
        <div style={{ display: "none" }} id="scratchFields">
          <br />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                id="userAddress"
                type="address"
                placeholder="Type your address"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Bedroom</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10"
                id="bedrooms"
                placeholder="No. of Bedrooms"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Bathroom</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="5"
                id="bathrooms"
                placeholder="No. of Bathrooms"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Description (optional)</Form.Label>
              <Form.Control id="desc" as="textarea" rows={3} />
            </Form.Group>
            <Button size="lg" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div style={{ display: "none" }} id="uploadFields">
          <Row>
            <Col>
              <br />
              <ReadCSV />
            </Col>
          </Row>
        </div>

        <div className="App" id="thirdStepImg">
          <Row>
            <Col>
              <hr />
              <h3>Upload Image Files</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <MultiImage />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

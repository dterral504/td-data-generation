import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap";

class FieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null,
      type: null,
      isModalOpen: false,
      fields: ["field-0"]
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleDataTypeChange = this.handleDataTypeChange.bind(this);
    this.generateData = this.generateData.bind(this);
  }

  handleQuantityChange(eventData) {
    this.setState({ quantity: eventData.target.value });
  }

  handleDataTypeChange(eventData) {
    this.setState({ type: eventData.target.value });
  }

  appendInput() {
    var newInput = `field-${this.state.fields.length}`;
    this.setState(prevState => ({
      fields: prevState.fields.concat([newInput])
    }));
  }

  generateData(eventData) {}

  render() {
    return (
      <Container>
        <Form>
          <Row form>
            <Col md={2}>
              <Label>Quantity</Label>
            </Col>
            <Col md={2}>
              <Label>Data Type</Label>
            </Col>
            <Col md={2}>
              <Label>More Options</Label>
            </Col>
          </Row>
          {/* ************************************** */}

          {this.state.fields.map(field => (
            <Row form>
              <Col md={2}>
                <FormGroup>
                  <Input
                    type="number"
                    name="quantity"
                    value={this.state.quantity}
                    id={"fieldName0"}
                    placeholder="0"
                    onChange={this.handleQuantityChange}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Input
                    type="select"
                    name="type"
                    value={this.state.type}
                    id="exampleSelect"
                    onChange={this.handleDataTypeChange}
                  >
                    <option>Integer</option>
                    <option>Time-Series</option>
                    <option>Decimal</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Button color="primary" onClick={this.modal_toggle}>
                    Options
                  </Button>
                  <Modal
                    isModalOpen={this.state.modal}
                    toggle={this.modal_toggle}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.modal_toggle}>
                      Options
                    </ModalHeader>
                    <ModalBody>
                      Options based on the selected datatype go here....
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.modal_toggle}>
                        Confirm Options
                      </Button>
                    </ModalFooter>
                  </Modal>
                </FormGroup>
              </Col>
            </Row>
          ))}

          {/* ************************************** */}

          <Button onClick={() => this.appendInput()}>Add Field</Button>
          {/* --------------------------------------------------------------------------------- */}
          <hr className="my-2" />
          {/* --------------------------------------------------------------------------------- */}

          <Row form>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="numRows"
                  id="numRows"
                  placeholder="Number of Rows"
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input type="select" name="fileType" id="fileType">
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>JSON</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Button color="primary" onClick={this.generateData()}>
                  Generate Data
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default FieldForm;

import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "./App.css";
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.modal_toggle = this.modal_toggle.bind(this);
    this.field_dropdown_toggle = this.field_dropdown_toggle.bind(this);
    this.file_dropdown_toggle = this.file_dropdown_toggle.bind(this);
    this.state = {
      inputs: ["input-0"],
      FieldDropdownOpen: false,
      FileDropdownOpen: false,
      modal: false
    };
  }

  // getdata(){
  //   axios.get('http://localhost:5000/api/generate').then(res => {
  //     const posts = res.data;
  //     console.log(posts);
  //   });

  // }

  modal_toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  field_dropdown_toggle() {
    this.setState(prevState => ({
      FieldDropdownOpen: !prevState.FieldDropdownOpen
    }));
  }

  file_dropdown_toggle() {
    this.setState(prevState => ({
      FileDropdownOpen: !prevState.FileDropdownOpen
    }));
  }

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput])
    }));
  }

  generate_data() {
    // TODO
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Data Generation Tool</h1>
          <hr className="my-2" />
          <p>
            Select the quantity and options for the data you would like to
            generate below. You may recieve this data in csv, excel or json
            format.
          </p>
          <p className="lead">
            <Button color="primary">GitHub</Button>
          </p>
        </Jumbotron>

        <Container>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Field Name</Label>
                  <Input type="text" name="name" id={"fieldName0"} />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Field Type</Label>
                  <Dropdown
                    isOpen={this.state.FieldDropdownOpen}
                    toggle={this.field_dropdown_toggle}
                  >
                    <DropdownToggle caret>Select a datatype</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Integer</DropdownItem>
                      <DropdownItem>String</DropdownItem>
                      <DropdownItem>Decimal</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>More Options</Label>
                  <Button color="primary" onClick={this.modal_toggle}>
                    Options
                  </Button>
                  <Modal
                    isOpen={this.state.modal}
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

            {this.state.inputs.map(input => (
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input type="text" name="name" id={"fieldName" + input} />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Dropdown
                      isOpen={this.state.FieldDropdownOpen}
                      toggle={this.field_dropdown_toggle}
                    >
                      <DropdownToggle caret>Select a datatype</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Integer</DropdownItem>
                        <DropdownItem>String</DropdownItem>
                        <DropdownItem>Decimal</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Button color="primary" onClick={this.modal_toggle}>
                      Options
                    </Button>
                    <Modal
                      isOpen={this.state.modal}
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
          </Form>
          <Button onClick={() => this.appendInput()}>Add Field</Button>
          {/* --------------------------------------------------------------------------------- */}
          <hr className="my-2" />
          {/* --------------------------------------------------------------------------------- */}
          <Form>
            <Row form>
              <Col md={2}>
                <FormGroup>
                  <Input
                    type="text"
                    name="numRows"
                    id="numRows"
                    placeholder="Number of Rows"
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Dropdown
                    isOpen={this.state.FileDropdownOpen}
                    toggle={this.file_dropdown_toggle}
                  >
                    <DropdownToggle caret>File Type</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>CSV</DropdownItem>
                      <DropdownItem>Excel</DropdownItem>
                      <DropdownItem>JSON</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Button color="primary" >
                    Generate Data
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;

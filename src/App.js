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
import FieldForm from "./components/FieldForm";
import FieldFormEx from "./components/FieldFormEx";

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

        <FieldFormEx />
      </div>
    );
  }
}

export default App;

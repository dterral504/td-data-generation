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
import { ExportToCsv } from "export-to-csv";

class FieldFormEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      type: "",
      isModalOpen: false,
      fields: ["field-0"],
      numRows: 0
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleDataTypeChange = this.handleDataTypeChange.bind(this);
    this.handleNumRowsChange = this.handleNumRowsChange.bind(this);
    this.generateData = this.generateData.bind(this);
  }

  handleQuantityChange(eventData) {
    this.setState({ quantity: eventData.target.value });
  }

  handleDataTypeChange(eventData) {
    this.setState({ type: eventData.target.value });
  }

  handleNumRowsChange(eventData) {
    this.setState({ numRows: eventData.target.value });
  }

  generateData(eventData) {
    console.log("generate data");
    console.log(this.state.numRows);
    console.log(this.state.quantity);
    if (this.state.numRows > 0 && this.state.quantity > 0) {
      var table = new Array();
      for (var i = 0; i < this.state.numRows; i++) {
        var row = Array.from({ length: this.state.quantity }, () =>
          Math.floor(Math.random() * 100)
        );
        table.push(row);
      }
      console.log(table);

      const options = {
        fieldSeparator: ",",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: false,
        showTitle: true,
        title: "Generated Data",
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: false
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
      };

      const csvExporter = new ExportToCsv(options);
      csvExporter.generateCsv(table);
    }
  }

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
                  <ModalHeader toggle={this.modal_toggle}>Options</ModalHeader>
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

          {/* --------------------------------------------------------------------------------- */}
          <hr className="my-2" />
          {/* --------------------------------------------------------------------------------- */}

          <Row form>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="numRows"
                  onChange={this.handleNumRowsChange}
                  value={this.state.numRows}
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
                <Button color="primary" onClick={this.generateData}>
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

export default FieldFormEx;

import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class InfoStep extends Component {
  constructor(props) {
    super(props);
    this.checkInput = this.checkInput.bind(this);
    this.setValue = this.setValue.bind(this);
    this.state = this.props.inputObject.info;
    this.state.validName = false;
    this.state.submitPressed = false;
  }

  checkInput() {
    var state = this.state;
    state.submitPressed = true;
    state.validName = false;
    this.setState(state);
    //this.props.next(this.props.state)
  }

  setValue(field) {}

  validField(field) {
    if (this.state) {
    }
  }

  render() {
    let info = this.state;
    return (
      <div>
        <h3 className="text-center">Indtast dine basis oplysninger</h3>
        <Form>
          <FormGroup row>
            <Label for="nameInput" sm={2}>
              Dit navn:
            </Label>
            <Col sm={10}>
              <Input
                valid
                type="text"
                id="nameInput"
                onChange={this.setValue}
                value={info.name === undefined ? undefined : info.name}
                placeholder={
                  info.name === undefined ? "Kaptajn Hack" : undefined
                }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="emailInput" sm={2}>
              Din Email:
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="emailInput"
                value={info.mail === undefined ? undefined : info.mail}
                placeholder={
                  info.mail === undefined
                    ? "Kaptjan@CodingPirates.dk"
                    : undefined
                }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="passwordInput" sm={2}>
              Kodeord:
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="passwordInput"
                value={info.password === undefined ? undefined : info.password}
                placeholder={
                  info.password === undefined
                    ? "Dit ønskede kodeord"
                    : undefined
                }
              />
            </Col>
          </FormGroup>
          <hr />
          <FormGroup row>
            <Label for="street" sm={2}>
              Gade & husnummer:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="street"
                id="street"
                value={info.street === undefined ? undefined : info.street}
                placeholder={
                  info.street === undefined ? "Vestergade 7b" : undefined
                }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city" sm={2}>
              By
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="city"
                id="city"
                value={info.city === undefined ? undefined : info.city}
                placeholder={info.city === undefined ? "Odense" : undefined}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="zip" sm={2}>
              Postnummer:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="zip"
                id="zip"
                value={info.zip === undefined ? undefined : info.zip}
                placeholder={info.zip === undefined ? "6760" : undefined}
              />
            </Col>
          </FormGroup>
        </Form>
        <div className="text-right">
          <Button color="success" onClick={this.checkInput}>
            Næste
          </Button>
        </div>
      </div>
    );
  }
}

export default InfoStep;

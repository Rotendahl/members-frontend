import React, { Component } from 'react';
import {Spinner, CardHeader, CardFooter, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Select from 'react-select'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {Form, FormGroup, Label, Input} from 'reactstrap'

class InfoStep extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h3 className="text-center">
        Indtast dine basis oplysninger:
      </h3>
      <Form>
        <FormGroup row>
          <Label for="emailInput" sm={2}>Din Email:</Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="emailInput"
              placeholder="Kaptjan@CodingPirates.dk"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="passwordInput" sm={2}>Kodeord:</Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Dit ønskede kodeord"
            />
          </Col>
        </FormGroup>
        <hr/>
        <FormGroup row>
          <Label for="street" sm={2}>Gade & husnummer:</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="street"
              id="street"
              placeholder="Vestergade 7b"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2}>By</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="Odense"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="zip" sm={2}>Postnummer:</Label>
          <Col sm={10}>
            <Input
              type="number"
              name="city"
              id="zip"
              placeholder="6760"
            />
          </Col>
        </FormGroup>
      </Form>
      <div className="text-right">
        <Button color="success" onClick={this.props.next}>Næste</Button>
      </div>
    </div>);
  }
}

export default InfoStep;

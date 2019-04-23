import React, { Component } from 'react';
import {Spinner, CardHeader, CardFooter, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Select from 'react-select'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {Form, FormGroup, Label, Input} from 'reactstrap'

class KidsStep extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false};
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (<div>
      <h3 className="text-center">
        Har du nogle børn?
      </h3>
        <Button outline size="lg" block color="primary" onClick={this.toggle}>
        Ja
        </Button>
      <Collapse isOpen={this.state.collapse}>
      <Card style={{marginTop: "30px"}}>
        <CardHeader>Ikke lavet endnu</CardHeader>
        <CardBody>
            -
        </CardBody>
        <CardFooter>-</CardFooter>
      </Card>
  </Collapse>
  <Button size="lg" block color="success" onClick={this.props.next}>
    Færdig
  </Button>
    </div>);
  }
}

export default KidsStep;

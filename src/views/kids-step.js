import React, { Component } from 'react';
import {CardHeader, CardFooter, Collapse, Button, CardBody, Card } from 'reactstrap';

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
        Har du nogen børn?
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

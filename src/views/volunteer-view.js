import React, { Component } from 'react';
import {CardHeader, CardFooter, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Select from 'react-select'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const DEPARTMENT_QUERY = gql`
  {
    unions {
    name
    }
  }
`

class VolunteerView extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    var options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]



    return (<Query query={DEPARTMENT_QUERY}>
      {({ loading, error, data }) =>
          <div>
            <h3 className="text-center">
              Er du frivillig i en afdeling?
            </h3>
            <Row>
            <Col>
              <Button outline size="lg" block color="primary" onClick={this.toggle}>
              Ja
            </Button>
          </Col>
          <Col>
            <Button outline size="lg" block color="warning">
              Nej
            </Button>
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
            <Card style={{marginTop: "30px"}}>
              <CardHeader>Vælg afdeling</CardHeader>
              <CardBody>
                <Select options={options} isMulti placeholder="Afdelinger"/>
              </CardBody>
              <CardFooter>Det er tilladt at vælge mere end en</CardFooter>
            </Card>
        </Collapse>
        load: {loading}
        err: {error}
        data: {console.log(data)}
      </div>
      }
      </Query>
    );
  }
}

export default VolunteerView;

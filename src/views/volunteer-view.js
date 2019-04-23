import React, { Component } from 'react';
import {Spinner, CardHeader, CardFooter, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Select from 'react-select'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const DEPARTMENT_QUERY = gql`
  {
    unions {
      name
      id
      departmentSet {
        id
        name
      }
    }
  }
`

class VolunteerView extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false};
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    var selecter = () => {
      return (<Query query={DEPARTMENT_QUERY}>
          {({ loading, error, data }) => {
            if (loading){ return (<div className="text-center">
              <Spinner style={{ width: '3rem', height: '3rem' }} />
            </div>)}
            else {
              var unions = data.unions.map(union =>
                ({value: union.id, label: union.name})
              )
              return (
                <Select options={unions} isMulti placeholder="Forening"/>
              )
            }
          }}
      </Query>)
    }

    return (
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
            <Button outline size="lg" block color="warning" onClick={this.props.next}>
              Nej
            </Button>
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
            <Card style={{marginTop: "30px"}}>
              <CardHeader>Vælg Forening</CardHeader>
              <CardBody>
                  {selecter()}
              </CardBody>
              <CardFooter>Det er tilladt at vælge mere end en</CardFooter>
              <Button color="success" onClick={this.props.next}>Næste</Button>
            </Card>
        </Collapse>
      </div>
    );
  }
}

export default VolunteerView;

import React from "react";
import { Container } from "reactstrap";
import VolunteerView from "./views/volunteer-view";
import KidsStep from "./views/kids-step";
import InfoStep from "./views/info-step";
import Progressbar from "./components/progressbar";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.state = {
      percent: 0,
      info: {
        name: { value: null, valid: null },
        mail: undefined,
        password: undefined,
        street: undefined,
        city: undefined,
        zip: undefined
      }
    };
  }

  next(state) {
    state.percent += 50;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Brugeroprettelse Coding Pirates</h3>
        <h4 className="text-center">Til frivillige og forældre</h4>
        <Progressbar percent={this.state.percent} />
        <Container className="shadow-lg p-3 mb-5 bg-white rounded">
          {this.state.percent === 0 && (
            <InfoStep next={this.next} inputObject={this.state} />
          )}
          {this.state.percent === 50 && <VolunteerView next={this.next} />}
          {this.state.percent === 100 && <KidsStep />}
        </Container>
      </div>
    );
  }
}

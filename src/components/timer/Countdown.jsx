import { Component } from "react";
import PropTypes from "prop-types";
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {


    if (this.state.now < this.props.toDate) {
      this.intervalId = setInterval(() => {
        if (this.state.now > this.props.toDate) {
          clearInterval(this.intervalId);
        }
        else {
          this.setState({ now: new Date() });
        }
      }, this.props.intervalDelay);
    }

  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { now } = this.state;
    const { toDate } = this.props;
    const delta = toDate - now;
    if (delta > 0) {
      return this.props.children({
        years: Math.floor(delta / 1000 / 60 / 60 / 24 / 30 / 12),
        months: Math.floor((delta / 1000 / 60 / 60 / 24 / 30) % 12),
        days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30),
        hours: Math.floor((delta / 1000 / 60 / 60) % 24),
        minutes: Math.floor((delta / 1000 / 60) % 60),
        seconds: Math.floor((delta / 1000) % 60),
        milliseconds: delta,
        asDays: Math.floor(delta / 1000 / 60 / 60 / 24)
      });
    }
    else {
      return this.props.children({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        asDays: 0
      });
    }



  }
}

Countdown.propTypes = {
  toDate: PropTypes.instanceOf(Date).isRequired,
  intervalDelay: PropTypes.number
};

Countdown.defaultProps = {
  intervalDelay: 1000
};

export default Countdown;

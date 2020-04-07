import React, { Component } from 'react';
import './styles/App.css';
import moment from 'moment';
import 'moment/locale/th';


moment.locale("th");
const timeObject = moment("220000", "hmmss").toObject();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hours: timeObject.hours - moment().hour() - 1,
      minutes: 60 - moment().minutes(),
      seconds: 60 - moment().seconds(),
    }
    this.timer = this.timer.bind(this);

  }
  timer() {
    this.setState({
      seconds: this.state.seconds - 1
    })
    if (this.state.seconds < 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59
      })
    }
    if (this.state.minutes < 0) {
      this.setState({
        hours: this.state.hours - 1,
        minutes: 59,
        seconds: 59
      })
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.timer()
    }, 1000);
  }

  render() {
    const { hours, minutes, seconds } = this.state


    return (
      <div className="App">
        <div className="container">
          <h1 className="heading">เมื่อไหร่จะถึงเวลาเคอร์ฟิว ?</h1>
          <div className="countdownCurfew">
            
            <div className="timer timer_highlight">
              <div className="hours">{hours}</div>
              <div className="label">ชั่วโมง</div>
            </div>
            <div className="timer">
              <div className="minutes">{minutes}</div>
              <div className="label">นาที</div>
            </div>
            <div className="timer">
              <div className="seconds">{seconds}</div>
              <div className="label">วินาที</div>
            </div>
          </div>
        </div>
        {/* <img src={logo} className="imgStayhome" alt="stay home icon" /> */}
      </div>
    )
  }

}

export default App;

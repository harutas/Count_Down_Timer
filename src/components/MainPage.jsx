import React from "react";
import TimerInput from "./TimerInput";
import TimerView from "./TimerView";
import TimerButton from "./TimerButton";
import { Stack } from "@mui/material";

function currTime(hour, minute, second) {
  let intHour = hour === "" ? 0 : parseInt(hour);
  let intMinute = minute === "" ? 0 : parseInt(minute);
  let intSecond = second === "" ? 0 : parseInt(second);

  return Math.floor(intHour * 3600) + Math.floor(intMinute * 60) + parseInt(intSecond);
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        timer : 0,
        hour : 0,
        minute : 0,
        second : 0,
        inputDisabled : false,
        buttonDisabled : {
          start : false,
          stop : true,
          restart : true
        }
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = Object.assign({}, this.state, {[name] : target.value});
    this.setState(value);
    this.setState((state) => { return {timer : currTime(state.hour, state.minute, state.second)}})
   
  }

  renderInputArea() {
    return (
      <>
        <Stack direction={"row"} justifyContent="center">
          <TimerInput value={this.state.hour} disabled={this.state.inputDisabled} name={"hour"} placeholder={"時"} inputProps={{ min: "0", max: "23" }} onChange={(e) => this.handleChange(e)} />
          <TimerInput value={this.state.minute} disabled={this.state.inputDisabled} name={"minute"} placeholder={"分"} inputProps={{ min: "0", max: "59" }} onChange={(e) => this.handleChange(e)} />
          <TimerInput value={this.state.second} disabled={this.state.inputDisabled} name={"second"} placeholder={"秒"} inputProps={{ min: "0", max: "59" }} onChange={(e) => this.handleChange(e)} />
          <TimerButton
            name={"start"}
            disabled={this.state.timer === 0 ? true : this.state.buttonDisabled.start}
            onClick={() => {
              this.setState({
                inputDisabled : true,
                buttonDisabled : {
                  start : true,
                  stop : false,
                  restart : true
                }
              });
              this.timerId = setInterval(() => {
                const currTime = Object.assign({}, this.state);
                this.setState({timer : currTime.timer - 1 });
                if (this.state.timer === 0) {
                  alert("Time Up!");
                  clearInterval(this.timerId);
                  this.setState({
                    timer : 0,
                    hour : 0,
                    minute : 0,
                    second : 0,
                    inputDisabled : false,
                    buttonDisabled : {
                      start : false,
                      stop : true,
                      restart : true
                    }
                })
                }
              }, 1000);}
            } />
        </Stack>
      </>
    )
  }

  renderTimerView() {
    return (
      <TimerView time={this.state.timer} />
    )
  }

  renderOptionButtons() {
    return (
      <>
        <Stack direction={"row"} justifyContent="center">
          <TimerButton
            name={"Stop"}
            disabled={this.state.buttonDisabled.stop}
            onClick={() => {
              this.setState({
                buttonDisabled : {
                  start : true,
                  stop : true,
                  restart : false
                }
              })
              clearInterval(this.timerId);
            }}
            />
          <TimerButton
            name={"Restart"}
            disabled={this.state.buttonDisabled.restart}
            onClick={() => {
              this.setState({
                buttonDisabled : {
                  start : true,
                  stop : false,
                  restart : true
                }
              })
              this.timerId = setInterval(() => {
                const currTime = Object.assign({}, this.state);
                this.setState({timer : currTime.timer - 1 });
                if (this.state.timer === 0) {
                alert("Time Up!");
                clearInterval(this.timerId);
                this.setState({
                  timer : 0,
                  hour : 0,
                  minute : 0,
                  second : 0,
                  inputDisabled : false,
                  buttonDisabled : {
                    start : false,
                    stop : true,
                    restart : true
                  }
                })
              }
              }, 1000)}
            } />
          <TimerButton
            name={"Reset"}
            onClick={() => {

              clearInterval(this.timerId)
              this.setState({
                timer: 0,
                hour: 0,
                minute: 0,
                second: 0,
                inputDisabled: false,
                buttonDisabled : {
                  start : false,
                  stop : true,
                  restart : true
                }
              });
            }} />
        </Stack>
      </>
    )
  }

  render(){
    // if (this.state.timer <= 0) alert("Time up");
    return (
      <>
        {this.renderInputArea()}
        {this.renderTimerView()}
        {this.renderOptionButtons()}
      </>
    )
  }
}

export default MainPage
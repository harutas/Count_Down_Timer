import { Typography } from "@mui/material"
import { Timer } from "../model"

const TimerView = (props) => {
  return (
    <Typography sx={{ typography: {xs :"h2", md: "h1"}}} component="div">
      {Timer.timerString(props.time)}
    </Typography>
  )
}

export default TimerView
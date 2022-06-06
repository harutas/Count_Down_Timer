import Button from '@mui/material/Button';

const TimerButton = (props) => {
  return (
    <Button
      sx={{ m: 1, width: '15ch' }}
      disabled={props.disabled}
      variant="contained"
      color='secondary'
      onClick={props.onClick}>
        {props.name}
    </Button>
  )
}

export default TimerButton
import Button from '@mui/material/Button';

const TimerButton = (props) => {
    return (
        <Button sx={{ m: 1, width: '15ch' }} variant="contained" color='secondary'>{props.name}</Button>
    )
}

export default TimerButton
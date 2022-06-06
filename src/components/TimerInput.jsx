import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


// props time, 
const TimerInput = (props) => {
  
  return (
    <Box >
      <FormControl sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          inputProps={props.inputProps}
          id="filled-adornment-weight"
          type='number'
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
          endAdornment={<InputAdornment position="end">{props.placeholder}</InputAdornment>}
          size="small"
        />
      </FormControl>
    </Box>
  )
}

export default TimerInput
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
          id="filled-adornment-weight"
          value=""
          // onChange={handleChange('weight')}
          endAdornment={<InputAdornment position="end">{props.date}</InputAdornment>}
          size="small"
        />
      </FormControl>
    </Box>
  )
}

export default TimerInput
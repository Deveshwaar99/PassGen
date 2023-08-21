import PropTypes from "prop-types"
import Slider from "@mui/material/Slider"

function RangeInput({ passLength, setPassLength }) {
  function handleChange(e) {
    setPassLength(e.target.value)
  }
  return (
    <>
      <div className=" w-full my-5">
        <label className=" text-base my-4">
          Password length : {passLength}
        </label>
        <div className=" w-full">
          <Slider
            min={4}
            max={12}
            aria-label="Temperature"
            value={passLength}
            color="primary"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}
RangeInput.propTypes = {
  passLength: PropTypes.number.isRequired,
  setPassLength: PropTypes.func.isRequired,
}
export default RangeInput

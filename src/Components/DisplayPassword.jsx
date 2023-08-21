import CopyPassword from "./CopyPassword"
import PropTypes from "prop-types"

const DisplayPassword = ({ password }) => {
  let strength = <></>
  if (password.length < 6) {
    strength = (
      <div className=" mx-4 text-base font-semibold text-red-700">WEAK</div>
    )
  } else if (password.length < 9) {
    strength = (
      <div className="mx-4 text-base font-semibold text-yellow-500">
        AVERAGE
      </div>
    )
  } else {
    strength = (
      <div className="mx-4 text-base font-semibold text-emerald-400">
        STRONG
      </div>
    )
  }
  return (
    <>
      <div className=" flex justify-between w-full my-7 h-12 m-2">
        <input
          className=" w-9/12 bg-slate-50 border-solid border-2 border-teal-600 px-4 rounded-lg font-bold"
          value={password}
        />
        <div className=" p-2 border-solid border-2 border-teal-600 font-bold rounded-lg">
          <CopyPassword password={password} />
        </div>
      </div>
      {strength}
    </>
  )
}
DisplayPassword.propTypes = {
  password: PropTypes.string.isRequired, // String and is required
}
export default DisplayPassword

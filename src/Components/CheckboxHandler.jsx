import PropTypes from "prop-types"

function CheckboxHandler({ conditions, setConditions }) {
  function handleCheckboxChange(i) {
    let updatedStatus = [...conditions]
    updatedStatus[i].status = !updatedStatus[i].status
    setConditions(updatedStatus)
  }
  return (
    <>
      <p className=" text-base font-semibold">Characters Used</p>

      {conditions.map((item, i) => {
        return (
          <div className=" m-2" key={i}>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => handleCheckboxChange(i)}
            />
            <label className=" mx-2 text-base">{item.message}</label>
          </div>
        )
      })}
    </>
  )
}
CheckboxHandler.propTypes = {
  conditions: PropTypes.object.isRequired, // String and is required
  setConditions: PropTypes.func.isRequired,
}
export default CheckboxHandler

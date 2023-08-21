//import "../styles.css"
import Header from "./Header"
import { useState } from "react"
import CheckboxHandler from "./CheckboxHandler"
import DisplayPassword from "./DisplayPassword"
import { usePasswordGenerator } from "../hooks/usePasswordGenerator"
import RangeInput from "./RangeInput"
function PasswordGenerator() {
  const [conditions, setConditions] = useState([
    { message: "ABC", status: false },
    { message: "abc", status: false },
    { message: "123", status: false },
    { message: "#$&", status: false },
  ])

  const [passLength, setPassLength] = useState(4)

  const { password, errorMessage, passwordGenerator } = usePasswordGenerator()

  function handleGenerate() {
    passwordGenerator(conditions, passLength)
  }

  return (
    <div className="flex justify-center items-cente bg-teal-600">
      <div className=" bg-white rounded-xl flex flex-col justify-center items-center w-3/6 h-full my-4 p-16">
        <Header />
        <div className=" w-full">
          {password && <DisplayPassword password={password} />}
          <RangeInput passLength={passLength} setPassLength={setPassLength} />
          <CheckboxHandler
            conditions={conditions}
            setConditions={setConditions}
          />
          <div className=" text-red-700 text">{errorMessage}</div>
        </div>
        <button
          className=" m-4border-solid border-2 border-teal-600 w-28 h-12 rounded-lg"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator

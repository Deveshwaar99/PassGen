import { useState } from "react"

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    small = "abcdefghijklmnopqrstuvwxyz",
    numbers = "0123456789",
    symbols = "!@#$%^&*()-_=+/><.{}[]"

  function passwordGenerator(conditions, length) {
    let charSet = ""
    let generatedPassword = ""
    const selectedConditions = conditions.filter((item) => item.status === true)
    //return if none of the conditions are selected
    if (selectedConditions.length === 0) {
      setErrorMessage("Please select alteast one condition")
      return
    }
    setErrorMessage("")
    // to add a single character for each condition
    function addCharacter(characters) {
      const generatedIndex = Math.floor(Math.random() * characters.length)
      generatedPassword += characters[generatedIndex]
    }
    //evaluate for each condition
    selectedConditions.forEach((item) => {
      switch (item.message) {
        case "ABC":
          charSet += capital
          addCharacter(capital)
          length--
          break
        case "abc":
          charSet += small
          addCharacter(small)
          length--
          break
        case "123":
          charSet += numbers
          addCharacter(numbers)
          length--
          break
        case "#$&":
          charSet += symbols
          addCharacter(symbols)
          length--
          break
        default:
          charSet += ""
      }
    })
    //add character for the remaning length
    for (let i = 0; i < length; i++) {
      const generatedIndex = Math.floor(Math.random() * charSet.length)
      generatedPassword += charSet[generatedIndex]
    }
    //shuffling the generated password
    const shuffledPassword = generatedPassword
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("")
    //assigning the final password
    setPassword(() => shuffledPassword)
  }
  return { password, errorMessage, passwordGenerator }
}

export default { usePasswordGenerator }

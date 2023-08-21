import { CopyOutlined } from "@ant-design/icons"

import PropTypes from "prop-types"
const CopyPassword = ({ password }) => {
  function handleCopy() {
    navigator.clipboard.writeText(password)
  }
  return (
    <>
      <CopyOutlined className=" h-full mx-2" />
      <button onClick={() => handleCopy()}>COPY</button>
    </>
  )
}
CopyPassword.propTypes = {
  password: PropTypes.string.isRequired,
}
export default CopyPassword

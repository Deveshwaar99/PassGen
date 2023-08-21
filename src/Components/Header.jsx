function Header() {
  return (
    <div className=" flex flex-col w-full justify-center items-center">
      <img
        className=" w-20 m-2"
        src="https://reactjs-password-generator.vercel.app/static/media/password.41b50a01b4d0a0f2c9ba.gif"
        alt="Logo"
      />
      <h1 className=" my-2 text-3xl font-extrabold tracking-wider">PASSGEN</h1>
      <p className=" text-lg">
        Instantly generate a secure, random password with the PassGen online
        tool
      </p>
    </div>
  )
}
export default Header

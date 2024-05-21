export default function LoginComponent() {
    return (
        <>
         <div className="login-box">
        <form onSubmit={handleForm}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              onChange={handleChangeInput}
            />
            <label htmlFor="username">username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChangeInput}
            />
            <label htmlFor="password">password</label>
          </div>
          <button type="submit" className="login-button">
            <span />
            <span />
            <span />
            <span />
            Login
          </button>
        </form>
      </div>
        </>
    )
}
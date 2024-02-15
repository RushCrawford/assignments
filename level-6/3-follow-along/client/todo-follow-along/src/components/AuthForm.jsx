import React from 'react'

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    }
  } = props

  const style = {
    color: 'red',
    margin: 5
  }

  return (
    <form className='box is-aligned is-taller ' onSubmit={handleSubmit}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            name="username"
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success">
            {btnText}
          </button>
        </p>
        <p className='auth-err-msg'>{errMsg}</p>
      </div>
    </form>
  )
}
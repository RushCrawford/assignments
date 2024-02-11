import React from 'react'

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: {
      username,
      password
    }
  } = props

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

      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success">
            {btnText}
          </button>
        </p>
      </div>
    </form>
  )
}
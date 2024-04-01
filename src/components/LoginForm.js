import React from 'react'

const LoginForm = () => {
  return (
    <form id='LoginForm'>
        <label>Username</label>
        <input id='username' name='username' placeholder='Enter Your Username'></input>
        <label>Password</label>
        <input id='password' name='password' placeholder='Enter Your Password'></input>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm

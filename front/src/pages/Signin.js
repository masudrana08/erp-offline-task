import React, { useRef } from 'react'

export default function Signin() {
  const phoneRef = useRef()
  const passwordRef = useRef()
 
  const handleSignin = (e) => {
    e.preventDefault()
    const userData = {
      phone : phoneRef.current.value,
      password : passwordRef.current.value,
    }
    fetch('http://localhost:9999/auth/signin', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res=>res.json())
    .then(res=>{
      sessionStorage.setItem('token', res.data)
      console.log(res);
    })
  }
  return (
    <div>
      <div>
        Signin
      </div>
      <div>
          <input ref={phoneRef} type="text" name="phone" placeholder='phone' />
          <input ref={passwordRef} type="text" name="password" placeholder='password' />
          <button onClick={handleSignin}>Submit</button>
      </div>
    </div>
  )
}

import React, { useEffect, useRef } from 'react'

export default function Signup() {
  const nameRef = useRef()
  const phoneRef = useRef()
  const passwordRef = useRef()
 
  const handleSignup = (e) => {
    e.preventDefault()
    const userData = {
      name : nameRef.current.value,
      phone : phoneRef.current.value,
      password : passwordRef.current.value,
    }
    fetch('http://localhost:9999/auth/signup', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res, 'signup');
    })
  }
  return (
    <div>
      <div>
        Signup
      </div>
      <div>
          <input ref={nameRef} type="text" name="name" placeholder='name' />
          <input ref={phoneRef} type="text" name="phone" placeholder='phone' />
          <input ref={passwordRef} type="text" name="password" placeholder='password' />
          <button onClick={handleSignup}>Submit</button>
      </div>
    </div>
  )
}

import React, { useRef } from 'react'
import storeToDb from '../db'

export default function CreateProduct() {
  const nameRef = useRef()
  const mrpRef = useRef()
  const unitRef = useRef()
  const stockRef = useRef()

  const handleProduct = (e) => {
    e.preventDefault()
    const productData = {
      name : nameRef.current.value,
      mrp: mrpRef.current.value,
      unit: unitRef.current.value,
      stock: stockRef.current.value
    }
    console.log(productData, 'pdata');
    const token = sessionStorage.getItem('token')
    fetch('http://localhost:9999/products/create', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json',
        'token' : token
      },
      body: JSON.stringify(productData)
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res, 'product create');
    })
    .catch(err=>{
      storeToDb({
        url:'http://localhost:9999/products/create',
        method:'POST',
        headers: {
          'Content-Type' : 'application/json',
          'token' : token
        },
        body: JSON.stringify(productData)
      })
    })
  }
  return (
    <div>
      <div>
          <input ref={nameRef} type="text"  placeholder='Name' />
          <input ref={mrpRef} type="text"  placeholder='MRP' />
          <input ref={unitRef} type="text"  placeholder='Unit' />
          <input ref={stockRef} type="text"  placeholder='Stock' />
          <button onClick={handleProduct}>Submit</button>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function ShowSells() {
  const [sells, setSells] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9999/sells/show')
    .then(res=>res.json())
    .then(res=>{
      setSells(res.data)
      localStorage.setItem('sells',JSON.stringify(res))
    })
    .catch(err=>{
      const localSells = localStorage.getItem('sells')
      setSells(JSON.parse(localSells).data)
    })
  },[])

  return (
    <div>
      Show Sells
      <div>
      <table>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Sold To</th>
            <th>Price</th>
            <th>Ordered Amount</th>
            <th>Cost</th>
          </tr>
          {sells.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.buyer}</td>
                <td>{item.productPrice}</td>
                <td>{item.totalItem}</td>
                <td>{item.productPrice * item.totalItem}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  )
}

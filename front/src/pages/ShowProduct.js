import React, { useEffect, useRef, useState } from "react";
import storeToDb from "../db";

export default function ShowProduct() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [filteredCustomer, setFilteredCustomer] = useState([]);
  const [carts, setCarts] = useState({});
  const [result, setResult] = useState('');

  const searchRef = useRef()

  useEffect(()=>{
    fetch('http://localhost:9999/customers/')
    .then(res=>res.json())
    .then(res=>{
      setCustomers(res.data)
    })
  },[])

  useEffect(() => {
    fetch("http://localhost:9999/products/show")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('products', JSON.stringify(res))
        setProducts(res.data);
      })
      .catch(err=>{
          const localProducts = localStorage.getItem('products')
          setProducts(JSON.parse(localProducts).data)
      })
  }, [result]);
 
  const handleCart = (id) =>{
   if(!carts[id]){
    setCarts({...carts, [id] : 1})
   }else{
    setCarts({...carts, [id] : carts[id]+1})
   }
  }

  const handlePurchaseProduct = () =>{
    let selectedProducts = []
    for(let item in carts){
      selectedProducts.push({
        productId: item,
        totalItem: carts[item],
        buyer: searchRef.current.value
      })
    }
    const token = sessionStorage.getItem('token')
    fetch('http://localhost:9999/sells/create', {
      method:"POST",
      headers: {
        'Content-Type':'application/json',
        'token' : token
      },
      body: JSON.stringify({products: selectedProducts})
    })
    .then(res=>res.json())
    .then(result=>{
      setResult(result)
      setCarts({})
    })
    .catch(err=>{
      storeToDb({
        url:'http://localhost:9999/sells/create',
        method:'POST',
        headers: {
          'Content-Type' : 'application/json',
          'token' : token
        },
        body: JSON.stringify({products: selectedProducts})
      })
    })
  }
  const handleCustomerSearch = (e)=>{
    e.preventDefault()
    const filtered = customers.filter(c=>{
      return c.name.includes(e.target.value)
    })
    setFilteredCustomer(filtered)
  }

  return (
    <div>
      <div>Products</div>
      <div>
        <div>
        <b> Carts: {Object.keys(carts).length}</b>
        </div>
        <input ref={searchRef} type="text" placeholder="sold to" onChange={handleCustomerSearch}/>
          <button onClick={handlePurchaseProduct} style={{marginLeft:'10px'}}>Sell</button>
        <div>
        {
          filteredCustomer.map(item=>{
            return <div onClick={()=>searchRef.current.value=item.name}>{item.name}</div>
          })
        }
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Unit</th>
            <th>Seller</th>
            <th>Add Cart</th>
          </tr>
          {products.map((prod, id) => {
            return (
              <tr key={id}>
                <td>{prod._id}</td>
                <td>{prod.name}</td>
                <td>{prod.stock}</td>
                <td>{prod.unit}</td>
                <td>{prod.owner.name}</td>
                <td>
                  <button
                    onClick={()=>handleCart(prod._id)}
                  >
                    Add Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

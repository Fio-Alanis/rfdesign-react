import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMocj"
import  ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting, setShow, show}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
   
  //  const productosTransformados = products.map(product => (
 //    <li> key={product.id}{product.name}</li>
 //   ))

 if(loading) {
    return <h1>Loading Products...</h1>
 }
    
    return (
    <>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </>
       
    )
}

export default ItemListContainer
import { useState, useEffect } from 'react'
import { getProductsById } from "../../asyncMocj"
import  ItemList from '../ItemList/ItemList'

const ItemDetailContainer = ({ greeting, setShow, show}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsById().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
   

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

export default ItemDetailContainer
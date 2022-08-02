const Item = ({ products }) => {
    return (
        <>
        <li key={products.id}>{products.name}</li>
        <button onClick={() => console.log(products.description)}>Ver detalles</button>
        </>
    )
}

export default Item
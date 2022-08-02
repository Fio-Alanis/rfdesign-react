const ItemDetail = ({ products }) => {
    return (
        <>
        <li key={products.id}>{products.description}</li>
        </>
    )
}

export default ItemDetail

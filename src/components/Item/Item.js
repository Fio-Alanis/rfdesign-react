const Item = ({ products }) => {
    return (
        <li key={products.id}>{products.name}</li>
    )
}

export default Item
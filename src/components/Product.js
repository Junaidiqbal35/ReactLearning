function Product() {
    const products = ["Laptop", "Phone", "Modem"]
    const productList = products.map((product) => <h3>{product}</h3>)
    return <div>

            {productList}
        {/* {products.map((product) =>(
            <h3> {product }</h3>
        ) )} */}
    </div>
}

export default Product;
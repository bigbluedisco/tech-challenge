import * as React from 'react'

const Cart = (props) => {
    return (
        <div className="card w-50 m-4 pb-4">
            <h1 className="card-header">Shopping Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.filter(product => props.inCartProducts[product.id] > 0).map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{props.inCartProducts[product.id]}</td>
                            <td>{product.price}$</td>
							<td>
								<button
									onClick={() =>
										props.onRemoveFromCart(product.id)
									}
									className="btn btn-primary"
								>
									Remove
								</button>
							</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span className="mx-auto">Total: {props.products.reduce((su, prod) => su = su + props.inCartProducts[prod.id] * prod.price, 0)}$</span>
        </div>
    )
}

export { Cart }

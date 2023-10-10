import React from "react"
import { Card, Table } from "react-bootstrap"

const Cart = (props: {
  products: Array<{ id: string; name: string; price: number }>
  inCartProducts: Record<string, number>
}) => (
  <Card>
    <Card.Header>Shopping Cart</Card.Header>
    <Table>
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{props.inCartProducts[product.id]}</td>
            <td>{product.price}$</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <span
      style={{
        margin: "0 auto",
      }}
    >
      Total: {}$
    </span>
  </Card>
)

export { Cart }

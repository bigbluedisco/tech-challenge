import React from "react"
import { Button, Card, Stack } from "react-bootstrap"

const Shop = (props: {
  products: Array<{
    id: string
    name: string
    price: number
    image_url: string
  }>
  onAddToCart: (id: string) => void
}) => {
  return (
    <Card>
      <Card.Header>Shop</Card.Header>
      <Stack
        direction="horizontal"
        style={{
          flexWrap: "wrap",
        }}
      >
        {props.products.map((product) => (
          <div key={product.id}>
            <Card>
              <div
                style={{
                  paddingTop: "125%",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image_url}
                  alt={product.name}
                  height="100px"
                  width="100px"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                />
              </div>
              <Card.Body style={{ padding: "20px" }}>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "1rem",
                  }}
                >
                  <span>{product.name}</span>
                  <span>{product.price}$</span>
                </Card.Title>
                <div className="d-flex flex-column align-items-end mt-2">
                  <Button
                    variant="primary"
                    onClick={() => {
                      props.onAddToCart(product.id)
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Stack>
    </Card>
  )
}

export { Shop }

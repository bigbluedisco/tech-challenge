import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Cart } from './components/Cart/Cart'
import { Shop } from './components/Shop/Shop'

const App = () => {
    const [products, setProducts] = React.useState([])
    const [availableProducts, setAvailableProducts] = React.useState([])
    const [inCartProducts, setInCartProducts] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((response) => response.json())
            .then((products) => {
                setProducts(products.products)
            })
    }, [])

    React.useEffect(() => {
        const initialAvailableProducts = products.reduce((acc, curr) => {
            return { ...acc, [curr.id]: curr.stock }
        }, {})
        const initialInCartProducts = products.reduce((acc, curr) => {
            return { ...acc, [curr.id]: 0 }
        }, {})

        setAvailableProducts(initialAvailableProducts)
        setInCartProducts(initialInCartProducts)
    }, [products])

    const onAddToCart = (productId) => {
        const availableBeforeAdd = availableProducts[productId]
        setAvailableProducts({
            ...availableProducts,
            [productId]: availableBeforeAdd - 1,
        })
        const inCartBeforeAdd = inCartProducts[productId]
        setInCartProducts({
            ...inCartProducts,
            [productId]: inCartBeforeAdd + 1,
        })
    }

    return (
        <div className="d-flex justify-content-between">
            <Shop products={products} onAddToCart={onAddToCart} />
            <Cart products={products} inCartProducts={inCartProducts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

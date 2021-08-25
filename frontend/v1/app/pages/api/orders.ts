
import type { NextApiRequest, NextApiResponse } from 'next'

type Order = {
  firstName: string,
  lastName: string,
  destination: {
    address: string,
    city: string,
    zipcode: string,
  }
  lines: Array<{
    product: string,
    quantity: number,
  }>
}

let orders : Array<Order> = [];

const handler = (req: NextApiRequest, res: NextApiResponse<Order|string>) => {
  if (req.method === 'POST') {
    const data = req.body as Order
    if (data.firstName === ("" || null || undefined)) {
      res.status(400).send("First name is required")
      return
    }
    if (data.lastName === ("" || null || undefined)) {
      res.status(400).send("Last name is required")
      return
    }
    if (data.destination === (null || undefined)) {
      res.status(400).send("Destination is required")
      return
    }
    if (data.destination.address === ("" || null || undefined)) {
      res.status(400).send("Address is required")
      return
    }
    if (data.destination.city === ("" || null || undefined)) {
      res.status(400).send("City is required")
      return
    }
    if (data.destination.zipcode === ("" || null || undefined)) {
      res.status(400).send("Zipcode is required")
      return
    }
    if (data.lines === (null || undefined)) {
      res.status(400).send("Lines are required")
      return
    }
    if (data.lines.length === 0) {
      res.status(400).send("At least one line item is required")
      return
    }
    for (let line of data.lines) {
      if (line.product === ("" || null || undefined)) {
        res.status(400).send("Product is required")
        return
      }
      if (line.quantity ===  null || undefined || line.quantity < 0) {
        res.status(400).send("Quantity is required and must be positive")
        return
      }
    }

    orders.push(data)
    res.status(201).send(data)
    console.log(data)
  }
}

export default handler;
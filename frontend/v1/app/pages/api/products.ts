import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
	id:    string,
	name:  string,
	price: number,
	image: string,
}

const handler =  (req: NextApiRequest, res: NextApiResponse<Array<Product>>) => {
  const products: Array<Product> = [{
		id:    "PIPR-JACKET-SIZM",
		name:  "Pied Piper Jacket - Size M",
		price: 25,
		image: "https://www.usajacket.com/wp-content/uploads/2020/01/Silicon-Valley-Jacket.jpg",
	}, {
		id:    "PIPR-MOSPAD-0000",
		name:  "Silicon Valley Mousepad",
		price: 10.5,
		image: "https://6.cdn.ekm.net/ekmps/shops/51c3ae/images/silicon-valley-pied-piper-inspired-pc-computer-mouse-mat-[2]-728-1-p.png?v=1",
	}, {
		id:    "PIPR-JOGCAS-SIZL",
		name:  "Jogging Casual - Size L",
		price: 25,
		image: "https://images-na.ssl-images-amazon.com/images/I/411sdL4vdKL.jpg",
	}, {
		id:    "PIPR-PULT-SIZS",
		name:  "Pull Tee-Shirt - Size S",
		price: 29.99,
		image: "https://www.espace-des-marques.com/215855-home_default/t-shirt-noir-homme-superdry-embroidery-.jpg",
	}, {
		id:    "PIPR-CRMSOL-50ML",
		name:  "Crème Solaire 50ml",
		price: 19.99,
		image: "https://www.parapharmacie-et-medicament.com/client/840002/media/files/AV-NE-Cr-me-solaire-spf-30-tube-de-50-ml-10440_101_1379881382.jpg",
	}]
  
  res.status(200).json(products)
}

export default handler;
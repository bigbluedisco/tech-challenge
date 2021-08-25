import type { NextApiRequest, NextApiResponse } from 'next'
import pickups from "./pickups.json"

export type PickUpLocation = {
	identifier: string;
	name: string;
	address: string;
	city: string;
	latitude: number;
	longitude: number;
	listopeninghours: Array<{
		openinghours: string;
		day: number;
	}>;
	zipcode: string;
}


const handler =  (req: NextApiRequest, res: NextApiResponse<Array<PickUpLocation>>) => {
  res.status(200).json(pickups as Array<PickUpLocation>)
}

export default handler;
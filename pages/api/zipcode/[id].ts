import { zipcodes } from '@/data/zipcode'

export default function personHandler({ query: { id } }, res) {
    const filtered = zipcodes.includes(id);

  // User with id exists
    if (filtered) {
        res.status(200).json(filtered)
    } else {
        res.status(200).json(false)
    }
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Person} from "../index";

const people: Person[] = [
    {id: 1, name: 'Durward Reynolds'},
    {id: 2, name: 'Kenton Towne'},
    {id: 3, name: 'Therese Wunsch'},
    {id: 4, name: 'Benedict Kessler'},
    {id: 5, name: 'Katelyn Rohan'},
]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Person[]>
) {
    const query = req.query.q?.toString() ?? ''

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    await new Promise(r => setTimeout(r, 2000))

    res.status(200).json(filteredPeople)
}

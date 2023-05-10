import {sendMockedResponse} from "../sendMockedResponse";
import {NextApiRequest, NextApiResponse} from "next";

export default async function (req: NextApiRequest, res: NextApiResponse){
    await sendMockedResponse({req, res})
}

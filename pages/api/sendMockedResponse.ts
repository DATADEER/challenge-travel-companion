import {NextApiRequest, NextApiResponse} from "next";
import randomWords from "random-words"

export function sendMockedResponse({req, res}:{req: NextApiRequest,res: NextApiResponse}) {
    return new Promise((resolve, reject) => {
        try {
            const timeout = parseInt(req.query?.timeout as string) ?? 0

            const body = {text: randomWords(3).join("-"), timeout}
            setTimeout(() => {
                res.status(200).json(body)
                resolve(body)
            },timeout)
        }catch(e){
            reject(e)
        }

    })
}

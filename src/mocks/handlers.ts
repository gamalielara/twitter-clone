import {rest} from "msw";
import {tweetsResponse} from "./tweets";

export const handlers = [
    rest.get("https://twitter.com/api/tweets", (req, res, ctx) =>{
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json({data: tweetsResponse}),
        )
    }),
]
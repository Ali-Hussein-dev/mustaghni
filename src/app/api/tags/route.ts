import { _getAllTags } from "@sanity/lib/get-companies";

export const runtime = "edge"

export const GET = async () => {
    const devEnv = process.env.NODE_ENV === "development"
    if (devEnv) {
        const tags = await _getAllTags()
        return Response.json(tags)
    }
    return Response.json({ msg: "only allowed in dev env" })
}
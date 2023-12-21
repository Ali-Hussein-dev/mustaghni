import { redisClient } from "@/utils/redis"

export const runtime = "edge"
export const GET = async () => {
    const searches = await redisClient.get("searches")
    return Response.json({ searches })
}
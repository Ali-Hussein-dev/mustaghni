import { redisClient } from "@/utils/redis"

export const GET = async () => {

    const counts = await redisClient.get("searches")
    return Response.json({ counts })
}
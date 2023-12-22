import { redisClient } from "@/utils/redis"
import { getDocsCount } from "@sanity/lib/get-docu-count";

export const runtime = "edge"
export const GET = async () => {
    const searches = await redisClient.get("searches")
    const brands = await getDocsCount("company")
    return Response.json({ searches, brands })
}
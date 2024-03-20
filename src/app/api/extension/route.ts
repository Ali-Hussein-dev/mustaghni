import { z } from 'zod';
import { type NextRequest } from 'next/server'
import { findCompanies } from '@sanity/lib/get-companies';
import { redisClient } from '@/utils/redis';
import { checkRateLimit, } from '@/utils/rate-limit';

const nameSchema = z.string().min(1).refine(name => /^[^\*\_\{\}\}\[\]]+$/.test(name), {
    message: "name should not contain special characters",
});

export const runtime = "edge"

export const GET = async (req: NextRequest) => {
    const isRateExceeded = await checkRateLimit(req)
    if (isRateExceeded) {
        return isRateExceeded;
    }
    // company name
    const name = req.nextUrl.searchParams.get("name");


    if (!name) {
        console.log("name params is not truthy", name)
        return new Response(JSON.stringify({ msg: "bad request" }), { status: 404 })
    }

    const parsedName = nameSchema.safeParse(name);

    if (!parsedName.success) {
        console.error(parsedName.error.message)
        return new Response(parsedName.error.message, {
            status: 400,
        })
    }
    await redisClient.incr("searches")
    // search for company
    const companyName = parsedName.data;
    const results = await findCompanies(companyName)
    return Response.json(results)
}


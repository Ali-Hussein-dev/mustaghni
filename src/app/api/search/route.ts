import { z } from 'zod';
import { type NextRequest } from 'next/server'
import { searchCompanies } from '../../../../sanity/lib/get-companies';

const nameSchema = z.string().min(1).refine(name => /^[a-zA-Z0-9']+$/.test(name), {
    message: "name should not contain special characters",
});


export const GET = async (req: NextRequest) => {
    // company name
    const name = req.nextUrl.searchParams.get("name");


    if (!name) {
        console.log("name params is not truthy", name)
        return new Response(JSON.stringify({ msg: "bad request" }), { status: 404 })
    }

    const parsedName = nameSchema.safeParse(name);

    if (!parsedName.success) {
        return new Response(parsedName.error.message, {
            status: 400,
        })
    }

    // search for company
    const companyName = parsedName.data;
    const results = await searchCompanies(companyName)
    return Response.json(results)
}
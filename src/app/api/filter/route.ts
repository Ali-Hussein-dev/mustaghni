import { searchByTags } from "@sanity/lib/get-companies";
import { type NextRequest } from "next/server";

export const runtime = "edge"

export const GET = async (req: NextRequest) => {
    const tags = req.nextUrl.searchParams.get("tags");
    if (tags) {
        const companies = await searchByTags(tags)
        return new Response(JSON.stringify(companies), { status: 200 })

    }
    console.warn("tags params is not truthy", tags)
    return new Response(JSON.stringify({ msg: "tags must be provided" }), { status: 400 })
}



// use to generate updated tags.json
// fs.writeFile('tags.json', JSON.stringify(tags, null, 2), (err) => {
//     if (err) {
//         console.error('Error writing file', err);
//     } else {
//         console.log('Successfully wrote tags to tags.json');
//     }
// });
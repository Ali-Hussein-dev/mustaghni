import { authClient } from "@sanity/lib/client";
import { type NextRequest } from "next/server";
import { z } from 'zod';

// Define your schema
const bodySchema = z.object({
    _id: z.string(),
    property: z.union([z.literal("inc"), z.literal("dec")]),
});


interface ExtendedRequest extends NextRequest {
    json: () => Promise<{ _id: string; property: "inc" | "dec", }>
}

export const PATCH = async (req: ExtendedRequest) => {
    const body = await req.json();
    try {
        bodySchema.parse(body);

        await authClient
            .patch(body._id, { [body.property]: { boycotters: 1 } })
            .setIfMissing({ boycotters: 0 })
            .commit()
            .then((updatedDocument) => {
                console.log("updated document", updatedDocument);
            })
            .catch((err: { message: string }) => {
                console.error("Oh no, the update failed: ", err.message);
            });

        return Response.json({ msg: "Brand boycotters has been updated" });
    } catch (e) {
        console.error(e)
        return Response.json({ msg: e, body }, { status: 400 })
    }
};

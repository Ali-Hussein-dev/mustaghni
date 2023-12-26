import { type TypedObject } from "sanity";
import { client } from "./client";

export type StaticPage = {
    title: string;
    content: TypedObject[];
};
export async function getStaticPage({
    slug,
}: {
    slug: string;
}): Promise<StaticPage> {
    return client.fetch(
        `*[_type == "staticPage" && slug.current == $slug][0] {
        title,
        content,
    }`,
        { slug },
    );
}

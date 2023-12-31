import { type TypedObject } from "sanity"
import { client } from "./client"

type Corp = {
    _id: string
    title: string
    logo: string
    description: string
    /**
     * @content evidence description
     * 
     */
    content: TypedObject[];
}
export const getCorpsList = async (): Promise<Corp[]> => {
    return client.fetch(`*[_type == "corp"] {
        title,
        "logo": logo.asset->url,
        description,
    }`)
}

export const getCorp = async (title: string): Promise<Corp> => {
    return client.fetch(`*[_type == "corp" && title match $title ] [0] {
        title,
        "logo": logo.asset->url,
        description,
        content
    }`, {
        title
    })
}
import { client } from "./client"
import type { Company } from './../../src/components/company-card';

export const getCompanies = async (): Promise<Company[]> => {
    return client.fetch(`*[_type == "company"]{
        _id,
        title,
        "logo": logo.asset->url,
    }`)
}

export const searchCompanies = async (title: string): Promise<Company[]> => {
    return client.fetch(`*[_type == "company" && title match "${title}*" ]{
        _id,
        title,
        "logo": logo.asset->url,
        ownedBy,
        ownerCompanyURL,
    }`, {
        title
    })
}

export const searchByTags = async (tags: string): Promise<Company[]> => {
    return client.fetch(`*[_type == "company" && tags match "${tags}" ]{
        _id,
        title,
        "logo": logo.asset->url,
        ownedBy,
        ownerCompanyURL,
    }`, {
        tags
    })
}

export const getByCorp = async (corp: string): Promise<Company[]> => {
    return client.fetch(`*[_type == "company" && ownedBy match "${corp}" ] | order(title asc) {
        title,
        "logo": logo.asset->url,
        ownedBy,
    }`, {
        tags: corp
    })
}

// export const getAllTags = async (): Promise<Company[]> => {
//     return client.fetch(`*[_type == "company" ]{
//         tags,
//     }`)
// }
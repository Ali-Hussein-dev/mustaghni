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
        _id,
        title,
        "logo": logo.asset->url,
        ownedBy,
    }`, {
        tags: corp
    })
}

export const getBrand = async (_id: string): Promise<Company> => {
    return client.fetch(`*[_type == "company" && _id == $_id][0] {
        _id,
        title,
        "logo": logo.asset->url,
        tags,
        ownedBy,
        ownerCompanyURL,
        evidence
    }`, {
        _id
    })
}

export const getBrandName = async (_id: string): Promise<Pick<Company, "title">> => {
    return client.fetch(`*[_type == "company" && _id == $_id][0] {
        title
    }`, {
        _id
    })
}

// export const getAllTags = async (): Promise<Company[]> => {
//     return client.fetch(`*[_type == "company" ]{
//         tags,
//     }`)
// }
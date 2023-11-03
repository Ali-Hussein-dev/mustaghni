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
    }`, {
        title
    })
}
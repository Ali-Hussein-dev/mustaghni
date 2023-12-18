import { client } from "./client";

export const getDocsCount = async (documents: string): Promise<number> => client.fetch(`count(*[_type == "${documents}"])`)
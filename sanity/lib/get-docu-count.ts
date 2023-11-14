import { client } from "./client";

export const getDocsClount = async (documents: string): Promise<number> => client.fetch(`count(*[_type == "${documents}"])`)
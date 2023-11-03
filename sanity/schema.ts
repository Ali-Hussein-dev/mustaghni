import { type SchemaTypeDefinition } from 'sanity'
import companySchema from './schema/company-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [companySchema],
}

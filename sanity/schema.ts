import { type SchemaTypeDefinition } from 'sanity'
import companySchema from './schema/company-schema'
import staticPageSchema from './schema/static-page-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [companySchema, staticPageSchema],
}

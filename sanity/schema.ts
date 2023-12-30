import { type SchemaTypeDefinition } from 'sanity'
import companySchema from './schema/company-schema'
import staticPageSchema from './schema/static-page-schema'
import corpSchema from './schema/corp-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [companySchema, staticPageSchema, corpSchema],
}

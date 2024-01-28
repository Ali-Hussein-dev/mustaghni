import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { env } from '@/env.mjs'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const authClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: env.SANITY_API_TOKEN,
})

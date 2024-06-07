import { createClient } from '@sanity/client'
import type { QueryParams } from '@sanity/client'

// Shared on the server and the browser
export const client = createClient({
  projectId: 'iaftt32f',
  dataset: 'production',
  apiVersion: '2023-06-20',
  useCdn: false,
  perspective: 'published',
})

// Only defined on the server, passed to the browser via a `loader`
export const token =
  typeof process === 'undefined' ? '' : process.env.SANITY_API_READ_TOKEN!;

  console.log('Token:', token);
const DEFAULT_PARAMS = {} as QueryParams

// Utility for fetching data on the server, that can toggle between published and preview drafts
export async function sanityFetch<QueryResponse>({
  previewDrafts,
  query,
  params = DEFAULT_PARAMS,
}: {
  previewDrafts?: boolean
  query: string
  params?: QueryParams
}): Promise<QueryResponse> {
    
    console.log('sanityFetch called');
    console.log('previewDrafts:', previewDrafts);
    console.log('query:', query);
    console.log('params:', params);

  if (previewDrafts && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required.',
    )
  }
  return client.fetch<QueryResponse>(
    query,
    params,
    previewDrafts
      ? {
          token,
          perspective: 'previewDrafts',
        }
      : {},
  )
}
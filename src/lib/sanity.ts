import { createClient } from '@sanity/client';
import type { QueryParams } from '@sanity/client';

console.log('sanity.ts loaded');

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_STUDIO_API_DATASET,
  apiVersion: '2023-06-20',
  useCdn: false,
  perspective: 'published',
});

export const token = process.env.REACT_APP_SANITY_API_READ_TOKEN;
console.log('Token:', token);

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
  previewDrafts,
  query,
  params = DEFAULT_PARAMS,
}: {
  previewDrafts?: boolean;
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  console.log('sanityFetch called');
  console.log('previewDrafts:', previewDrafts);
  console.log('query:', query);
  console.log('params:', params);

  if (previewDrafts && !token) {
    console.error('The `REACT_APP_SANITY_API_READ_TOKEN` environment variable is required.');
    throw new Error('The `REACT_APP_SANITY_API_READ_TOKEN` environment variable is required.');
  }
  return client.fetch<QueryResponse>(
    query,
    params,
    previewDrafts
      ? {
          token,
          perspective: 'previewDrafts',
        }
      : {}
  );
}

//followed instructions on https://github.com/sanity-io/preview-kit/tree/v4?tab=readme-ov-file#sanitypreview-kit
import React from 'react';
import { LiveQueryProvider } from '@sanity/preview-kit';
import { client } from './sanity.ts';

interface PreviewProviderProps {
  children: React.ReactNode;
  token: string;
}

const PreviewProvider: React.FC<PreviewProviderProps> = ({ children, token }) => {
    console.log('PreviewProvider component rendered');
  console.log('Token:', token);

  if (!token) throw new TypeError('Missing token');
  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
};

export default PreviewProvider;

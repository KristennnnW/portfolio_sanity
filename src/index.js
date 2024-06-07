import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { token, sanityFetch } from './lib/sanity.ts'; 

const PreviewProvider = lazy(() => import('./lib/PreviewProvider.tsx')); 

const previewDrafts = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
console.log('previewDrafts:', previewDrafts);

const Root = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const postsQuery = `*[_type == "post"]{title, slug, mainImage{asset->{_id, url}, alt}}`;

      try {
        const postsResponse = await sanityFetch({
          previewDrafts,
          query: postsQuery,
        });

        console.log('Fetched posts:', postsResponse);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.StrictMode>
      {previewDrafts ? (
        <Suspense fallback={<div>Loading preview...</div>}>
          <PreviewProvider token={token}>
            <App />
          </PreviewProvider>
        </Suspense>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
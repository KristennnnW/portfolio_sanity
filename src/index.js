import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { token } from './lib/sanity.ts'; 

const PreviewProvider = lazy(() => import('./lib/PreviewProvider.tsx')); 

const previewDrafts = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

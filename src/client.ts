import { createClient } from "@sanity/client";
import isPreviewMode from "./utils/isPreviewMode";

const projectId = process.env.REACT_APP_SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_STUDIO_API_DATASET;
const authToken = process.env.REACT_APP_SANITY_AUTH_TOKEN;

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: isPreviewMode ? false : true,
    perspective: isPreviewMode ? 'previewDrafts' : 'published',
    token: isPreviewMode ? authToken : undefined,
    ignoreBrowserTokenWarning: isPreviewMode ? true : false
});

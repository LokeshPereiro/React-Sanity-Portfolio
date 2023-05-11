import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: `${import.meta.env.VITE_APP_SANITY_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2023-02-01",
  useCdn: true,
  token: `${import.meta.env.VITE_APP_SANITY_TOKEN}`,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// const abouts = [
//   {
//     title: "MERN Stack Developer",
//     description: "I love working with JavaScript technologies",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Frontend Development",
//     description: "I love dealig with frontend development",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Web Animations",
//     description: "I like to incorporate modern animations to the web",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Basic UI/UX design",
//     description: "I enjoy modern, clean and outstanding designs",
//     imgUrl: images.about04,
//   },
// ];


// export const getImageUrl = (path) => {
//     return new URL(`/assets/${path}`, import.meta.url).href;
// }

const images = import.meta.glob("/assets/**/*", { eager: true });

export const getImageUrl = (path) => images[`/assets/${path}`]?.default || "";

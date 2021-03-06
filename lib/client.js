import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient(
{
    projectId: 'jmh64l9g',
    dataset: 'production',
    apiVersion: '2022-05-19',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}
);

//ability to use image 

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
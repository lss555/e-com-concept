import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: 'ytywgi7s',
	dataset: 'production',
	apiVersion: '2022-03-10',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
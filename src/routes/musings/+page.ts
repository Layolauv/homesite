import { getPosts } from './Post';

export const load = async () => {
	const posts = await getPosts();
	return { posts };
};

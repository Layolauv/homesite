import { getPosts, getPostBySlug } from '../Post';
import { error } from '@sveltejs/kit';

export const entries = async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
};

export const load = async ({ params }) => {
	const post = await getPostBySlug(params.slug);
	if (!post) error(404, 'Page Nonexistent');
	return { post };
};

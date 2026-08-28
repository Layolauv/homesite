interface Post {
	slug: string;
	content: string;
	date: string;
	description: string;
	tags: string[];
	title: string;
}

let postsBySlug: { [key: string]: Post };

export async function getPosts(): Promise<Post[]> {
	if (!postsBySlug) await loadPosts();
	const posts = Object.values<Post>(postsBySlug);
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	return posts;
}

async function loadPosts(): Promise<void> {
	if (!postsBySlug) postsBySlug = {};

	const mdFiles = import.meta.glob('../../../posts/*.md', { eager: true });
	Object.entries(mdFiles).map(([ file, modules ]) => {
		const slug = file.replace('.md', '').split('/').pop();
		postsBySlug[slug] = {
			slug,
			...modules.metadata,
			content: modules.default
		};
	});
}

export async function getPostBySlug(slug): Promise<Post | null> {
	if (!postsBySlug) await loadPosts();
	if (!postsBySlug.hasOwnProperty(slug)) return null;

	return postsBySlug[slug];
}
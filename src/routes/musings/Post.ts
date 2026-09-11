import { base } from '$app/paths';
import type { Component } from 'svelte';

export interface Post {
	slug: string;
	content: Component;
	date: string;
	img: string;
	description: string;
	tags: string[];
	title: string;
}

let postsBySlug: { [key: string]: Post };

export async function getPosts(): Promise<Post[]> {
	if (!postsBySlug) await loadPosts();
	const posts = Object.values<Post>(postsBySlug);
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
}

async function loadPosts(): Promise<void> {
	if (!postsBySlug) postsBySlug = {};

	const mdFiles = import.meta.glob<{ metadata: Omit<Post, 'slug' | 'content'>; default: Component }>(
		'../../../posts/*.md',
		{ eager: true }
	);
	Object.entries(mdFiles).map(([ file, modules ]) => {
		const slug = file.replace('.md', '').split('/').pop();
		if (!slug) return;
		postsBySlug[slug] = {
			slug,
			...modules.metadata,
			img: `${base}${modules.metadata.img}`,
			content: modules.default
		};
	});
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	if (!postsBySlug) await loadPosts();
	if (!postsBySlug.hasOwnProperty(slug)) return null;

	return postsBySlug[slug];
}
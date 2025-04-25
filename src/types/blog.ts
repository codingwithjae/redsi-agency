export interface SanityImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
	hotspot?: {
		x: number;
		y: number;
		height: number;
		width: number;
	};
}

export interface PortableTextChild {
	_key: string;
	_type: string;
	text: string;
	marks?: string[];
}

export interface PortableTextMark {
	_key: string;
	_type: "link";
	href: string;
}

export interface PortableTextBlock {
	_key: string;
	_type: "block";
	children: PortableTextChild[];
	markDefs?: PortableTextMark[];
	style?: "normal" | "h1" | "h2" | "h3" | "blockquote";
}

export interface PortableTextImageNode {
	_key: string;
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
	alt?: string;
}

export type PortableTextContent = PortableTextBlock | PortableTextImageNode;

export interface Post {
	_id: string;
	_type: "post";
	title: string;
	slug: {
		_type: "slug";
		current: string;
	};
	publishedAt: string;
	shortDescription: string;
	mainImage: SanityImage;
	categories: string[];
	author: string;
	body?: PortableTextContent[];
}

export interface BlogContextType {
	posts: Post[];
	currentPost: Post | null;
	loading: boolean;
	error: string | null;
	fetchAllPosts: () => Promise<void>;
	fetchPostBySlug: (slug: string) => Promise<void>;
	formatDate: (dateString: string) => string;
	clearCurrentPost: () => void;
}

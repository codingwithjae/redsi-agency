export interface HeroData {
	title: string;
	highlight: string;
	description: string;
	buttonText: string;
}

export interface ValueItem {
	id: string;
	title: string;
	description: string;
	image: string;
}

export interface AboutData {
	rocketCardText: string;
	description: string;
	mission: string;
	historyTitle: string;
	historyDescription: string;
	valuesTitle: string;
	values: ValueItem[];
}

export interface BannerData {
	title: string;
	highlight: string;
	subtitle: string;
	buttonText: string;
}

export interface ServiceItem {
	title: string;
	text: string;
}

export interface ServiceData {
	id: string;
	title: string;
	paragraph1: string;
	paragraph2: string;
	paragraph3: string;
	items: ServiceItem[];
	buttonText: string;
}

export interface FormLabels {
	name: string;
	email: string;
	message: string;
}

export interface FormData {
	user_name: string;
	user_email: string;
	message: string;
}

export interface ContactData {
	title: string;
	question: string;
	subtext: string;
	description: string;
	formLabels: FormLabels;
	buttonText: string;
}

export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterData {
	title: string;
	pagesTitle: string;
	pages: FooterLink[];
	socialMediaTitle: string;
	contactTitle: string;
	email: string;
	location: string;
	hours: string;
}

export interface DataContextType {
	hero: AppData["hero"];
	about: AppData["about"];
	services: AppData["services"];
	banner: AppData["banner"];
	contact: AppData["contact"];
	footer: AppData["footer"];
	isLoaded: boolean;
}

export interface DataProviderProps {
	children: React.ReactNode;
}

export interface AppData {
	hero: HeroData;
	about: AboutData;
	banner: BannerData;
	services: ServiceData[];
	contact: ContactData;
	footer: FooterData;
}

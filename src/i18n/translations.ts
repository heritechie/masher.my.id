import { FINTECH_EXPERIENCE_YEARS, TOTAL_EXPERIENCE_YEARS } from '../utils/experience';

export const SUPPORTED_LOCALES = ['id', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const defaultLocale: Locale = 'id';

const TOTAL_YEARS_LABEL_ID = `${TOTAL_EXPERIENCE_YEARS}+ tahun`;
const FINTECH_YEARS_LABEL_ID = `${FINTECH_EXPERIENCE_YEARS}+ tahun`;
const TOTAL_YEARS_LABEL_EN = `${TOTAL_EXPERIENCE_YEARS}+ years`;
const FINTECH_YEARS_LABEL_EN = `${FINTECH_EXPERIENCE_YEARS}+ years`;

type Translation = {
	meta: {
		title: string;
		description: string;
	};
	layout: {
		brand: string;
		tagline: string;
		languageSwitcherLabel: string;
		languageNames: Record<Locale, string>;
		skipLinkLabel: string;
		themeToggleLabel: string;
	};
	hero: {
		status: string;
		name: string;
		subtitle: string;
		intro: string;
		portraitAlt: string;
		highlights: string[];
		ctaPrimary: string;
		ctaSecondary: string;
		badge: string;
	};
	experience: {
		title: string;
		body: string;
	};
	stack: {
		title: string;
		intro: string;
		categories: Array<{
			title: string;
			items: string[];
		}>;
	};
	deliverables: {
		title: string;
		intro: string;
		items: Array<{
			title: string;
			description: string;
			icon: string;
		}>;
	};
	contact: {
		title: string;
		intro: string;
		channels: {
			email: string;
			github: string;
			linkedin: string;
		};
	};
	footerNotice: string;
};

export const translations: Record<Locale, Translation> = {
	id: {
		meta: {
			title: 'Halo, saya MasHer — Software Craftsman',
			description: `Situs pribadi MasHer. Software craftsman dengan ${TOTAL_YEARS_LABEL_ID} jam terbang membangun produk digital yang hangat, aman, dan mudah dipakai untuk menggerakkan dampak sosial positif.`,
		},
		layout: {
			brand: 'MasHer',
			tagline: 'Software Craftsman',
			languageSwitcherLabel: 'Ganti bahasa',
			languageNames: {
				id: 'Bahasa Indonesia',
				en: 'English',
			},
			skipLinkLabel: 'Loncat ke konten utama',
			themeToggleLabel: 'Ubah tema',
		},
		hero: {
			status: 'Sedang crafting human-centered, data-aware digital experiences',
			name: 'MasHer',
			subtitle: 'Software craftsman yang menikmati menjembatani arsitektur, UX, dan user trust.',
		intro: `Halo! Selama ${TOTAL_YEARS_LABEL_ID} terakhir, saya bantu komunitas mengubah insight menjadi produk digital yang sustainable. Dalam ${FINTECH_YEARS_LABEL_ID} tahun belakangan, fokus saya ada di data-security awareness, otomasi cerdas, dan cara membawa teknologi supaya terasa bermakna buat masyarakat.`,
			portraitAlt: 'Foto profil MasHer',
			highlights: [
				`Berpengalaman ${TOTAL_YEARS_LABEL_ID} menjaga lifecycle produk—dari discovery, domain modelling, sampai observability.`,
			'Nyaman merancang API, event-driven orchestration, dan experience layer yang relevan bagi komunitas.',
			'Mengutamakan data-security awareness dan secure SDLC sejak ide awal hingga rilis.',
			'Senang menerjemahkan konsep teknis menjadi solusi digital yang mudah diadopsi komunitas & organisasi sosial.',
			],
			ctaPrimary: 'Ngobrol yuk',
			ctaSecondary: 'Cek GitHub',
			badge: 'Berbasis di Indonesia · Senang kolaborasi remote atau onsite',
		},
		experience: {
			title: 'Building software yang tahan lama',
		body: 'Dari portal internal sampai aplikasi publik, fokus saya merapikan domain kompleks menjadi workflow yang intuitif, secure, dan easy to maintain—selalu menjaga keseimbangan antara user experience dan tata kelola data yang bertanggung jawab.',
		},
		stack: {
			title: 'Peralatan tempur favorit',
			intro: 'Teknologi dan pola kerja yang saya pakai untuk menjaga kualitas, keamanan, dan keberlanjutan produk.',
			categories: [
				{
					title: 'Frontend playground',
					items: ['React', 'Angular', 'Tailwind CSS', 'Hono'],
				},
				{
					title: 'Backend powerhouse',
					items: ['Go', 'Node.js', 'Rust (WASM)', 'Python', 'C++', 'PostgreSQL'],
				},
				{
					title: 'Workflow & mindset',
					items: [
						'Flexible architecture patterns',
						'Context-aware system design',
						'Secure SDLC & AppSec',
						'Cloud-native delivery',
						'AI-assisted automation',
					],
				},
			],
		},
		deliverables: {
			title: 'Proyek yang sering saya garap',
		intro: 'Solusi yang saya bangun untuk membuat teknologi terasa akrab, trustworthy, dan bermakna bagi masyarakat.',
			items: [
				{
					title: 'Experience Web Progresif',
					description: 'Aplikasi web responsif dan offline-friendly yang terasa natural di berbagai perangkat.',
					icon: 'ri-smartphone-line',
				},
			{
				title: 'Assistant & Knowledge Hub',
				description: 'Chatbot, knowledge base, dan playbook digital yang membantu komunitas serta organisasi sosial mengambil keputusan.',
				icon: 'ri-chat-smile-2-line',
			},
				{
					title: 'Automasi & Guardrail',
					description: 'Script, pipeline, dan tooling untuk testing, security checks, serta orkestrasi kerja berulang.',
					icon: 'ri-cpu-line',
				},
			{
				title: 'Enablement Digital',
				description: 'Workshop, dashboard, dan workflows yang membantu relawan dan organisasi sosial lebih percaya diri memakai data & otomasi.',
				icon: 'ri-team-line',
			},
			],
		},
		contact: {
			title: 'Yuk diskusi atau kolaborasi',
		intro: 'Ingin ngobrol soal software craftsmanship, keamanan data, atau menggerakkan social impact lewat teknologi? Tinggal pilih kanal favoritmu.',
			channels: {
				email: 'Email',
				github: 'GitHub',
				linkedin: 'LinkedIn',
			},
		},
			footerNotice:
			'FYI: sebagian besar konten dan copy di halaman ini dibantu AI. Kalau ada frasa yang terdengar robotik, anggap saja itu easter egg. 😄',
	},
	en: {
		meta: {
			title: "Hi, I'm MasHer — Software Craftsman",
			description: `Personal site of MasHer. A software craftsman with ${TOTAL_YEARS_LABEL_EN} of building trusted digital products, lately focusing on data-aware security, purposeful automation, and making tech useful for social impact.`,
		},
		layout: {
			brand: 'MasHer',
			tagline: 'Software Craftsman',
			languageSwitcherLabel: 'Change language',
			languageNames: {
				id: 'Bahasa Indonesia',
				en: 'English',
			},
			skipLinkLabel: 'Skip to main content',
			themeToggleLabel: 'Toggle theme',
		},
		hero: {
			status: 'Currently crafting digital experiences with a human & data heartbeat',
			name: 'MasHer',
			subtitle: 'Software craftsman who enjoys aligning architecture, UX, and data trust.',
		intro: `Hey! For ${TOTAL_YEARS_LABEL_EN} I’ve helped communities turn ideas into dependable software. Over the past ${FINTECH_YEARS_LABEL_EN}, I’ve doubled down on security awareness, thoughtful automation, and translating technology so social-impact initiatives can thrive.`,
			portraitAlt: 'MasHer profile portrait',
			highlights: [
				`${TOTAL_YEARS_LABEL_EN} running full-stack delivery loops—discovery, domain modelling, implementation, observability.`,
			'Equally comfortable sketching APIs, designing event-driven systems, and iterating on product ergonomics.',
			'Dive deep into secure SDLC, automated vulnerability testing, and AI-augmented engineering workflows.',
			'Love demystifying complex systems so social-impact teams can adopt digital tools with confidence.',
			],
			ctaPrimary: "Let's chat",
			ctaSecondary: 'Check GitHub',
			badge: 'Based in Indonesia · Excited to collaborate remote or onsite',
		},
		experience: {
			title: 'Building software that goes the distance',
		body: 'From internal tooling to public-facing products, I thrive on untangling tricky domains and shaping experiences that feel approachable, resilient, and respectful of data privacy for the communities they serve.',
		},
		stack: {
			title: 'Toolset I keep reaching for',
			intro: 'Technologies and practices I fall back on to craft secure, maintainable, people-friendly products.',
			categories: [
				{
					title: 'Frontend playground',
					items: ['React', 'Angular', 'Tailwind CSS', 'Hono'],
				},
				{
					title: 'Backend powerhouse',
					items: ['Go', 'Node.js', 'Rust (WASM)', 'Python', 'C++', 'PostgreSQL'],
				},
				{
					title: 'Workflow & mindset',
					items: [
						'Flexible architecture patterns',
						'Context-aware system design',
						'Secure SDLC & AppSec',
						'Cloud-native delivery',
						'AI-assisted automation',
					],
				},
			],
		},
		deliverables: {
			title: 'Things I love to ship',
		intro: 'Solutions I build to make technology approachable, safe, and genuinely useful for social-good work.',
			items: [
				{
					title: 'Progressive Web Experiences',
					description: 'Responsive, offline-ready interfaces that feel natural across devices and contexts.',
					icon: 'ri-smartphone-line',
				},
			{
				title: 'Assistants & Knowledge Hubs',
				description: 'Conversational tools, knowledge bases, and playbooks that empower civic groups and mission-driven teams.',
				icon: 'ri-chat-smile-2-line',
			},
				{
					title: 'Automation & Guardrails',
					description: 'Reusable pipelines for testing, provisioning, security reviews, and operational guardrails.',
					icon: 'ri-cpu-line',
				},
			{
				title: 'Digital Enablement',
				description: 'Workshops, dashboards, and workflows that help social initiatives embrace data and automation responsibly.',
				icon: 'ri-team-line',
			},
			],
		},
		contact: {
			title: "Let’s work on something thoughtful",
		intro: 'Curious about software craftsmanship, data safeguards, or amplifying social impact with technology? Ping me through whichever channel feels right.',
			channels: {
				email: 'Email',
				github: 'GitHub',
				linkedin: 'LinkedIn',
			},
		},
		footerNotice:
		'P.S. most of this copy is AI-assisted. If a sentence sounds overly synthetic, consider it a bonus feature. 😄',
	},
};

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
		primaryNavLabel: string;
		learningJourneyLabel: string;
		webtoolsLabel: string;
		knowledgeBaseLabel: string;
		mobileMenuLabel: string;
	};
	hero: {
		status: string;
		name: string;
		subtitle: string;
		intro: string;
		portraitAlt: string;
		highlights: string[];
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
	learningJourney: {
		meta: {
			title: string;
			description: string;
		};
		title: string;
		intro: string;
		timelineLabel: string;
		readLabel: string;
		upcomingLabel: string;
		backLabel: string;
		articles: Array<{
			year: string;
			title: string;
			summary: string;
			topics: string[];
			link?: string | null;
		}>;
	};
	webtools: {
		meta: {
			title: string;
			description: string;
		};
		title: string;
		tagline: string;
		intro: string;
		note: string;
		launchLabel: string;
		comingSoonLabel: string;
		requestTitle: string;
		requestBody: string;
		requestAction: string;
		tools: Array<{
			title: string;
			description: string;
			icon: string;
			status: 'available' | 'soon';
		}>;
	};
	knowledgeBase: {
		meta: {
			title: string;
			description: string;
		};
		title: string;
		intro: string;
		backLabel: string;
		categoryIntro: string;
		comingSoonLabel: string;
		glossary: Array<{
			category: string;
			description: string;
			items: Array<{
				term: string;
				summary: string;
				notes?: string;
			}>;
		}>;
	};
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
			primaryNavLabel: 'Navigasi utama',
			learningJourneyLabel: 'Jurnal',
			webtoolsLabel: 'Webtools',
			knowledgeBaseLabel: 'Knowledge Base',
			mobileMenuLabel: 'Buka navigasi',
		},
		hero: {
			status: 'Crafting human-centered, data-aware digital experiences',
			name: 'Halo, saya Heriyanto',
			subtitle: 'Teman-teman biasa memanggil saya Masher — Saya seorang Software Engineer yang senang mengintegrasikan arsitektur, UX, dan user trust.',
			intro: `Saya duah berkarir selama lebih dari 12 tahun di bidang Software Engineering, pekerjaan saya biasanya berkutan dengan pengembangan produk digital yang relevan dan sustainable. Dalam 3+ tahun belakangan, perhatian saya banyak di literasi keamanan data, otomatisasi, dan mengejar visi menghadirkan inklusifitas digital.`,
			portraitAlt: 'Foto profil Masher',
			highlights: [
				`Berpengalaman ${TOTAL_YEARS_LABEL_ID} menjaga lifecycle produk—dari discovery, domain modeling, sampai observability.`,
			'Flexible architecture based on business need.',
			'Mengutamakan data-security awareness dan secure SDLC sejak ide awal hingga rilis.',
			'Senang menerjemahkan konsep teknis menjadi solusi digital yang mudah diadopsi komunitas & organisasi sosial.',
			],
			badge: 'Tinggal di Jawa Barat, Indonesia · Mengutamakan kolaborasi remote—onsite bila diperlukan',
		},
		experience: {
			title: 'Reliable software',
		body: 'Dari portal internal sampai aplikasi publik, fokus saya merapikan domain kompleks menjadi workflow yang intuitif, secure, dan easy to maintain—selalu menjaga keseimbangan antara user experience dan tata kelola data yang bertanggung jawab.',
		},
		stack: {
			title: 'Stack favorit',
			intro: 'Teknologi dan pola kerja yang saya pakai untuk menjaga kualitas, keamanan, dan keberlanjutan produk.',
			categories: [
				{
					title: 'Frontend playground',
					items: ['React', 'Angular', 'Tailwind CSS', 'Hono', 'RxDB'],
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
			title: 'Ketertarikan Project',
	intro: 'Solusi yang saya bangun untuk membuat teknologi terasa akrab, trustworthy, dan bermakna bagi masyarakat.',
			items: [
				{
					title: 'Progressife Web App',
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
		learningJourney: {
			meta: {
				title: 'Jurnal — MasHer',
				description: 'Jurnal pribadi yang berisi catatan belajar dan eksperimen saya dalam mempelajari bidang baru.',
			},
			title: 'Jurnal',
			intro:
				'Catatan harian untuk merekam perjalanan belajar, bahan bacaan, dan eksperimen teknis yang sedang saya tekuni.',
			timelineLabel: 'Jurnal belajar beberapa bulan terakhir',
			readLabel: 'Baca catatan',
			upcomingLabel: 'Segera hadir',
			backLabel: 'Kembali ke beranda',
			articles: [
				{
					year: 'Belajar Cyber Security (Oktober 2025)',
					title: 'Belajar Cyber Security ISC2',
					summary:
						'Ringkasan konsep penting dan studi kasus yang saya kumpulkan saat menelusuri kurikulum ISC2 serta menyiapkan lab sendiri.',
					topics: ['Cyber security', 'Certification', 'Study journal'],
					link: null,
				},
				{
					year: 'Rust Web Assembly (November 2025)',
					title: 'Rust Web Assembly (soon)',
					summary:
						'Catatan rencana belajar dan eksperimen kecil membangun komponen WebAssembly dengan Rust untuk aplikasi interaktif.',
					topics: ['Rust', 'WebAssembly', 'Experiment'],
					link: null,
				},
				{
					year: 'Implementasi MCP (Desember 2025)',
					title: 'Implementasi MCP (soon)',
					summary:
						'Rencana dokumentasi dan contoh kode saat saya menjajal Model Context Protocol untuk orkestrasi agen dan tool.',
					topics: ['MCP', 'Agents', 'Architecture'],
					link: null,
				},
			],
		},
		webtools: {
			meta: {
				title: 'Webtools — MasHer',
				description:
					'Launcher webtools pribadi MasHer. Kumpulan utilitas kecil untuk coding, debugging, dan eksplorasi data—seluruhnya berjalan langsung di browser.',
			},
			title: 'Webtools Launcher',
			tagline: 'Toolkit web ringan untuk eksperimen dan debugging cepat.',
			intro:
				'Setiap utilitas dirancang ringan, tanpa perlu login ataupun backend. Cocok buat debugging cepat, cek asumsi data, atau bantu teman tim memahami konsep teknis.',
			note: 'Semua alat bekerja 100% di browser, sehingga aman dipakai bahkan dalam mode offline atau jaringan terbatas.',
			launchLabel: 'Buka alat',
			comingSoonLabel: 'Segera hadir',
			requestTitle: 'Ingin alat khusus?',
			requestBody:
				'Sampaikan kebutuhanmu—misal format data tertentu atau automation snippet. Saya akan coba jadwalkan ke rilis berikutnya.',
			requestAction: 'Ajukan ide',
			tools: [
				{
					title: 'Kalkulator Pinjaman',
					description:
						'Simulasi cicilan, hitung bunga flat vs efektif, dan visualisasikan timeline pembayaran untuk berbagai skenario pinjaman.',
					icon: 'ri-calculator-line',
					status: 'soon',
				},
				{
					title: 'Kalender Nasional',
					description:
						'Kalender Indonesia interaktif dengan hari libur nasional dan cuti bersama terkini.',
					icon: 'ri-calendar-event-line',
					status: 'soon',
				},
				{
					title: 'Pencarian Wilayah Indonesia',
					description:
						'Cari kode wilayah hingga level desa/kelurahan, ambil metadata BPS, dan salin hierarki administratif untuk kebutuhan formulir atau analisis GIS.',
					icon: 'ri-map-pin-line',
					status: 'soon',
				},
				{
					title: 'JSON Tools',
					description:
						'Format, lint, merge, dan bandingkan struktur JSON dengan cepat—lengkap dengan highlight berbeda untuk tipe data bermasalah.',
					icon: 'ri-braces-line',
					status: 'soon',
				},
				{
					title: 'Regex Tester',
					description:
						'Uji pola regex dengan visual feedback, highlight match, dan snippet reuse untuk JavaScript, Rust, atau Python.',
					icon: 'ri-code-s-slash-line',
					status: 'soon',
				},
				{
					title: 'URL & Base64 Tools',
					description:
						'Encode/decode URL, Base64, dan query string sekaligus pratinjau hasil dalam berbagai format.',
					icon: 'ri-links-line',
					status: 'soon',
				},
				{
					title: 'Hash & JWT Decoder',
					description:
						'Hitung hash (SHA, MD5, Bcrypt) dan uraikan JWT secara lokal untuk memeriksa payload serta header tanpa mengirim data keluar.',
					icon: 'ri-fingerprint-line',
					status: 'soon',
				},
				{
					title: 'EXIF Image Inspector',
					description:
						'Bongkar metadata EXIF dari foto, termasuk geotag, model kamera, dan informasi sensor—berguna untuk analisis forensic ringan.',
					icon: 'ri-image-line',
					status: 'soon',
				},
			],
		},
		knowledgeBase: {
			meta: {
				title: 'Knowledge Base — MasHer',
				description:
					'Glosarium istilah keamanan siber dan IT yang dipakai sehari-hari, diringkas dalam bahasa yang ramah untuk kolaborasi lintas disiplin.',
			},
			title: 'Knowledge Base',
			intro:
				'Glosarium istilah penting seputar keamanan siber, tata kelola data, dan rekayasa perangkat lunak—dirancang supaya percakapan teknis terasa lebih inklusif bagi gerakan sosial non-tech-savvy.',
			backLabel: 'Kembali ke beranda',
			categoryIntro:
				'Istilah dikelompokkan per tema agar mudah dipindai saat menyiapkan workshop, dokumentasi, atau diskusi lintas disiplin.',
			comingSoonLabel: 'Daftar istilah akan terus diperbarui.',
			glossary: [
				{
					category: 'Dasar Keamanan & Tata Kelola',
					description: 'Pondasi konsep akses dan tata kelola yang menjaga siapa, apa, dan bagaimana informasi dilindungi.',
					items: [
						{
							term: 'Adequate Security',
							summary: 'Pengamanan yang sepadan dengan tingkat risiko dan besarnya dampak ketika informasi hilang, disalahgunakan, diakses, atau dimodifikasi tanpa izin.',
							notes: 'Sumber: OMB Circular A-130.',
						},
						{
							term: 'Administrative Controls',
							summary: 'Kontrol yang diterapkan melalui kebijakan dan prosedur, misalnya proses pemberian akses atau kewajiban dua orang untuk menjalankan operasi tertentu, dan biasanya berjalan bersama kontrol teknis maupun fisik.',
						},
						{
							term: 'Asset',
							summary: 'Segala sesuatu yang bernilai bagi organisasi, termasuk sistem informasi, properti fisik, maupun aset tak berwujud seperti kekayaan intelektual.',
						},
						{
							term: 'Authentication',
							summary: 'Proses memverifikasi identitas atau kelayakan pihak yang meminta akses ke kategori informasi tertentu agar transmisi palsu dapat dicegah.',
						},
						{
							term: 'Authorization',
							summary: 'Hak atau izin yang diberikan kepada entitas sistem untuk mengakses sumber daya tertentu sesuai peran dan kebutuhan tugas.',
							notes: 'Sumber: NIST SP 800-82 Rev.2.',
						},
						{
							term: 'Availability',
							summary: 'Kemampuan memastikan pengguna sah memperoleh akses dan penggunaan informasi secara andal dan tepat waktu.',
						},
						{
							term: 'Baseline',
							summary: 'Konfigurasi keamanan minimum yang terdokumentasi dan disyaratkan oleh standar atau kebijakan organisasi.',
						},
						{
							term: 'Biometric',
							summary: 'Karakteristik biologis individu seperti sidik jari, geometri tangan, suara, atau pola iris yang dimanfaatkan untuk verifikasi identitas.',
						},
						{
							term: 'CIA Triad',
							summary: 'Kerangka kerja yang menekankan Confidentiality, Integrity, dan Availability sebagai tiga pilar keamanan informasi.',
						},
						{
							term: 'Confidentiality',
							summary: 'Kondisi ketika data tidak tersedia atau diungkapkan kepada pihak maupun proses yang tidak berwenang.',
							notes: 'Sumber: NIST SP 800-66.',
						},
						{
							term: 'Zero Trust',
							summary: 'Pendekatan keamanan yang menganggap setiap permintaan harus divalidasi tanpa kepercayaan otomatis, biasanya diperkuat dengan microsegmentation dan kontrol berbasis identitas di setiap lapisan beban kerja.',
						},
						{
							term: 'Least Privilege',
							summary: 'Prinsip memberikan hak akses minimum agar setiap peran hanya bisa menjalankan tugas yang benar-benar diperlukan; sering disebut juga prinsip least privilege.',
							notes: 'Sumber: NIST SP 800-179.',
						},
						{
							term: 'Mandatory Access Control (MAC)',
							summary: 'Kontrol akses wajib yang menuntut sistem mengatur hak akses secara ketat mengikuti kebijakan keamanan organisasi, bukan preferensi pemilik data.',
						},
						{
							term: 'Mantrap',
							summary: 'Ruang masuk dengan dua pintu yang hanya terbuka satu per satu untuk memastikan orang yang masuk benar-benar terverifikasi.',
						},
						{
							term: 'Microsegmentation',
							summary: 'Strategi zero trust yang membagi jaringan menjadi zona kecil terisolasi menggunakan firewall atau kontrol sejenis pada setiap titik koneksi.',
						},
						{
							term: 'Multi-Factor Authentication (MFA)',
							summary: 'Proses autentikasi yang membutuhkan dua atau lebih faktor berbeda—sesuatu yang diketahui, dimiliki, atau melekat pada pengguna.',
						},
						{
							term: 'Single-Factor Authentication',
							summary: 'Autentikasi yang hanya memakai satu faktor—misalnya password saja—sehingga tingkat perlindungannya lebih rendah.',
						},
						{
							term: 'National Institute of Standards and Technology (NIST)',
							summary: 'Badan di bawah Departemen Perdagangan AS yang mengembangkan standar ilmu pengetahuan dan teknologi, termasuk kerangka keamanan informasi.',
						},
						{
							term: 'Non-repudiation',
							summary: 'Kemampuan sistem untuk mencegah pihak yang bertindak menyangkal bahwa ia pernah membuat, menyetujui, mengirim, atau menerima informasi.',
						},
						{
							term: 'Classification',
							summary: 'Proses mengidentifikasi tingkat dampak yang mungkin terjadi bila aset informasi diakses pihak yang tidak berwenang, sehingga menentukan level perlindungan terutama untuk menjaga kerahasiaan data.',
						},
						{
							term: 'Classified or Sensitive Information',
							summary: 'Informasi yang ditetapkan perlu dilindungi dari pengungkapan tanpa izin dan diberi penandaan tingkat klasifikasi ketika dituangkan dalam dokumen.',
						},
						{
							term: 'Configuration Management',
							summary: 'Disiplin untuk memastikan hanya perubahan yang sudah diotorisasi dan divalidasi yang boleh diterapkan pada sistem.',
						},
						{
							term: 'Defense in Depth',
							summary: 'Strategi keamanan yang mengintegrasikan manusia, teknologi, dan operasi untuk membangun lapisan pertahanan beragam di seluruh misi organisasi.',
							notes: 'Sumber: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Discretionary Access Control (DAC)',
							summary: 'Model akses yang memberi keleluasaan kepada pemilik objek atau pihak berwenang untuk menentukan siapa yang boleh mengakses dan hak apa yang diberikan.',
							notes: 'Sumber: NIST SP 800-192.',
						},
						{
							term: 'Object',
							summary: 'Entitas pasif terkait sistem informasi—seperti perangkat, berkas, tabel, atau proses—yang memuat atau menerima informasi dan dapat diakses oleh subjek.',
							notes: 'Sumber: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Subject',
							summary: 'Individu, proses, atau perangkat yang menyebabkan aliran informasi antar objek atau mengubah keadaan sistem.',
							notes: 'Sumber: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Governance',
							summary: 'Proses pengelolaan organisasi yang mencakup cara keputusan dibuat, peran yang terlibat, dan kebijakan serta prosedur yang mengarahkannya.',
						},
						{
							term: 'General Data Protection Regulation (GDPR)',
							summary: 'Regulasi komprehensif Uni Eropa tahun 2016 yang menetapkan perlindungan privasi data pribadi sebagai hak asasi individu.',
						},
						{
							term: 'Physical Controls',
							summary: 'Kontrol keamanan berupa mekanisme fisik—seperti dinding, pagar, penjaga, kunci, dan pembaca kartu—yang sering terhubung dengan sistem teknis.',
						},
						{
							term: 'Privileged Account',
							summary: 'Akun sistem dengan otorisasi tingkat tinggi milik pengguna istimewa yang dapat melakukan konfigurasi atau tindakan administratif.',
							notes: 'Sumber: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Role-Based Access Control (RBAC)',
							summary: 'Model kontrol akses yang menetapkan hak pengguna berdasarkan peran dan tanggung jawab di dalam organisasi.',
						},
						{
							term: 'Rule',
							summary: 'Instruksi yang menentukan apakah suatu identitas diizinkan atau ditolak mengakses sistem dengan membandingkan terhadap daftar kontrol.',
						},
						{
							term: 'Security Controls',
							summary: 'Safeguard manajerial, operasional, dan teknis yang dirancang untuk melindungi kerahasiaan, integritas, dan ketersediaan sistem dan informasinya.',
							notes: 'Sumber: FIPS PUB 199.',
						},
						{
							term: 'Technical Controls',
							summary: 'Kontrol keamanan yang terutama dijalankan oleh mekanisme perangkat keras, perangkat lunak, atau firmware dalam sistem informasi.',
						},
						{
							term: 'Security Governance',
							summary: 'Keseluruhan kebijakan, peran, dan proses yang memandu pengambilan keputusan keamanan di organisasi.',
						},
						{
							term: 'Security Operations Center (SOC)',
							summary: 'Fungsi terpusat yang memonitor, mendeteksi, dan menganalisis kejadian keamanan untuk mencegah gangguan bisnis.',
						},
						{
							term: 'Segregation of Duties',
							summary: 'Praktik memisahkan langkah proses agar tidak dapat diselesaikan oleh satu orang saja, sehingga mengurangi risiko penyalahgunaan.',
						},
						{
							term: 'Token',
							summary: 'Objek fisik yang dipegang pengguna untuk membantu autentikasi identitasnya.',
							notes: 'Sumber: NISTIR 7711.',
						},
						{
							term: 'Turnstile',
							summary: 'Pintu putar satu arah yang memastikan hanya satu orang lewat pada satu waktu ke area terbatas.',
						},
						{
							term: 'User Provisioning',
							summary: 'Proses membuat, memelihara, dan menonaktifkan identitas pengguna dalam sistem.',
						},
					],
				},
				{
					category: 'Risiko, Audit, dan Ketahanan',
					description: 'Istilah tentang bagaimana organisasi membaca ancaman, memastikan kepatuhan, dan menjaga operasi tetap berjalan saat ada gangguan.',
					items: [
						{
							term: 'Adverse Events',
							summary: 'Peristiwa dengan konsekuensi negatif seperti crash sistem, banjir paket jaringan, penyalahgunaan hak istimewa, deface situs, atau eksekusi kode berbahaya yang merusak data.',
						},
						{
							term: 'Audit',
							summary: 'Peninjauan dan pemeriksaan independen atas catatan serta aktivitas untuk menilai kecukupan kontrol sistem dan kepatuhan terhadap kebijakan operasional.',
							notes: 'Sumber: NIST SP 1800-15B.',
						},
						{
							term: 'Breach',
							summary: 'Kehilangan kendali, kompromi, atau pengungkapan tanpa izin terhadap informasi identitas pribadi, termasuk ketika pengguna sah mengaksesnya di luar tujuan yang diotorisasi.',
							notes: 'Sumber: NIST SP 800-53 Rev.5.',
						},
						{
							term: 'Business Continuity (BC)',
							summary: 'Tindakan, proses, dan alat yang memastikan operasi kritis organisasi tetap berjalan selama situasi kontinjensi.',
						},
						{
							term: 'Business Continuity Plan (BCP)',
							summary: 'Dokumentasi instruksi atau prosedur yang menjelaskan bagaimana proses misi dan bisnis dipertahankan selama dan setelah gangguan besar.',
						},
						{
							term: 'Business Impact Analysis (BIA)',
							summary: 'Analisis terhadap kebutuhan, fungsi, dan saling ketergantungan sistem informasi untuk memetakan prioritas kontinjensi saat terjadi gangguan signifikan.',
							notes: 'Sumber: NIST SP 800-34 Rev.1.',
						},
						{
							term: 'Impact',
							summary: 'Besarnya kerugian yang dapat dipicu ketika sebuah ancaman berhasil mengeksploitasi kerentanan.',
						},
						{
							term: 'Information Security Risk',
							summary: 'Potensi dampak negatif pada operasi, aset, individu, organisasi lain, atau negara akibat akses, penggunaan, pengungkapan, gangguan, modifikasi, atau penghancuran informasi tanpa izin.',
						},
						{
							term: 'Probability',
							summary: 'Kemungkinan bahwa suatu ancaman mampu mengeksploitasi kerentanan tertentu.',
							notes: 'Sumber: NIST SP 800-30 Rev.1.',
						},
						{
							term: 'Qualitative Risk Analysis',
							summary: 'Metode analisis risiko menggunakan deskriptor seperti rendah, sedang, atau tinggi untuk menilai likelihood dan dampak.',
							notes: 'Sumber: NISTIR 8286.',
						},
						{
							term: 'Quantitative Risk Analysis',
							summary: 'Metode analisis risiko yang memberi nilai numerik pada dampak dan likelihood berdasarkan probabilitas statistik serta valuasi finansial.',
							notes: 'Sumber: NISTIR 8286.',
						},
						{
							term: 'Data Loss Prevention (DLP)',
							summary: 'Kemampuan sistem untuk mendeteksi dan mencegah penggunaan atau transmisi informasi tanpa izin.',
						},
						{
							term: 'Denial-of-Service (DoS)',
							summary: 'Upaya mencegah akses sah ke sumber daya atau menunda operasi kritis dalam kerangka waktu yang dibutuhkan.',
							notes: 'Sumber: NIST SP 800-27 Rev. A.',
						},
						{
							term: 'Disaster Recovery (DR)',
							summary: 'Aktivitas yang diperlukan untuk memulihkan layanan TI dan komunikasi selama serta setelah terjadinya gangguan.',
						},
						{
							term: 'Disaster Recovery Plan (DRP)',
							summary: 'Proses, kebijakan, dan prosedur untuk menyiapkan pemulihan atau kelanjutan fungsi bisnis kritis, infrastruktur teknologi, dan aplikasi setelah bencana.',
						},
						{
							term: 'Event',
							summary: 'Setiap kejadian yang dapat diamati pada jaringan atau sistem.',
							notes: 'Sumber: NIST SP 800-61 Rev.2.',
						},
						{
							term: 'Exploit',
							summary: 'Serangan spesifik yang memanfaatkan kerentanan suatu sistem.',
						},
						{
							term: 'Incident',
							summary: 'Peristiwa yang secara aktual atau potensial membahayakan kerahasiaan, integritas, atau ketersediaan sistem informasi maupun data yang diproses, disimpan, atau ditransmisikan.',
						},
						{
							term: 'Incident Handling / Incident Response (IR)',
							summary: 'Proses mendeteksi dan menganalisis insiden untuk membatasi dampaknya.',
						},
						{
							term: 'Incident Response Plan (IRP)',
							summary: 'Dokumentasi instruksi atau prosedur yang telah ditentukan sebelumnya untuk mendeteksi, merespons, dan membatasi konsekuensi serangan siber.',
							notes: 'Sumber: NIST SP 800-34 Rev.1.',
						},
						{
							term: 'Insider Threat',
							summary: 'Entitas dengan akses sah yang berpotensi merusak sistem informasi melalui penghancuran, pengungkapan, modifikasi data, atau penolakan layanan.',
							notes: 'Sumber: NIST SP 800-32.',
						},
						{
							term: 'Intrusion',
							summary: 'Serangkaian peristiwa keamanan yang membentuk insiden ketika penyusup mencoba memperoleh akses ke sistem atau sumber daya tanpa otorisasi.',
							notes: 'Sumber: IETF RFC 4949 Ver.2.',
						},
						{
							term: 'Likelihood',
							summary: 'Probabilitas bahwa kerentanan tertentu akan dieksploitasi dalam lingkungan ancaman yang ada.',
						},
						{
							term: 'Likelihood of Occurrence',
							summary: 'Faktor berbobot berdasarkan analisis subjektif atas kemungkinan suatu ancaman mampu mengeksploitasi kerentanan.',
						},
						{
							term: 'Log Anomaly',
							summary: 'Ketidakwajaran pada catatan log yang teridentifikasi saat analisis dan dapat menandakan peristiwa penting untuk pemantauan lanjutan.',
						},
						{
							term: 'Logging',
							summary: 'Pengumpulan dan penyimpanan aktivitas pengguna dalam catatan peristiwa sistem dan jaringan organisasi.',
							notes: 'Sumber: NIST SP 1800-25B.',
						},
						{
							term: 'Records',
							summary: 'Rekaman bukti aktivitas atau hasil yang digunakan untuk memverifikasi bahwa organisasi maupun sistem bekerja sesuai harapan.',
							notes: 'Sumber: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Records Retention',
							summary: 'Praktik menyimpan rekaman sesuai siklus hidupnya lalu memusnahkannya setelah periode yang ditentukan.',
						},
						{
							term: 'Remanence',
							summary: 'Informasi residual yang masih tersisa pada media penyimpanan setelah dilakukan pembersihan.',
							notes: 'Sumber: NIST SP 800-88 Rev.1.',
						},
						{
							term: 'Request for Change (RFC)',
							summary: 'Tahap awal manajemen perubahan saat pemangku kepentingan mengajukan modifikasi prosedur atau produk.',
						},
						{
							term: 'Risk',
							summary: 'Ukuran sejauh mana entitas terancam oleh suatu peristiwa atau keadaan potensial.',
						},
						{
							term: 'Risk Acceptance',
							summary: 'Keputusan menerima risiko karena manfaat bisnis dianggap lebih besar dibanding dampaknya tanpa tindakan tambahan.',
						},
						{
							term: 'Risk Assessment',
							summary: 'Proses mengidentifikasi dan menganalisis risiko terhadap operasi, aset, individu, dan organisasi lain.',
						},
						{
							term: 'Risk Avoidance',
							summary: 'Keputusan tidak menjalankan fungsi bisnis tertentu karena dampak atau likelihood risikonya dianggap terlalu besar.',
						},
						{
							term: 'Risk Management',
							summary: 'Proses mengidentifikasi, mengevaluasi, dan mengendalikan ancaman melalui kerangka konteks, asesmen, perlakuan, dan pemantauan.',
						},
						{
							term: 'Risk Management Framework',
							summary: 'Pendekatan terstruktur untuk mengawasi dan mengelola risiko di tingkat perusahaan.',
							notes: 'Sumber: CNSSI 4009.',
						},
						{
							term: 'Risk Mitigation',
							summary: 'Implementasi kontrol keamanan untuk menurunkan dampak atau likelihood dari risiko tertentu.',
						},
						{
							term: 'Risk Tolerance',
							summary: 'Tingkat risiko yang bersedia ditanggung organisasi untuk mencapai hasil yang diinginkan; dikenal juga sebagai risk appetite atau acceptable risk.',
						},
						{
							term: 'Risk Transference',
							summary: 'Pendekatan memindahkan dampak finansial risiko kepada pihak eksternal, misalnya melalui asuransi.',
						},
						{
							term: 'Risk Treatment',
							summary: 'Penetapan cara terbaik dalam menangani risiko yang telah teridentifikasi.',
						},
						{
							term: 'Sensitivity',
							summary: 'Tingkat pentingnya informasi sebagaimana ditetapkan pemiliknya untuk menentukan kebutuhan perlindungan.',
							notes: 'Sumber: NIST SP 800-60 Vol.1 Rev.1.',
						},
						{
							term: 'Threat Modeling',
							summary: 'Proses sistematis memetakan aset, potensi ancaman, dan kontrol mitigasi sejak tahap desain.',
						},
						{
							term: 'Attack Surface',
							summary: 'Kumpulan titik masuk yang dapat dimanfaatkan penyerang, mulai dari API, konfigurasi jaringan, sampai kebiasaan pengguna.',
						},
						{
							term: 'Vulnerability',
							summary: 'Kelemahan pada sistem, prosedur keamanan, kontrol internal, atau implementasi yang dapat dieksploitasi oleh sumber ancaman.',
							notes: 'Sumber: NIST SP 800-128.',
						},
						{
							term: 'Incident Response Playbook',
							summary: 'Panduan langkah demi langkah untuk mendeteksi, merespon, dan memulihkan insiden keamanan secara terstruktur.',
						},
						{
							term: 'Criticality',
							summary: 'Tingkat ketergantungan organisasi terhadap informasi atau sistem informasi untuk keberhasilan misi atau fungsi bisnis.',
							notes: 'Sumber: NIST SP 800-60 Vol.1 Rev.1.',
						},
						{
							term: 'Crime Prevention through Environmental Design (CPTED)',
							summary: 'Pendekatan arsitektural yang menekankan fitur pasif dalam merancang bangunan dan ruang guna menurunkan kemungkinan terjadinya kriminalitas.',
						},
					],
				},
				{
					category: 'Ancaman & Teknik Serangan',
					description: 'Istilah yang menggambarkan pola serangan, malware, dan cara adversary mengeksploitasi sistem.',
					items: [
						{
							term: 'Man-in-the-Middle (MitM)',
							summary: 'Serangan ketika lawan berada di antara pengguna dan sistem untuk menyadap atau mengubah data yang melintas.',
							notes: 'Sumber: NISTIR 7711.',
						},
						{
							term: 'Oversized Packet Attack',
							summary: 'Teknik mengirim paket jaringan berukuran lebih besar dari yang dapat ditangani sehingga sistem target gagal beroperasi.',
						},
						{
							term: 'Payload',
							summary: 'Aksi utama yang dibawa oleh kode berbahaya setelah berhasil dijalankan.',
						},
						{
							term: 'Ransomware',
							summary: 'Malware yang mengunci layar atau mengenkripsi berkas sehingga pengguna tidak bisa mengakses sistem sampai tebusan dibayar.',
						},
						{
							term: 'Social Engineering',
							summary: 'Taktik memanipulasi manusia—melalui email, telepon, teks, atau interaksi sosial—agar membuka akses ke sistem.',
						},
						{
							term: 'Spoofing',
							summary: 'Pemalsuan alamat atau identitas pengirim untuk mendapatkan akses ilegal ke sistem.',
							notes: 'Sumber: CNSSI 4009-2015.',
						},
						{
							term: 'Threat',
							summary: 'Setiap keadaan atau peristiwa yang berpotensi berdampak negatif pada operasi, aset, individu, organisasi lain, atau negara.',
							notes: 'Sumber: NIST SP 800-30 Rev.1.',
						},
						{
							term: 'Threat Actor',
							summary: 'Individu atau kelompok yang mencoba mengeksploitasi kerentanan untuk merealisasikan ancaman.',
						},
						{
							term: 'Threat Vector',
							summary: 'Cara atau jalur yang dipakai pelaku ancaman untuk mencapai tujuannya.',
						},
						{
							term: 'Whaling Attack',
							summary: 'Upaya phishing yang menargetkan eksekutif tinggi atau individu beraset besar untuk mengelabui otorisasi transfer dana.',
						},
						{
							term: 'Zero Day',
							summary: 'Kerentanan yang belum diketahui publik dan dapat dieksploitasi sebelum ada pola deteksi atau patch.',
						},
					],
				},
				{
					category: 'Infrastruktur & Cloud',
					description: 'Istilah teknis yang membantu memahami platform, layanan, dan otomasi yang menopang operasi digital.',
					items: [
						{
							term: 'Application Programming Interface (API)',
							summary: 'Sekumpulan rutin, standar, protokol, dan alat untuk membangun aplikasi yang dapat berinteraksi dengan layanan atau perangkat lunak berbasis web.',
						},
						{
							term: 'Application Server',
							summary: 'Komputer yang bertanggung jawab meng-host aplikasi sehingga dapat diakses dari workstation pengguna.',
							notes: 'Sumber: NIST SP 800-82 Rev.2.',
						},
						{
							term: 'Artificial Intelligence',
							summary: 'Kemampuan komputer atau robot untuk meniru kecerdasan dan perilaku manusia.',
						},
						{
							term: 'Broadcast',
							summary: 'Metode transmisi satu-ke-banyak yang mengirim lalu lintas internet dari satu sumber ke setiap penerima pada segmen tersebut.',
						},
						{
							term: 'Bot',
							summary: 'Kode berbahaya yang berperilaku seperti robot jarak jauh bagi penyerang dan sering membawa kemampuan trojan maupun worm.',
						},
						{
							term: 'Cloud Computing',
							summary: 'Model penyediaan akses jaringan sesuai permintaan ke kumpulan sumber daya komputasi yang dapat dikonfigurasi dan cepat disediakan dengan usaha pengelolaan minimal.',
							notes: 'Sumber: NIST SP 800-145.',
						},
						{
							term: 'Community Cloud',
							summary: 'Infrastruktur cloud yang disediakan khusus bagi komunitas organisasi dengan kepentingan bersama dan dapat dimiliki atau dioperasikan bersama ataupun pihak ketiga, baik on-premises maupun off-premises.',
							notes: 'Sumber: NIST SP 800-145.',
						},
						{
							term: 'De-encapsulation',
							summary: 'Proses kebalikan dari enkapsulasi, ketika bundel data dibuka atau diuraikan dari lapisan pembungkusnya.',
						},
						{
							term: 'Domain Name Service (DNS)',
							summary: 'Istilah yang merujuk pada layanan, server fisik, dan protokol jaringan yang menerjemahkan nama domain menjadi alamat IP dan sebaliknya.',
						},
						{
							term: 'Egress Monitoring',
							summary: 'Pemantauan lalu lintas jaringan yang keluar untuk mendeteksi pola mencurigakan atau kebocoran data.',
						},
						{
							term: 'Encapsulation',
							summary: 'Prinsip menyatukan data dan metode agar tersembunyi selama pengembangan maupun operasi; juga berarti membungkus data ke dalam struktur lain seperti pada protokol jaringan dan enkripsi.',
						},
						{
							term: 'File Transfer Protocol (FTP)',
							summary: 'Protokol internet yang digunakan untuk mentransfer file antar host.',
						},
						{
							term: 'Firewalls',
							summary: 'Perangkat yang menegakkan kebijakan keamanan dengan memfilter lalu lintas masuk berdasarkan seperangkat aturan.',
						},
						{
							term: 'Fragment Attack',
							summary: 'Serangan yang memecah paket sedemikian rupa hingga sistem tidak dapat menyusun kembali data secara benar.',
						},
						{
							term: 'Infrastructure as a Service (IaaS)',
							summary: 'Model layanan yang menyediakan perangkat keras komputasi, penyimpanan, dan jaringan sebagai fondasi untuk membangun dan menjalankan aplikasi, biasanya ditagih berdasarkan penggunaan.',
						},
						{
							term: 'Ingress Monitoring',
							summary: 'Pemantauan lalu lintas jaringan yang masuk untuk mendeteksi ancaman sedini mungkin.',
						},
						{
							term: 'Institute of Electrical and Electronics Engineers (IEEE)',
							summary: 'Organisasi profesional yang menetapkan standar untuk telekomunikasi, rekayasa komputer, dan disiplin terkait.',
						},
						{
							term: 'International Organization for Standardization (ISO)',
							summary: 'Badan yang mengembangkan standar internasional secara sukarela—termasuk kolaborasi dengan IEC dan ITU untuk teknologi informasi dan komunikasi.',
						},
						{
							term: 'Internet Control Message Protocol (ICMP)',
							summary: 'Protokol jaringan IP yang distandardisasi IETF melalui RFC 792 untuk memeriksa ketersediaan host atau layanan.',
						},
						{
							term: 'Internet Engineering Task Force (IETF)',
							summary: 'Organisasi standar internet yang beranggotakan perancang jaringan, operator, vendor, dan peneliti yang menyusun protokol melalui kolaborasi dan konsensus.',
							notes: 'Sumber: NIST SP 1800-16B.',
						},
						{
							term: 'Internet Protocol (IPv4)',
							summary: 'Protokol standar untuk mengirim data antar sumber dan tujuan pada jaringan packet-switched yang saling terhubung.',
							notes: 'Sumber: CNSSI 4009-2015.',
						},
						{
							term: 'iOS',
							summary: 'Sistem operasi perangkat mobile yang dikembangkan oleh Apple Inc.',
						},
						{
							term: 'Linux',
							summary: 'Sistem operasi open source yang kode sumbernya tersedia secara legal bagi pengguna akhir.',
						},
						{
							term: 'Packet',
							summary: 'Representasi data pada Lapisan 3 model OSI yang dibawa melintasi jaringan.',
						},
						{
							term: 'Platform as a Service (PaaS)',
							summary: 'Layanan middleware pengembangan aplikasi berbasis cloud yang memungkinkan tim membangun sebelum mendistribusikannya sebagai aset SaaS.',
						},
						{
							term: 'Private Cloud',
							summary: 'Platform cloud yang dijalankan di dalam perimeter organisasi untuk mempertahankan kendali atas data dan kepatuhan.',
						},
						{
							term: 'Public Cloud',
							summary: 'Infrastruktur cloud yang disediakan untuk penggunaan umum dan dikelola penyedia komersial, akademik, atau pemerintah.',
							notes: 'Sumber: NIST SP 800-145.',
						},
						{
							term: 'Protocols',
							summary: 'Sekumpulan aturan format dan prosedur yang mengatur komunikasi antar sistem.',
							notes: 'Sumber: NIST SP 800-82 Rev.2.',
						},
						{
							term: 'Simple Mail Transport Protocol (SMTP)',
							summary: 'Protokol standar untuk mengirim dan menerima email antar pengirim dan penerima.',
						},
						{
							term: 'Software as a Service (SaaS)',
							summary: 'Model di mana pelanggan memakai aplikasi milik penyedia cloud tanpa mengelola infrastruktur dasar.',
							notes: 'Sumber: NIST SP 800-145.',
						},
						{
							term: 'Transport Control Protocol/Internet Protocol (TCP/IP) Model',
							summary: 'Model protokol IETF yang mendefinisikan lapisan link, internet, transport, dan aplikasi untuk komunikasi antar jaringan.',
						},
						{
							term: 'Virtual Local Area Network (VLAN)',
							summary: 'Kelompok logis perangkat dan server yang tampak berada pada LAN yang sama meski tersebar secara geografis.',
						},
						{
							term: 'Virtual Private Network (VPN)',
							summary: 'Jalur komunikasi aman yang dibangun di atas jaringan publik untuk menghubungkan jaringan secara privat.',
						},
						{
							term: 'Web Server',
							summary: 'Komputer yang menyediakan layanan web, termasuk perangkat keras, sistem operasi, perangkat lunak server, dan konten situs.',
							notes: 'Sumber: NIST SP 800-44 Versi 2.',
						},
						{
							term: 'Wireless Local Area Network (WLAN)',
							summary: 'Jaringan area lokal berbasis transmisi radio, contohnya Wi-Fi, yang menghubungkan perangkat dalam area berdekatan.',
						},
						{
							term: 'Zenmap',
							summary: 'Antarmuka grafis untuk Nmap yang membantu memetakan perangkat dan layanan yang terhubung ke jaringan.',
						},
					],
				},
				{
					category: 'Data & Kriptografi',
					description: 'Istilah seputar proteksi data, integritas, dan teknik kriptografi yang menjaga kerahasiaan serta keaslian informasi.',
					items: [
						{
							term: 'Asymmetric Encryption',
							summary: 'Algoritme yang menggunakan satu kunci untuk mengenkripsi dan kunci berbeda untuk mendekripsi plaintext.',
						},
						{
							term: 'Bit',
							summary: 'Unit data paling dasar berupa 0 atau 1 pada lapisan fisik model OSI.',
						},
						{
							term: 'Byte',
							summary: 'Satuan informasi digital yang umumnya tersusun dari delapan bit.',
						},
						{
							term: 'Checksum',
							summary: 'Nilai numerik yang mewakili total dari data tersimpan atau terkirim dan dipakai untuk mendeteksi kesalahan melalui perbandingan berikutnya.',
						},
						{
							term: 'Ciphertext',
							summary: 'Bentuk terubah dari pesan plaintext yang hanya dapat dibaca oleh penerima yang memiliki kunci sah.',
						},
						{
							term: 'Cryptanalyst',
							summary: 'Praktisi yang melakukan kriptoanalisis untuk mencari kelemahan metode kriptografi atau implementasi sistem keamanan.',
						},
						{
							term: 'Cryptography',
							summary: 'Bidang yang mempelajari serta menerapkan metode untuk mengamankan makna dan konten informasi melalui penyamaran atau transformasi.',
						},
						{
							term: 'Data Integrity',
							summary: 'Properti bahwa data tidak diubah secara tidak sah, baik ketika disimpan, diproses, maupun saat ditransmisikan.',
							notes: 'Sumber: NIST SP 800-27 Rev. A.',
						},
						{
							term: 'Degaussing',
							summary: 'Teknik menghapus data pada media magnetik sehingga sisa magnetiknya tidak cukup untuk merekonstruksi informasi.',
						},
						{
							term: 'Decryption',
							summary: 'Proses kebalikan enkripsi yang mengubah ciphertext kembali menjadi plaintext menggunakan algoritme dan kunci yang sesuai.',
						},
						{
							term: 'Digital Signature',
							summary: 'Transformasi kriptografi yang memberikan autentikasi asal, integritas data, dan non-repudiasi penandatangan bila diterapkan dengan benar.',
							notes: 'Sumber: NIST SP 800-12 Rev.1.',
						},
						{
							term: 'Integrity',
							summary: 'Properti informasi yang memastikan kelengkapan, akurasi, konsistensi internal, dan kegunaan sesuai tujuan.',
						},
						{
							term: 'Encrypt',
							summary: 'Tindakan melindungi informasi dengan mengubahnya ke bentuk yang hanya dapat dibaca pihak berizin.',
						},
						{
							term: 'Encryption',
							summary: 'Proses mengonversi pesan dari plaintext menjadi ciphertext; sering juga disebut enciphering.',
						},
						{
							term: 'Encryption System',
							summary: 'Kumpulan algoritme, proses, perangkat keras, perangkat lunak, dan prosedur yang secara terpadu menyediakan kemampuan enkripsi dan dekripsi.',
						},
						{
							term: 'Message Digest',
							summary: 'Nilai penanda digital yang unik untuk data dan berubah total jika ada satu bit data yang diubah.',
							notes: 'Sumber: NISTIR 8011 Vol.3.',
						},
						{
							term: 'Payment Card Industry Data Security Standard (PCI DSS)',
							summary: 'Standar keamanan informasi bagi merchant dan penyedia layanan yang memproses transaksi kartu pembayaran.',
						},
						{
							term: 'Personally Identifiable Information (PII)',
							summary: 'Informasi yang dapat mengidentifikasi individu, seperti nama, NIK, atau data yang tertaut dengannya.',
							notes: 'Sumber: NIST SP 800-122.',
						},
						{
							term: 'Plaintext',
							summary: 'Data dalam bentuk asli yang mudah dibaca dan sangat rentan terhadap kebocoran kerahasiaan.',
						},
						{
							term: 'Privacy',
							summary: 'Hak individu untuk mengendalikan distribusi informasi tentang dirinya.',
						},
						{
							term: 'Protected Health Information (PHI)',
							summary: 'Informasi terkait status kesehatan, layanan kesehatan, atau pembayaran layanan sesuai definisi HIPAA.',
						},
						{
							term: 'Symmetric Encryption',
							summary: 'Algoritme yang menggunakan kunci yang sama untuk proses enkripsi dan dekripsi.',
						},
						{
							term: 'System Integrity',
							summary: 'Kualitas sistem yang memastikan fungsi berjalan tanpa manipulasi tak sah, baik disengaja maupun tidak.',
							notes: 'Sumber: NIST SP 800-27 Rev. A.',
						},
					],
				},
				{
					category: 'Engineering Modern',
					description: 'Praktik rekayasa perangkat lunak yang menjaga kualitas sekaligus keamanan.',
					items: [
						{
							term: 'Secure SDLC',
							summary: 'Pendekatan pengembangan yang menanamkan pemeriksaan keamanan di setiap fase dari discovery hingga maintenance.',
						},
						{
							term: 'Observability',
							summary: 'Kemampuan memahami kondisi sistem lewat log, metrik, dan trace agar anomali cepat terdeteksi.',
						},
						{
							term: 'Chaos Engineering',
							summary: 'Eksperimen terkontrol untuk menguji ketahanan sistem dengan mensimulasikan kegagalan nyata.',
						},
						{
							term: 'Operating System',
							summary: 'Perangkat lunak inti yang memuat kernel dan mengatur standar interaksi aplikasi, antarmuka, serta manajemen berkas.',
							notes: 'Sumber: NIST SP 800-44 Versi 2.',
						},
						{
							term: 'Patch',
							summary: 'Komponen perangkat lunak yang memodifikasi berkas atau pengaturan perangkat untuk memperbaiki kelemahan tanpa mengubah nomor versi.',
							notes: 'Sumber: ISO/IEC 19770-2.',
						},
						{
							term: 'Patch Management',
							summary: 'Proses terstruktur untuk memberi tahu, mengidentifikasi, menerapkan, dan memverifikasi revisi kode sistem operasi maupun aplikasi.',
							notes: 'Sumber: CNSSI 4009.',
						},
						{
							term: 'Software',
							summary: 'Program komputer beserta data terkait yang dapat dimodifikasi secara dinamis saat dijalankan.',
							notes: 'Sumber: NIST SP 800-37 Rev.2.',
						},
						{
							term: 'State',
							summary: 'Kondisi yang menggambarkan situasi entitas pada titik waktu tertentu.',
						},
						{
							term: 'Unix',
							summary: 'Sistem operasi yang banyak dipakai dalam pengembangan perangkat lunak dan layanan jaringan.',
						},
					],
				},
			],
		},
	},
	en: {
		meta: {
			title: "Hi, I'm MasHer — Software Craftsman",
			description: `Personal site of MasHer. A software craftsman with ${TOTAL_YEARS_LABEL_EN} of building trusted digital products, lately focusing on data-aware security, purposeful automation, and making tech useful for social impact.`,
		},
		layout: {
			brand: 'MasHer',
			languageSwitcherLabel: 'Change language',
			languageNames: {
				id: 'Bahasa Indonesia',
				en: 'English',
			},
			skipLinkLabel: 'Skip to main content',
			themeToggleLabel: 'Toggle theme',
			primaryNavLabel: 'Main navigation',
			learningJourneyLabel: 'Journal',
			webtoolsLabel: 'Webtools',
			knowledgeBaseLabel: 'Knowledge Base',
			mobileMenuLabel: 'Toggle navigation menu',
		},
		hero: {
			status: 'Currently crafting digital experiences with a human & data heartbeat',
			name: "Hi, I'm Heriyanto",
			subtitle: 'Friends usually call me MasHer—a software craftsman who enjoys aligning architecture, UX, and data trust.',
		intro: `Hey! For ${TOTAL_YEARS_LABEL_EN} I’ve helped communities turn ideas into dependable software. Over the past ${FINTECH_YEARS_LABEL_EN}, I’ve doubled down on security awareness, thoughtful automation, and translating technology so social-impact initiatives can thrive.`,
			portraitAlt: 'MasHer profile portrait',
			highlights: [
				`${TOTAL_YEARS_LABEL_EN} running full-stack delivery loops—discovery, domain modelling, implementation, observability.`,
			'Flexible architecture based on business need.',
			'Dive deep into secure SDLC, automated vulnerability testing, and AI-augmented engineering workflows.',
			'Love demystifying complex systems so social-impact teams can adopt digital tools with confidence.',
			],
			badge: 'Based in Indonesia · Remote-first collaborator, onsite when it truly helps',
		},
		experience: {
			title: 'Reliable software',
	body: 'From internal tooling to public-facing products, I thrive on untangling tricky domains and shaping experiences that feel approachable, resilient, and respectful of data privacy for the communities they serve.',
		},
		stack: {
			title: 'Toolset I keep reaching for',
			intro: 'Technologies and practices I fall back on to craft secure, maintainable, people-friendly products.',
			categories: [
				{
					title: 'Frontend playground',
					items: ['React', 'Angular', 'Tailwind CSS', 'Hono', 'RxDB'],
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
			title: 'Project interests',
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
		webtools: {
			meta: {
				title: 'Webtools — MasHer',
				description:
					"MasHer's personal webtools launcher. A bundle of lightweight utilities for coding, debugging, and data exploration—running entirely in your browser.",
			},
			title: 'Webtools Launcher',
			tagline: 'Lightweight web tools for quick experiments and debugging.',
			intro:
				'Every tool runs client-side with no login, analytics, or background sync. Perfect for quick experiments, pair debugging, or sharing reproducible workflows with teammates.',
			note: 'All utilities work 100% in-browser so you can stay productive even on limited or offline networks.',
			launchLabel: 'Launch tool',
			comingSoonLabel: 'Coming soon',
			requestTitle: 'Need a specific utility?',
			requestBody:
				'Describe the format, workflow, or automation you have in mind. I’ll triage the request and schedule it for an upcoming release.',
			requestAction: 'Request a tool',
			tools: [
				{
					title: 'Loan Calculator',
					description:
						'Model repayment schedules, compare flat versus effective interest, and visualise amortisation timelines in minutes.',
					icon: 'ri-calculator-line',
					status: 'soon',
				},
				{
					title: 'Indonesian Calendar',
					description:
						'An interactive Indonesian calendar that highlights national holidays and shared leave days.',
					icon: 'ri-calendar-event-line',
					status: 'soon',
				},
				{
					title: 'Indonesia Region Finder',
					description:
						'Search province-to-village codes, pull BPS metadata, and copy hierarchical paths for forms, logistics, or GIS analysis.',
					icon: 'ri-map-pin-line',
					status: 'soon',
				},
				{
					title: 'JSON Tools',
					description:
						'Pretty-print, lint, merge, and diff JSON structures with datatype-aware highlights and quick issue spotting.',
					icon: 'ri-braces-line',
					status: 'soon',
				},
				{
					title: 'Regex Tester',
					description:
						'Experiment with regex patterns, visualise matches instantly, and export snippets for JavaScript, Rust, or Python.',
					icon: 'ri-code-s-slash-line',
					status: 'soon',
				},
				{
					title: 'URL & Base64 Tools',
					description:
						'Decode or encode URL payloads, Base64 strings, and query parameters with live previews in multiple formats.',
					icon: 'ri-links-line',
					status: 'soon',
				},
				{
					title: 'Hash & JWT Decoder',
					description:
						'Generate hashes (SHA, MD5, Bcrypt) and inspect JWT payloads locally, keeping sensitive tokens off the network.',
					icon: 'ri-fingerprint-line',
					status: 'soon',
				},
				{
					title: 'EXIF Image Inspector',
					description:
						'Reveal EXIF metadata from photos—geotags, camera models, exposure settings—for quick analysis and sanity checks.',
					icon: 'ri-image-line',
					status: 'soon',
				},
			],
		},
		knowledgeBase: {
			meta: {
				title: 'Knowledge Base — MasHer',
				description:
					'A living glossary that translates everyday cybersecurity and IT vocabulary into plain language for mission-driven teams.',
			},
			title: 'Knowledge Base',
			intro:
				'A living glossary of cybersecurity, data governance, and software engineering terms—crafted so non-tech-savvy social initiatives can join the conversation with confidence.',
			backLabel: 'Back to homepage',
			categoryIntro:
				'Entries are grouped by theme so you can prep workshops, documentation, or cross-discipline conversations without jargon getting in the way.',
			comingSoonLabel: 'More glossary entries coming soon.',
			glossary: [
				{
					category: 'Security Fundamentals & Governance',
					description: 'Core vocabulary that explains how access, safeguards, and policy-driven controls keep information trustworthy.',
					items: [
						{
							term: 'Adequate Security',
							summary: 'Safeguards scaled to the level of risk and potential harm if information is lost, misused, accessed, or modified without authorization.',
							notes: 'Source: OMB Circular A-130.',
						},
						{
							term: 'Administrative Controls',
							summary: 'Policy- and procedure-based controls, such as access provisioning workflows or dual-control requirements, typically enforced alongside technical and physical safeguards.',
						},
						{
							term: 'Asset',
							summary: 'Anything of value owned by the organization, covering tangible systems and property as well as intangible intellectual property.',
						},
						{
							term: 'Authentication',
							summary: 'The act of verifying the identity or eligibility of a station, originator, or individual before granting access to specific information categories.',
						},
						{
							term: 'Authorization',
							summary: 'The right or permission granted to a system entity to access a particular resource, usually linked to roles and duties.',
							notes: 'Source: NIST SP 800-82 Rev.2.',
						},
						{
							term: 'Availability',
							summary: 'Ensuring authorized users have reliable, timely access to information when they need it.',
						},
						{
							term: 'Baseline',
							summary: 'The documented minimum-security configuration permitted by organizational standards or policy.',
						},
						{
							term: 'Biometric',
							summary: 'Biological traits—such as fingerprints, hand geometry, voice, or iris patterns—used to authenticate individuals.',
						},
						{
							term: 'CIA Triad',
							summary: 'A framework emphasizing confidentiality, integrity, and availability as the three pillars of information security.',
						},
						{
							term: 'Confidentiality',
							summary: 'The state in which data is not disclosed or made available to unauthorized people or processes.',
							notes: 'Source: NIST SP 800-66.',
						},
						{
							term: 'Zero Trust',
							summary: 'A security posture that validates every request instead of trusting internal networks by default, frequently reinforced with microsegmentation and identity-centric controls.',
						},
						{
							term: 'Least Privilege',
							summary: 'The practice of granting only the minimum access a role needs to perform its responsibilities—also referred to as the principle of least privilege.',
							notes: 'Source: NIST SP 800-179.',
						},
						{
							term: 'Mandatory Access Control (MAC)',
							summary: 'An access model where the system enforces permissions strictly according to organizational security policies.',
						},
						{
							term: 'Mantrap',
							summary: 'An entrance that requires passing through two interlocking doors, allowing only one door to open at a time to verify entrants.',
						},
						{
							term: 'Microsegmentation',
							summary: 'A zero trust technique that breaks networks into tightly scoped zones using firewalls or similar controls at each connection point.',
						},
						{
							term: 'Multi-Factor Authentication (MFA)',
							summary: 'Identity verification that uses two or more distinct factors—something you know, have, or are.',
						},
						{
							term: 'Single-Factor Authentication',
							summary: 'Authentication that relies on only one factor, such as a password, and therefore provides lower assurance.',
						},
						{
							term: 'National Institute of Standards and Technology (NIST)',
							summary: 'A U.S. Department of Commerce agency that advances measurement science and develops standards, including cybersecurity frameworks.',
						},
						{
							term: 'Non-repudiation',
							summary: 'The assurance that an individual cannot deny creating, approving, sending, or receiving specific information.',
						},
						{
							term: 'Classification',
							summary: 'The process of identifying the potential harm that could occur if an information asset is exposed, so the correct protection level can be assigned.',
						},
						{
							term: 'Classified or Sensitive Information',
							summary: 'Information designated for protection against unauthorized disclosure and marked to indicate its classification level when documented.',
						},
						{
							term: 'Configuration Management',
							summary: 'A discipline that ensures only authorized and validated changes are introduced into a system.',
						},
						{
							term: 'Defense in Depth',
							summary: 'A security strategy that integrates people, technology, and operations to build layered defenses across the organization.',
							notes: 'Source: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Discretionary Access Control (DAC)',
							summary: 'An access model that lets the object owner—or another authorized controller—decide who receives access rights and what those rights entail.',
							notes: 'Source: NIST SP 800-192.',
						},
						{
							term: 'Object',
							summary: 'A passive system-related entity—such as devices, files, tables, or processes—that contains or receives information.',
							notes: 'Source: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Subject',
							summary: 'An individual, process, or device that causes information to flow among objects or alters system state.',
							notes: 'Source: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Governance',
							summary: 'The process for steering an organization, covering how decisions are made as well as the policies, roles, and procedures that support them.',
						},
						{
							term: 'General Data Protection Regulation (GDPR)',
							summary: 'Comprehensive European Union legislation passed in 2016 that frames personal privacy as an individual human right.',
						},
						{
							term: 'Layered Defense',
							summary: 'Arranging multiple controls in series to provide consecutive protection for an asset; often referred to as defense in depth.',
						},
						{
							term: 'Logical Access Control Systems',
							summary: 'Automated systems that validate identity (via PINs, cards, biometrics, or tokens) and tailor access privileges to roles and responsibilities.',
							notes: 'Source: NIST SP 800-53 Rev.5.',
						},
						{
							term: 'Physical Controls',
							summary: 'Security safeguards implemented through tangible mechanisms such as walls, fences, guards, locks, and badge readers.',
						},
						{
							term: 'Privileged Account',
							summary: 'An information system account with elevated authorizations granted to a privileged user.',
							notes: 'Source: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Role-Based Access Control (RBAC)',
							summary: 'An access control system that assigns user permissions based on organizational roles.',
						},
						{
							term: 'Rule',
							summary: 'An instruction that allows or denies system access by comparing a validated identity with an access control list.',
						},
						{
							term: 'Security Controls',
							summary: 'The management, operational, and technical safeguards prescribed to protect the confidentiality, integrity, and availability of systems and information.',
							notes: 'Source: FIPS PUB 199.',
						},
						{
							term: 'Technical Controls',
							summary: 'Security controls primarily implemented and executed by hardware, software, or firmware mechanisms.',
						},
						{
							term: 'Security Governance',
							summary: 'The totality of policies, roles, and processes that guide security decisions within an organization.',
						},
						{
							term: 'Security Operations Center (SOC)',
							summary: 'A centralized function that monitors, detects, and analyzes security events to prevent business disruption.',
						},
						{
							term: 'Segregation of Duties',
							summary: 'The practice of splitting processes so that no single person can complete them end-to-end, reducing insider risk.',
						},
						{
							term: 'Token',
							summary: 'A physical object a user controls and presents to help authenticate their identity.',
							notes: 'Source: NISTIR 7711.',
						},
						{
							term: 'Turnstile',
							summary: 'A one-way rotating barrier that allows only one person at a time into a protected area.',
						},
						{
							term: 'User Provisioning',
							summary: 'The process of creating, maintaining, and deactivating user identities on a system.',
						},
					],
				},
				{
					category: 'Risk, Audit, and Resilience',
					description: 'Terminology for reading threats, maintaining compliance, and sustaining operations during disruption.',
					items: [
						{
							term: 'Adverse Events',
							summary: 'Events with negative consequences, such as system crashes, packet floods, unauthorized privilege use, website defacement, or malicious code that destroys data.',
						},
						{
							term: 'Audit',
							summary: 'An independent review of records and activities to assess whether system controls are adequate and policies are being followed.',
							notes: 'Source: NIST SP 1800-15B.',
						},
						{
							term: 'Breach',
							summary: 'Loss of control, compromise, or unauthorized disclosure of personally identifiable information, including access by authorized users for unauthorized purposes.',
							notes: 'Source: NIST SP 800-53 Rev.5.',
						},
						{
							term: 'Business Continuity (BC)',
							summary: 'Actions, processes, and tools that help an organization keep critical operations running during contingencies.',
						},
						{
							term: 'Business Continuity Plan (BCP)',
							summary: 'Documented instructions or procedures for sustaining mission and business processes during and after a significant disruption.',
						},
						{
							term: 'Business Impact Analysis (BIA)',
							summary: 'An analysis of system requirements, functions, and interdependencies used to prioritize contingency needs during significant disruption.',
							notes: 'Source: NIST SP 800-34 Rev.1.',
						},
						{
							term: 'Impact',
							summary: 'The magnitude of harm that could result if a threat successfully exploits a vulnerability.',
						},
						{
							term: 'Information Security Risk',
							summary: 'The potential adverse effects on operations, assets, people, other organizations, or the nation arising from unauthorized access, use, disclosure, disruption, modification, or destruction of information or systems.',
						},
						{
							term: 'Probability',
							summary: 'The likelihood that a threat actor is capable of exploiting a particular vulnerability.',
							notes: 'Source: NIST SP 800-30 Rev.1.',
						},
						{
							term: 'Qualitative Risk Analysis',
							summary: 'A risk analysis method that assigns descriptors—such as low, medium, or high—to impact and likelihood.',
							notes: 'Source: NISTIR 8286.',
						},
						{
							term: 'Quantitative Risk Analysis',
							summary: 'A risk analysis method that uses numeric impact and likelihood values based on statistical probability and monetary loss estimates.',
							notes: 'Source: NISTIR 8286.',
						},
						{
							term: 'Data Loss Prevention (DLP)',
							summary: 'System capabilities designed to detect and prevent the unauthorized use or transmission of information.',
						},
						{
							term: 'Denial-of-Service (DoS)',
							summary: 'The prevention of authorized access to resources or the delay of time-critical operations needed to deliver a service.',
							notes: 'Source: NIST SP 800-27 Rev. A.',
						},
						{
							term: 'Disaster Recovery (DR)',
							summary: 'Activities needed to restore IT and communications services during and after an outage or disruption.',
						},
						{
							term: 'Disaster Recovery Plan (DRP)',
							summary: 'Policies, processes, and procedures for resuming critical business functions, technology infrastructure, systems, and applications after a disaster.',
						},
						{
							term: 'Event',
							summary: 'Any observable occurrence on a network or system.',
							notes: 'Source: NIST SP 800-61 Rev.2.',
						},
						{
							term: 'Exploit',
							summary: 'A specific attack that takes advantage of a system vulnerability.',
						},
						{
							term: 'Incident',
							summary: 'An event that actually or potentially jeopardizes the confidentiality, integrity, or availability of a system or the information it handles.',
						},
						{
							term: 'Incident Handling / Incident Response (IR)',
							summary: 'The process of detecting and analyzing incidents so the impact stays contained.',
						},
						{
							term: 'Incident Response Plan (IRP)',
							summary: 'Predocumented procedures to detect, respond to, and limit the consequences of malicious cyber attacks.',
							notes: 'Source: NIST SP 800-34 Rev.1.',
						},
						{
							term: 'Insider Threat',
							summary: 'An authorized entity that could harm the system by destroying, disclosing, modifying data, or causing denial of service.',
							notes: 'Source: NIST SP 800-32.',
						},
						{
							term: 'Intrusion',
							summary: 'A sequence of security events that constitute an incident where an intruder attempts to gain unauthorized access.',
							notes: 'Source: IETF RFC 4949 Ver.2.',
						},
						{
							term: 'Likelihood',
							summary: 'The probability that a particular vulnerability will be exercised in the prevailing threat environment.',
						},
						{
							term: 'Likelihood of Occurrence',
							summary: 'A weighted factor reflecting the assessed chance that a threat can exploit a given vulnerability.',
						},
						{
							term: 'Log Anomaly',
							summary: 'An irregularity spotted during log analysis that may indicate events worth further investigation.',
						},
						{
							term: 'Logging',
							summary: 'Collecting and storing user activities as event records across systems and networks.',
							notes: 'Source: NIST SP 1800-25B.',
						},
						{
							term: 'Records',
							summary: 'Documented evidence of activities or results that verify systems and organizations perform as intended.',
							notes: 'Source: NIST SP 800-53 Rev.4.',
						},
						{
							term: 'Records Retention',
							summary: 'The practice of retaining records for as long as necessary and then disposing of them after the appropriate interval.',
						},
						{
							term: 'Remanence',
							summary: 'Residual information remaining on storage media after clearing.',
							notes: 'Source: NIST SP 800-88 Rev.1.',
						},
						{
							term: 'Request for Change (RFC)',
							summary: 'The initial change-management step where a stakeholder proposes a modification to a procedure or product.',
						},
						{
							term: 'Risk',
							summary: 'A measure of the extent to which an entity is threatened by a potential circumstance or event.',
						},
						{
							term: 'Risk Acceptance',
							summary: 'Deciding to tolerate a risk because the potential benefits outweigh the impact.',
						},
						{
							term: 'Risk Assessment',
							summary: 'Identifying and analyzing risks to operations, assets, individuals, and other organizations.',
						},
						{
							term: 'Risk Avoidance',
							summary: 'Choosing not to perform a business activity because the associated risk is too high.',
						},
						{
							term: 'Risk Management',
							summary: 'Identifying, evaluating, and controlling threats across the risk context, assessment, treatment, and monitoring phases.',
						},
						{
							term: 'Risk Management Framework',
							summary: 'A structured approach for overseeing and managing enterprise risk.',
							notes: 'Source: CNSSI 4009.',
						},
						{
							term: 'Risk Mitigation',
							summary: 'Implementing security controls to reduce the impact or likelihood of a specific risk.',
						},
						{
							term: 'Risk Tolerance',
							summary: 'The level of risk an entity is willing to assume—also called risk appetite or acceptable risk.',
						},
						{
							term: 'Risk Transference',
							summary: 'Paying an external party, such as an insurer, to absorb the financial impact of a risk.',
						},
						{
							term: 'Risk Treatment',
							summary: 'Determining the best course of action for a recognized risk.',
						},
						{
							term: 'Sensitivity',
							summary: 'The importance assigned to information by its owner for the purpose of denoting protection needs.',
							notes: 'Source: NIST SP 800-60 Vol.1 Rev.1.',
						},
						{
							term: 'Threat Modeling',
							summary: 'A structured process to map assets, possible threats, and mitigation controls early in the design phase.',
						},
						{
							term: 'Attack Surface',
							summary: 'The collection of entry points an attacker could exploit—from APIs and network configs to everyday user behaviour.',
						},
						{
							term: 'Vulnerability',
							summary: 'A weakness in an information system, security procedure, internal control, or implementation that could be exploited by a threat source.',
							notes: 'Source: NIST SP 800-128.',
						},
						{
							term: 'Incident Response Playbook',
							summary: 'A step-by-step guide that helps teams detect, respond to, and recover from security incidents.',
						},
						{
							term: 'Criticality',
							summary: 'A measure of how much an organization depends on information or information systems for mission or business success.',
							notes: 'Source: NIST SP 800-60 Vol.1 Rev.1.',
						},
						{
							term: 'Crime Prevention through Environmental Design (CPTED)',
							summary: 'An architectural approach that uses passive design features to reduce opportunities for criminal activity.',
						},
					],
				},
				{
					category: 'Threats & Attack Techniques',
					description: 'Terms that describe how adversaries exploit systems and the tactics defenders must recognize.',
					items: [
						{
							term: 'Man-in-the-Middle (MitM)',
							summary: 'An attack in which the adversary positions themselves between user and system to intercept or alter data in transit.',
							notes: 'Source: NISTIR 7711.',
						},
						{
							term: 'Oversized Packet Attack',
							summary: 'Deliberately sending packets larger than expected so the receiving system fails to process them.',
						},
						{
							term: 'Payload',
							summary: 'The primary malicious action delivered by a piece of code after it executes.',
						},
						{
							term: 'Ransomware',
							summary: 'Malicious software that locks screens or encrypts files until a payment is made.',
						},
						{
							term: 'Social Engineering',
							summary: 'Techniques that manipulate people—via email, phone, text, or in-person ploys—to gain system access.',
						},
						{
							term: 'Spoofing',
							summary: 'Faking a sender’s identity or address to gain unauthorized system access.',
							notes: 'Source: CNSSI 4009-2015.',
						},
						{
							term: 'Threat',
							summary: 'Any circumstance or event with the potential to adversely affect operations, assets, individuals, other organizations, or the nation.',
							notes: 'Source: NIST SP 800-30 Rev.1.',
						},
						{
							term: 'Threat Actor',
							summary: 'An individual or group attempting to exploit vulnerabilities to realize a threat.',
						},
						{
							term: 'Threat Vector',
							summary: 'The path or method a threat actor uses to achieve their objectives.',
						},
						{
							term: 'Whaling Attack',
							summary: 'A phishing campaign that targets high-level executives or wealthy individuals to authorize large fund transfers.',
						},
						{
							term: 'Zero Day',
							summary: 'A previously unknown vulnerability that attackers can exploit before detection signatures or patches exist.',
						},
					],
				},
				{
					category: 'Infrastructure & Cloud',
					description: 'Technology building blocks that power digital services, collaboration, and automation.',
					items: [
						{
							term: 'Application Programming Interface (API)',
							summary: 'A set of routines, standards, protocols, and tools for building software applications that interact with web-based services or tools.',
						},
						{
							term: 'Application Server',
							summary: 'A computer responsible for hosting applications so they can be accessed by user workstations.',
							notes: 'Source: NIST SP 800-82 Rev.2.',
						},
						{
							term: 'Artificial Intelligence',
							summary: 'The ability of computers or robots to simulate human intelligence and behaviour.',
						},
						{
							term: 'Broadcast',
							summary: 'A one-to-many transmission method that sends internet traffic from a single source to every receiver on a segment.',
						},
						{
							term: 'Bot',
							summary: 'Malicious code that lets an attacker remotely control compromised systems, often with trojan or worm capabilities.',
						},
						{
							term: 'Cloud Computing',
							summary: 'A model for on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned with minimal management effort.',
							notes: 'Source: NIST SP 800-145.',
						},
						{
							term: 'Community Cloud',
							summary: 'Cloud infrastructure provisioned for exclusive use by a community of organizations with shared concerns, which may be owned or operated by one or more members, a third party, or a combination of them, on- or off-premises.',
							notes: 'Source: NIST SP 800-145.',
						},
						{
							term: 'De-encapsulation',
							summary: 'The reverse of encapsulation, in which bundled data is unpacked or revealed from its wrapper.',
						},
						{
							term: 'Domain Name Service (DNS)',
							summary: 'A term that can refer to the service, the physical servers, and the protocol that map domain names to IP addresses and back again.',
						},
						{
							term: 'Egress Monitoring',
							summary: 'Monitoring outbound network traffic to spot suspicious patterns or data exfiltration attempts.',
						},
						{
							term: 'Encapsulation',
							summary: 'Bundling data and methods so they are hidden during development and runtime; also refers to wrapping data inside other structures, as in networking and encryption.',
						},
						{
							term: 'File Transfer Protocol (FTP)',
							summary: 'The internet protocol—and associated programs—used to transfer files between hosts.',
						},
						{
							term: 'Firewalls',
							summary: 'Devices that enforce administrative security policies by filtering inbound traffic according to defined rules.',
						},
						{
							term: 'Fragment Attack',
							summary: 'An attack that fragments packets so a system cannot reassemble the data correctly.',
						},
						{
							term: 'Infrastructure as a Service (IaaS)',
							summary: 'A service model that delivers core compute, storage, and networking resources so teams can build and deploy applications—typically billed on consumption.',
						},
						{
							term: 'Ingress Monitoring',
							summary: 'Monitoring inbound network traffic to surface potential threats early.',
						},
						{
							term: 'Institute of Electrical and Electronics Engineers (IEEE)',
							summary: 'A professional organization that defines standards spanning telecommunications, computer engineering, and related fields.',
						},
						{
							term: 'International Organization for Standardization (ISO)',
							summary: 'A body that develops voluntary international standards, collaborating with IEC and ITU across information and communication technologies.',
						},
						{
							term: 'Internet Control Message Protocol (ICMP)',
							summary: 'An IP network protocol standardized via IETF RFC 792 to check host or service availability.',
						},
						{
							term: 'Internet Engineering Task Force (IETF)',
							summary: 'The standards body of internet designers, operators, vendors, and researchers who shape protocols through collaboration and consensus.',
							notes: 'Source: NIST SP 1800-16B.',
						},
						{
							term: 'Internet Protocol (IPv4)',
							summary: 'The standard protocol for transporting data between endpoints over interconnected packet-switched networks.',
							notes: 'Source: CNSSI 4009-2015.',
						},
						{
							term: 'iOS',
							summary: 'Apple’s operating system for mobile devices.',
						},
						{
							term: 'Linux',
							summary: 'An open-source operating system whose source code is legally accessible to end users.',
						},
						{
							term: 'Packet',
							summary: 'A Layer 3 representation of data carried across a network in the OSI model.',
						},
						{
							term: 'Platform as a Service (PaaS)',
							summary: 'A cloud development environment that lets teams build applications before deploying them as SaaS solutions.',
						},
						{
							term: 'Private Cloud',
							summary: 'A cloud environment operated within an organization’s boundary so it can retain control over data and compliance.',
						},
						{
							term: 'Public Cloud',
							summary: 'Cloud infrastructure provisioned for public use and operated by commercial, academic, or government providers.',
							notes: 'Source: NIST SP 800-145.',
						},
						{
							term: 'Protocols',
							summary: 'Sets of format and procedure rules that govern communication between systems.',
							notes: 'Source: NIST SP 800-82 Rev.2.',
						},
						{
							term: 'Simple Mail Transport Protocol (SMTP)',
							summary: 'The standard communication protocol for sending and receiving email between senders and receivers.',
						},
						{
							term: 'Software as a Service (SaaS)',
							summary: 'A cloud model where consumers use provider-run applications without managing the underlying infrastructure.',
							notes: 'Source: NIST SP 800-145.',
						},
						{
							term: 'Transport Control Protocol/Internet Protocol (TCP/IP) Model',
							summary: 'The IETF model defining link, internet, transport, and application layers for internetworked communication.',
						},
						{
							term: 'Virtual Local Area Network (VLAN)',
							summary: 'A logical grouping of devices and servers that appear to share a LAN despite geographic distribution.',
						},
						{
							term: 'Virtual Private Network (VPN)',
							summary: 'A secure communication tunnel built on top of existing networks to connect sites privately.',
						},
						{
							term: 'Web Server',
							summary: 'A computer that delivers web services, including hardware, operating system, server software, and site content.',
							notes: 'Source: NIST SP 800-44 Version 2.',
						},
						{
							term: 'Wireless Local Area Network (WLAN)',
							summary: 'A local area network based on radio transmissions—Wi-Fi being a common example.',
						},
						{
							term: 'Zenmap',
							summary: 'The graphical interface for Nmap used to scan networks and identify connected systems and services.',
						},
					],
				},
				{
					category: 'Data & Cryptography',
					description: 'Concepts that protect data integrity, confidentiality, and authenticity.',
					items: [
						{
							term: 'Asymmetric Encryption',
							summary: 'An algorithm that uses one key to encrypt plaintext and a different key to decrypt it.',
						},
						{
							term: 'Bit',
							summary: 'The most basic representation of data—a zero or one—at the physical layer of the OSI model.',
						},
						{
							term: 'Byte',
							summary: 'A unit of digital information that most commonly consists of eight bits.',
						},
						{
							term: 'Checksum',
							summary: 'A calculated value representing the sum of data elements, later used to detect errors when the data is stored or transmitted.',
						},
						{
							term: 'Ciphertext',
							summary: 'The transformed form of plaintext that is unreadable to anyone except the intended recipients who have the right key.',
						},
						{
							term: 'Cryptanalyst',
							summary: 'A specialist who performs cryptanalysis—studying methods to break cryptographic techniques or uncover weaknesses in their implementation.',
						},
						{
							term: 'Cryptography',
							summary: 'The study and application of methods for securing the meaning and content of information through disguise, obfuscation, or other transformations.',
						},
						{
							term: 'Data Integrity',
							summary: 'The property that data has not been altered in an unauthorized manner—whether at rest, in processing, or in transit.',
							notes: 'Source: NIST SP 800-27 Rev. A.',
						},
						{
							term: 'Degaussing',
							summary: 'A data-erasure technique for magnetic media that removes residual magnetism so information cannot be reconstructed.',
						},
						{
							term: 'Decryption',
							summary: 'The reverse of encryption: converting ciphertext back to plaintext using the appropriate algorithm and key.',
						},
						{
							term: 'Digital Signature',
							summary: 'A cryptographic transformation that, when implemented correctly, provides origin authentication, data integrity, and signer non-repudiation.',
							notes: 'Source: NIST SP 800-12 Rev.1.',
						},
						{
							term: 'Integrity',
							summary: 'The property that information remains complete, accurate, internally consistent, and fit for its intended purpose.',
						},
						{
							term: 'Encrypt',
							summary: 'To protect information by converting it to a form that only authorized parties can read.',
						},
						{
							term: 'Encryption',
							summary: 'The act of converting plaintext into ciphertext—also referred to as enciphering.',
						},
						{
							term: 'Encryption System',
							summary: 'The complete set of algorithms, processes, hardware, software, and procedures that provide encryption and decryption capabilities.',
						},
						{
							term: 'Message Digest',
							summary: 'A digital fingerprint that uniquely identifies data and changes completely if even a single bit is altered.',
							notes: 'Source: NISTIR 8011 Vol.3.',
						},
						{
							term: 'Payment Card Industry Data Security Standard (PCI DSS)',
							summary: 'An information security standard for merchants and service providers processing payment cards.',
						},
						{
							term: 'Personally Identifiable Information (PII)',
							summary: 'Any information that can distinguish or trace an individual’s identity, or is linked or linkable to them.',
							notes: 'Source: NIST SP 800-122.',
						},
						{
							term: 'Plaintext',
							summary: 'Data in its natural, readable form—highly vulnerable from a confidentiality standpoint.',
						},
						{
							term: 'Privacy',
							summary: 'An individual’s right to control how information about them is distributed.',
						},
						{
							term: 'Protected Health Information (PHI)',
							summary: 'Health status, care, or payment information as defined under HIPAA.',
						},
						{
							term: 'Symmetric Encryption',
							summary: 'An algorithm that uses the same key to both encrypt and decrypt data.',
						},
						{
							term: 'System Integrity',
							summary: 'The quality of a system that performs its intended function without unauthorized manipulation—intentional or accidental.',
							notes: 'Source: NIST SP 800-27 Rev. A.',
						},
					],
				},
				{
					category: 'Modern Engineering',
					description: 'Engineering practices that balance product quality with a strong security posture.',
					items: [
						{
							term: 'Secure SDLC',
							summary: 'A development approach that embeds security checks in every phase—from discovery through maintenance.',
						},
						{
							term: 'Observability',
							summary: 'The ability to understand system health through logs, metrics, and traces so anomalies surface quickly.',
						},
						{
							term: 'Chaos Engineering',
							summary: 'Controlled experiments that stress systems with real-world failures to improve resilience.',
						},
						{
							term: 'Operating System',
							summary: 'The “master control” software whose kernel stays in memory, setting standards for applications and handling user interaction and file management.',
							notes: 'Source: NIST SP 800-44 Version 2.',
						},
						{
							term: 'Patch',
							summary: 'A software component that modifies related files or settings to fix issues without changing version or release identifiers.',
							notes: 'Source: ISO/IEC 19770-2.',
						},
						{
							term: 'Patch Management',
							summary: 'The systematic notification, identification, deployment, installation, and verification of operating system and application code revisions.',
							notes: 'Source: CNSSI 4009.',
						},
						{
							term: 'Software',
							summary: 'Computer programs and associated data that can be dynamically written or modified during execution.',
							notes: 'Source: NIST SP 800-37 Rev.2.',
						},
						{
							term: 'State',
							summary: 'The condition an entity is in at a specific point in time.',
						},
						{
							term: 'Unix',
							summary: 'An operating system commonly used in software development and network services.',
						},
					],
				},
			],
		},
		learningJourney: {
			meta: {
				title: 'Journal — MasHer',
				description: 'A personal journal capturing my study notes and experiments while exploring new disciplines.',
			},
			title: 'Journal',
			intro:
				'A living notebook where I capture study routines, reading takeaways, and technical experiments I am currently exploring.',
			timelineLabel: 'Learning journal highlights from recent months',
			readLabel: 'Read note',
			upcomingLabel: 'Coming soon',
			backLabel: 'Back to home',
			articles: [
				{
					year: 'Cyber Security Study (October 2025)',
					title: 'Belajar Cyber Security ISC2',
					summary:
						'Key takeaways and lab exercises I collected while studying the ISC2 curriculum and building my own practice environment.',
					topics: ['Cyber security', 'Certification', 'Study journal'],
					link: null,
				},
				{
					year: 'Rust Web Assembly (November 2025)',
					title: 'Rust Web Assembly (soon)',
					summary:
						'Planning notes and small experiments for building interactive WebAssembly components with Rust.',
					topics: ['Rust', 'WebAssembly', 'Experiment'],
					link: null,
				},
				{
					year: 'Implementing MCP (December 2025)',
					title: 'Implementasi MCP (soon)',
					summary:
						'Working outline and example snippets as I try Model Context Protocol to orchestrate agents and tooling.',
					topics: ['MCP', 'Agents', 'Architecture'],
					link: null,
				},
			],
		},
	},
};

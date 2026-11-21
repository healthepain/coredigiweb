
import {
    ArrowUpRight,
    ArrowRight,
    CalendarDays,
    Clock,
    MapPin,
    TrendingUp,
    Megaphone,
    ShoppingBag,
    Rocket,
    CheckCircle2,
    Menu,
    X,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const events = [
        {
            title: "Membership Mahir Digital 1 Tahun",
            category: "ECOURSE",
            date: "1 tahun akses",
            time: "Akses 24/7",
            location: "Online & Offline",
            price: "Rp 1.295.000",
            link: "https://member.mahirdigital.id/lp?aff=basigd34&i=3",
            description:
                "Video courses terstruktur & mudah dipahami, Konsultasi via WA grup (dengan 4 mentor praktisi), Kelas OFFLINE RUTIN → 1 bulan sekali (Fasilitas Tambahan)",
            image:
                "https://mahirdigital.id/wp-content/uploads/2025/02/photo_6123011562110304997_y.jpg",
            featured: true,
        },
        {
            title: "Membership Mahir Digital 6 Bulan",
            category: "ECOURSE",
            date: "6 bulan akses",
            time: "Akses 24/7",
            location: "Online & Offline",
            price: "Rp 895.000",
            link: "https://member.mahirdigital.id/lp?aff=basigd34&i=10",
            description:
                "Video courses terstruktur & mudah dipahami, Konsultasi via WA grup (dengan 4 mentor praktisi), Kelas OFFLINE RUTIN → 1 bulan sekali (Fasilitas Tambahan)",
            image:
                "https://mahirdigital.id/wp-content/uploads/2025/02/photo_6140987971634052612_y-1080x810.jpg",
            featured: false,
        },
        {
            title: "Workshop Membuat Website Hitungan Menit dengan AI",
            category: "WORKSHOP",
            date: "Coming Soon",
            time: "Coming Soon",
            location: "Jagakarsa, Jakarta Selatan",
            price: "Rp 299.000",
            link: "#",
            description:
                "Anda akan dibimbing langsung dari nol sampai landing page Anda benar-benar jadi dan siap digunakan untuk bisnis, dengan bantuan teknologi AI.",
            image:
                "https://mahirdigital.id/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-20.37.55_b62cc697-1080x810.jpg",
            featured: false,
        },
    ];

    const benefits = [
        {
            icon: TrendingUp,
            title: "Strategi Digital Marketing",
            description:
                "Memahami strategi pemasaran digital yang relevan dengan perkembangan bisnis saat ini.",
        },
        {
            icon: ShoppingBag,
            title: "Menemukan Produk Potensial",
            description:
                "Belajar menentukan produk dan peluang bisnis yang memiliki potensi pasar.",
        },
        {
            icon: Megaphone,
            title: "Traffic & Advertising",
            description:
                "Mempelajari cara mendapatkan traffic melalui strategi organik maupun berbayar.",
        },
        {
            icon: Rocket,
            title: "Mulai dari Nol",
            description:
                "Belajar membangun bisnis digital meskipun belum memiliki produk atau pengalaman.",
        },
    ];

    return (
        <>
            <Helmet>
                {/* SEO */}
                <title>
                    Core Digital Marketing | Belajar Digital Marketing & Bisnis Online
                </title>

                <meta
                    name="description"
                    content="Core Digital Marketing adalah ruang belajar digital marketing dan bisnis online. Ikuti workshop, pelajari strategi pemasaran digital, dan kembangkan skill bisnis Anda."
                />

                <meta
                    name="keywords"
                    content="digital marketing, bisnis online, workshop digital marketing, belajar marketing, Core Digital Marketing"
                />

                <meta name="author" content="Core Digital Marketing" />

                <link
                    rel="canonical"
                    href="https://coredigi.web.id/"
                />

                {/* FAVICON */}
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/favicon.svg"
                />

                <link
                    rel="apple-touch-icon"
                    href="/favicon.svg"
                />

                {/* OPEN GRAPH */}
                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content="Core Digital Marketing | Belajar Digital Marketing & Bisnis Online"
                />

                <meta
                    property="og:description"
                    content="Belajar digital marketing, strategi bisnis online, dan kembangkan skill Anda bersama Core Digital Marketing."
                />

                <meta
                    property="og:url"
                    content="https://coredigi.web.id/"
                />

                <meta
                    property="og:site_name"
                    content="Core Digital Marketing"
                />

                <meta
                    property="og:image"
                    content="https://coredigi.web.id/og-image.webp"
                />

                <meta
                    property="og:image:width"
                    content="1200"
                />

                <meta
                    property="og:image:height"
                    content="630"
                />

                <meta
                    property="og:image:alt"
                    content="Core Digital Marketing - Learn, Grow, Build"
                />

                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Core Digital Marketing"
                />

                <meta
                    name="twitter:description"
                    content="Belajar digital marketing dan bisnis online bersama Core Digital Marketing."
                />

                <meta
                    name="twitter:image"
                    content="https://coredigi.web.id/og-image.webp"
                />
            </Helmet>


            <div className="min-h-screen bg-[#f8fafc] text-[#0b2341]">
                {/* NAVBAR */}
                <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                        {/* LOGO */}
                        <a href="#" className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b2341] text-yellow-400">
                                <TrendingUp size={25} />
                            </div>

                            <div>
                                <h1 className="text-xl font-extrabold tracking-tight">
                                    Core<span className="text-blue-600">Digital</span>
                                </h1>
                                <p className="text-[10px] font-medium tracking-[0.2em] text-slate-500">
                                    DIGITAL MARKETING
                                </p>
                            </div>
                        </a>

                        {/* DESKTOP MENU */}
                        <div className="hidden items-center gap-8 md:flex">
                            <a
                                href="#home"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Home
                            </a>

                            <a
                                href="#events"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Events
                            </a>

                            <a
                                href="#about"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Tentang Kami
                            </a>

                            <a
                                href="#benefits"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Program
                            </a>
                        </div>

                        {/* CTA */}
                        <a
                            href="#events"
                            className="hidden items-center gap-2 rounded-full bg-[#0b2341] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 md:flex"
                        >
                            Lihat Event
                            <ArrowUpRight size={17} />
                        </a>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="rounded-lg p-2 md:hidden"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    {menuOpen && (
                        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
                            <div className="flex flex-col gap-4">
                                <a href="#home" onClick={() => setMenuOpen(false)}>
                                    Home
                                </a>
                                <a href="#events" onClick={() => setMenuOpen(false)}>
                                    Events
                                </a>
                                <a href="#about" onClick={() => setMenuOpen(false)}>
                                    Tentang Kami
                                </a>
                                <a href="#benefits" onClick={() => setMenuOpen(false)}>
                                    Program
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* HERO SECTION */}
                <section
                    id="home"
                    className="relative overflow-hidden bg-[#0b2341]"
                >
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
                        {/* LEFT */}
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                                Empower Your Digital Journey
                            </div>

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                                Bangun Bisnis
                                <span className="block text-yellow-400">
                                    di Era Digital
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                                Belajar digital marketing, memahami peluang bisnis
                                online, dan mengembangkan skill yang relevan untuk
                                menghadapi dunia digital.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#events"
                                    className="flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-[#0b2341] transition hover:bg-yellow-300"
                                >
                                    Jelajahi Event
                                    <ArrowRight size={20} />
                                </a>

                                <a
                                    href="#about"
                                    className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Tentang Kami
                                </a>
                            </div>

                            {/* STATS */}
                            <div className="mt-12 flex flex-wrap gap-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        Practical
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Belajar langsung
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        Beginner
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Ramah pemula
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        Community
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Networking
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                                    alt="Workshop digital marketing"
                                    className="h-[400px] w-full rounded-2xl object-cover md:h-[500px]"
                                />

                                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-[#0b2341]">
                                            <CalendarDays size={28} />
                                        </div>

                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Upcoming Workshop
                                            </p>
                                            <h3 className="text-lg font-bold text-[#0b2341]">
                                                Belajar Bisnis Online
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            13.00 - 16.00 WIB
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            Cirebon
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-5 -top-5 hidden rounded-2xl bg-yellow-400 px-5 py-4 shadow-xl sm:block">
                                <p className="text-sm font-medium text-[#0b2341]">
                                    Learn
                                </p>
                                <p className="text-xl font-extrabold text-[#0b2341]">
                                    Grow & Build
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EVENTS */}
                <section id="events" className="px-6 py-24 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <span className="font-semibold uppercase tracking-widest text-blue-600">
                                    Our Events
                                </span>

                                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
                                    Temukan Event
                                    <span className="text-blue-600"> Berikutnya</span>
                                </h2>

                                <p className="mt-4 max-w-xl text-slate-600">
                                    Ikuti workshop, pelajari strategi baru, dan
                                    kembangkan kemampuan digital marketing Anda.
                                </p>
                            </div>

                            <a
                                href="#events"
                                className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                            >
                                Semua Event
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        {/* EVENT CARDS */}
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    {/* IMAGE */}
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute left-5 top-5 rounded-full bg-[#0b2341] px-4 py-2 text-xs font-bold tracking-wide text-white">
                                            {event.category}
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold leading-snug">
                                            {event.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                            {event.description}
                                        </p>

                                        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
                                            <div className="flex items-center gap-3">
                                                <CalendarDays
                                                    size={18}
                                                    className="text-blue-600"
                                                />
                                                {event.date}
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <Clock
                                                    size={18}
                                                    className="text-blue-600"
                                                />
                                                {event.time}
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <MapPin
                                                    size={18}
                                                    className="text-blue-600"
                                                />
                                                {event.location}
                                            </div>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-6 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Investasi
                                                </p>

                                                <h4 className="text-xl font-extrabold text-[#0b2341]">
                                                    {event.price}
                                                </h4>
                                            </div>

                                            <a
                                                href={event.link}
                                                className="flex items-center gap-2 rounded-full bg-[#0b2341] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                                            >
                                                Daftar
                                                <ArrowUpRight size={17} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section
                    id="about"
                    className="bg-white px-6 py-24 lg:px-8"
                >
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                                alt="Kolaborasi tim"
                                className="h-[450px] w-full rounded-3xl object-cover"
                            />

                            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-yellow-400 p-6 shadow-xl sm:block">
                                <p className="text-3xl font-extrabold text-[#0b2341]">
                                    CORE
                                </p>
                                <p className="font-semibold text-[#0b2341]">
                                    Learn. Grow. Build.
                                </p>
                            </div>
                        </div>

                        <div>
                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                About Core Digital
                            </span>

                            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                                Belajar Digital Marketing
                                <span className="text-blue-600">
                                    {" "}Dengan Cara yang Praktis
                                </span>
                            </h2>

                            <p className="mt-6 leading-relaxed text-slate-600">
                                Core Digital Marketing hadir sebagai ruang belajar
                                untuk mengenal, memahami, dan mengembangkan kemampuan
                                digital marketing serta bisnis online.
                            </p>

                            <p className="mt-4 leading-relaxed text-slate-600">
                                Kami percaya bahwa belajar digital marketing tidak
                                harus rumit. Dengan pendekatan yang praktis,
                                pembelajaran, dan diskusi langsung, siapa pun dapat
                                mulai membangun perjalanan digitalnya.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Materi relevan dengan perkembangan digital",
                                    "Belajar langsung dari praktik",
                                    "Networking dan diskusi komunitas",
                                    "Cocok untuk pemula",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2
                                            size={22}
                                            className="shrink-0 text-blue-600"
                                        />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS */}
                <section
                    id="benefits"
                    className="px-6 py-24 lg:px-8"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto mb-16 max-w-2xl text-center">
                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                What You'll Learn
                            </span>

                            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                                Skill yang Bisa
                                <span className="text-blue-600">
                                    {" "}Anda Kembangkan
                                </span>
                            </h2>

                            <p className="mt-5 text-slate-600">
                                Mulai dari memahami dasar hingga mengenal berbagai
                                strategi yang dapat diterapkan dalam bisnis digital.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;

                                return (
                                    <div
                                        key={index}
                                        className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="mt-6 text-lg font-bold">
                                            {benefit.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 pb-24 lg:px-8">
                    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b2341] px-8 py-16 text-center md:px-16">
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

                        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

                        <div className="relative">
                            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                                Saatnya Mulai
                                <span className="block text-yellow-400">
                                    Perjalanan Digital Anda
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-slate-300">
                                Jangan hanya menjadi penonton perkembangan digital.
                                Mulai belajar, membangun skill, dan menemukan
                                peluang baru bersama Core Digital Marketing.
                            </p>

                            <a
                                href="#events"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-bold text-[#0b2341] transition hover:bg-yellow-300"
                            >
                                Temukan Event
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-8">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-xl font-extrabold">
                                Core<span className="text-blue-600">Digital</span>
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Learn. Grow. Build.
                            </p>
                        </div>

                        <div className="text-sm text-slate-500">
                            © {new Date().getFullYear()} Core Digital Marketing.
                            All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default HomePage;

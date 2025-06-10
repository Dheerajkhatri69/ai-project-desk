'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/* Slide Data */
const slides = [
    {
        tag: 'REPORT',
        headline: 'A data-driven look at the future of construction.',
        body: 'Download the Future State of Construction report to see what trends will shape the next decade of construction.',
        cta: 'Read Now',
        img: '/report.jpg',
        imgBg: '/reportbg.jpg',
    },
    {
        tag: 'AWARDS 25',
        headline: 'Calling all construction game-changers.',
        body: 'Compete for top honors among the visionaries shaping the future of projects that connect our world.',
        cta: 'Submit Today',
        img: '/awards.jpg',
        imgBg: '/awardsbg.jpg',
    },
    {
        tag: 'INSIGHTS',
        headline: '5 cost-saving tactics every GC should know.',
        body: 'Learn proven techniques to keep your budgets under control without compromising quality or safety.',
        cta: 'Get the Guide',
        img: '/guide.jpg',
        imgBg: '/guidebg.jpg',
    },
];

export default function LoginPage() {
    const [idx, setIdx] = useState(0);
    const next = () => setIdx((idx + 1) % slides.length);
    const prev = () => setIdx((idx - 1 + slides.length) % slides.length);
    const s = slides[idx];

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [err, setErr] = useState('');

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push('/dashboard');
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* LEFT: Carousel (hidden on mobile) */}
            <div
                className="hidden md:flex w-full md:w-1/2 relative bg-cover bg-center text-white items-center justify-center"
                style={{
                    backgroundImage: `url(${s.imgBg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-16 gap-10 text-center md:text-left">
                    <div className="flex-1 space-y-4 lg:max-w-2xl">
                        <p className="text-orange-400 text-xs sm:text-sm uppercase tracking-wide font-medium">
                            {s.tag}
                        </p>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                            {s.headline}
                        </h1>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                            {s.body}
                        </p>
                        <button className="border border-white hover:bg-white hover:text-[#2E3E4E] text-white px-6 py-2 text-sm rounded transition">
                            {s.cta}
                        </button>
                    </div>

                    <div className="flex-1 hidden md:flex justify-center">
                        <img
                            src={s.img}
                            alt=""
                            className="w-full max-w-[300px] xl:max-w-[400px] object-contain max-h-[500px] xl:max-h-[600px] rounded shadow-xl"
                        />
                    </div>
                </div>

                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-white z-20"
                    onClick={prev}
                >
                    &#10094;
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-white z-20"
                    onClick={next}
                >
                    &#10095;
                </button>

                <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`h-2 w-2 rounded-full transition ${i === idx ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT: Login Form */}
            <aside className="w-full md:w-1/2 bg-[#f9fbfd] flex items-center justify-center min-h-screen px-4 py-12">
                <div className="w-full bg-white rounded-xl shadow-lg p-6 relative max-w-sm pt-10 flex flex-col justify-center">
                    {/* Sign In Tab */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#0052CC] text-white px-6 py-2 rounded-t-md text-lg font-semibold z-20">
                        Sign In
                    </div>

                    {/* Logo */}
                    <div className="flex justify-center ">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-28 h-auto object-contain"
                        />
                    </div>

                    {/* Form */}
                    <div className="relative z-10 mt-10 ">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="text-sm text-gray-600 mb-1 block">Username (Email)</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B5E2] outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-600 mb-1 block">Password</label>
                                <input
                                    type="password"
                                    value={pw}
                                    onChange={(e) => setPw(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B5E2] outline-none"
                                    required
                                />
                            </div>

                            <div className="flex justify-between text-sm text-gray-600">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Remember Me
                                </label>
                                <a href="#" className="text-[#00B5E2] hover:underline font-medium">Forgot Password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FF6A00] hover:bg-[#e65c00] text-white py-2 rounded-md font-semibold"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </aside>
        </div>
    );
}

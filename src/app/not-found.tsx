import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-[150px] sm:text-[200px] font-bold leading-none bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
                        404
                    </h1>
                </div>

                {/* Message */}
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/portfolio"
                        className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        View Portfolio
                    </Link>
                </div>

                {/* Decorative element */}
                <div className="mt-16 flex justify-center gap-2 opacity-30">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    )
}

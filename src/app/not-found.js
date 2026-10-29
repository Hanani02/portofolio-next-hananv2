import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-extrabold text-utama dark:text-sky-200">404</h1>
            <p className="mt-3 text-xl font-semibold text-gray-700 dark:text-gray-300">
                Halaman Tidak Ditemukan
            </p>
            <p className="mt-1 text-sm text-gray-500">
                Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
            </p>
            <Link
                href="/"
                className="mt-6 rounded-lg bg-utama px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
                Kembali ke Beranda
            </Link>
        </main>
    );
}
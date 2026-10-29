export default function Footer() {
    return (
        <footer className="mt-auto w-full bg-utama py-6 text-white text-center">
            <div className="mx-auto max-w-5xl px-4">
                <p className="text-sm font-medium">
                    © {new Date().getFullYear()} Muhammad Akbar Hanani. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

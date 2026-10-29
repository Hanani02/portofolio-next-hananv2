import FormKontak from "@/components/FormKontak";

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 grid gap-2">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
            <p className="text-md">Punya pertayaan atau ingin bertanya? Hubungi saya dengan mengisi form dibawah!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100">
                    <FormKontak />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 min-h-[300px]">
                    <h2 className="text-xl text-base font-bold text-utama dark:text-sky-200 mb-3">
                        Temukan Saya di
                    </h2>
                    <div className="space-y-1 text-xs">
                        <div>
                            <a href="https://github.com/Hanani02" target="_blank" rel="noreferrer" className="text-rose-600 hover:underline text-md">
                                Github
                            </a>
                        </div>
                        <div>
                            <a href="mailto: akbarhanani02@gmail.com" className="text-rose-600 hover:underline text-md">
                                akbarhanani02@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
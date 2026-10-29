export default function Kontak () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 grid gap-2">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
            <p className="text-md">Punya pertayaan atau ingin bertanya? Hubungi saya dengan mengisi form dibawah!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <form className="space-y-4">
                    <div>
                    <label htmlFor="nama" className="block font-semibold">
                        Nama Lengkap
                    </label>
                    <input 
                        type="text"
                        id="nama"
                        name="nama"
                        placeholder="Contoh: Angga Saputra"
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"/>
                    </div>
                    <div>
                    <label htmlFor="email" className="block font-semibold">
                        Email
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Contoh: user@gmail.com"
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"/>
                    </div>
                    <div>
                    <label htmlFor="nohp" className="block font-semibold">
                        Nomor HP
                    </label>
                    <input 
                        type="tel"
                        id="nohp"
                        name="nomorhp"
                        placeholder="Contoh: +62 xxx-xxx-xxx"
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"/>
                    </div>
                    <div>
                    <label htmlFor="keperluan" className="block font-semibold">
                        Keperluan
                    </label>
                    <select 
                        defaultValue=""
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                        <option value="" disabled>-- Pilih Kepreluar --</option>
                        <option value="kerjasama" >Kerja sama</option>
                        <option value="tanya" >Bertanya</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="pesan" className="block font-semibold">
                        Pesan
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Tulis pesanmu di sini"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder-gray-400 resize-y"
                    />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-aksen hover:bg-red-800 text-white text-xs font-bold px-4 py-2.5 rounded-md transition duration-150"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </form>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 min-h-[300px]">
                    <h2 className="text-xl text-base font-bold text-utama mb-3">
                        Temukan Saya di
                    </h2>
                    <div className="space-y-1 text-xs">
                        <div>
                            <a href="https://github.com/Hanani02" target="_blank" rel="noreferrer" className="text-rose-600 hover:underline text-md">
                                Github
                            </a>
                        </div>
                        <div>
                            <a href="mailto:akbarhanani02@gmail.com" className="text-rose-600 hover:underline text-md">
                                akbarhanani02@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
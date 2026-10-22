const daftarJadwal = [
    { hari: "Senin", waktu: "15.00 - 17.00", kegiatan: "Belajar Next.js & Tailwind" },
    { hari: "Rabu", waktu: "16.00 - 18.00", kegiatan: "Latihan Logika JavaScript" },
    { hari: "Kamis", waktu: "19.00 - 21.00", kegiatan: "Eksplorasi Pembuatan Game" },
];

export default function Jadwal() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm grid gap-4">
            <h3 className="text-2xl text-utama font-bold">
                Jadwal Belajar
            </h3>

            <div className="w-full">
                <div className="grid grid-cols-12 pb-2 border-b border-gray-200 font-bold text-white text-sm md:text-base bg-utama p-2">
                    <p className="col-span-3">Hari</p>
                    <p className="col-span-4">Waktu</p>
                    <p className="col-span-5">Kegiatan</p>
                </div>

                <div className="divide-y divide-gray-100">
                    {daftarJadwal.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 py-3 text-sm text-gray-700 items-center">
                            <p className="col-span-3 font-semibold text-gray-800">{item.hari}</p>
                            <p className="col-span-4">{item.waktu}</p>
                            <p className="col-span-5">{item.kegiatan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

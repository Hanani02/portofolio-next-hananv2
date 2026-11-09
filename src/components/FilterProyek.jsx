'use client'

import ProyekCard from "./ProyekCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.js"];
const tombolBiasa = "rounded-full border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer";
const tombolAktif = "rounded-full border border-aksen bg-aksen text-white dark:border-sky-200 dark:bg-sky-200 dark:text-gray-900 px-4 py-1 text-sm font-semibold shadow-sm transition-colors cursor-pointer";


export default function FilterProyek({ proyek }) {
    const [kata, setKata] = useState("");
    const [kategori, setKategori] = useState("Semua");
    console.log("FilterProyek digambar, kategori =", kategori);
    const kataKecil = kata.toLowerCase();
    const hasil = proyek.filter((p) => {
        const cocokKategori = kategori === "Semua" || p.kategori === kategori;
        const cocokJudul = p.judul.toLowerCase().includes(kataKecil);
        const cocokDeskripsi = p.deskripsi.toLowerCase().includes(kataKecil);
        const cocokKata = cocokJudul || cocokDeskripsi;
        return cocokKategori && cocokKata
    });

    return (
        <div className="mt-8" >
            <div className="flex flex-wrap gap-2">
                {daftarKategori.map((k) => (
                    <Button key={k} variant={kategori === k ? "default" : "outline"} onClick={() => setKategori(k)}>
                        {k}
                    </Button>
                ))}
            </div>
            <div className="mt-6">
                <label htmlFor="cari" className="block font-semibold">
                    Cari Proyek
                </label>
                <input
                    type="text"
                    id="cari"
                    value={kata}
                    onChange={(e) => setKata(e.target.value)}
                    placeholder="Contoh: Kalkulator"
                    className="mt-1 w-full rounded-lg border border-input bg-card p-2 md:w-80"
                />
                {kata !== "" && (
                    <Button variant="link" onClick={() => setKata("")} className="mt-2 px-0 text-aksen">
                        Hapus Pencarian
                    </Button>
                )}

                <p className="mt-4 text-sm text-muted-foreground">
                    Menampilkan {hasil.length} dari {proyek.length} proyek
                </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {hasil.map((item) => (
                    <ProyekCard key={item.slug} proyek={item} />
                ))}
            </div>
            {hasil.length === 0 && (
                <p className="mt-6 rounded-xl border border-dashed border-input p-6 text-center text-gray-700 dark:text-gray-400">
                    Belum ada yang cocok
                </p>
            )}
        </div>
    )
}
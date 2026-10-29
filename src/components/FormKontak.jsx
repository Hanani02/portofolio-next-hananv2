'use client';

import { useState } from "react";
const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [hp, setHp] = useState("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});
    const [berhasil, setBerhasil] = useState(false);

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }
        if (!email.includes("@")) {
            errorBaru.email = "Email harus diisi dengan tanda @, contoh nama@gmail.com";
        }
        if (hp.trim() === "") {
            errorBaru.hp = "Nomor HP wajib di isi.";
        }
        if (keperluan === "") {
            errorBaru.keperluan = "Pilih keperluan anda.";
        }
        if (pesan.trim() === "") {
            errorBaru.pesan = "Masukkan Pesan!";
        }
        setError(errorBaru);

        if (Object.keys(errorBaru).length === 0) {
            setBerhasil(true);
        } else {
            setBerhasil(false);
        }
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-4">
            <div>
                <label htmlFor="nama" className="block font-semibold">
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Angga Saputra"
                    className={kelasInput} />
                {error.nama && <p className="mt-1 text-sm text-aksen dark:teks-red-300">{error.nama}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contoh: user@gmail.com"
                    className={kelasInput} />
                {error.email && <p className="mt-1 text-sm text-aksen dark:teks-red-300">{error.email}</p>}
            </div>
            <div>
                <label htmlFor="nohp" className="block font-semibold">
                    Nomor HP
                </label>
                <input
                    type="tel"
                    id="nohp"
                    name="nomorhp"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    placeholder="Contoh: +62 xxx-xxx-xxx"
                    className={kelasInput}/>
                    {error.hp && <p className="mt-1 text-sm text-aksen dark:teks-red-300">{error.hp}</p>}
            </div>
            <div>
                <label htmlFor="keperluan" className="block font-semibold">
                    Keperluan
                </label>
                <select
                    id="keperluan"
                    name="keperluan"
                    value={keperluan}
                    onChange={(e) => setKeperluan(e.target.value)}
                    className={kelasInput}
                >
                    <option value="" disabled>-- Pilih Keperluan --</option>
                    <option value="kerjasama" >Kerja sama</option>
                    <option value="tanya" >Bertanya</option>
                    <option value="lainnya">Lainnya</option>
                </select>
                {error.keperluan && <p className="mt-1 text-sm text-aksen dark:teks-red-300">{error.keperluan}</p>}
            </div>
            <div>
                <label htmlFor="pesan" className="block font-semibold">
                    Pesan
                </label>
                <textarea
                    rows={4}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tulis pesanmu di sini"
                    className={kelasInput}
                />
                {error.pesan && <p className="mt-1 text-sm text-aksen dark:teks-red-300">{error.pesan}</p>}
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-aksen hover:bg-red-800 text-white text-xs font-bold px-4 py-2.5 rounded-md transition duration-150"
                >
                    Kirim Pesan
                </button>
            </div>
            {berhasil && (
                <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
                    Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
                </p>
            )}
        </form>
    )
}
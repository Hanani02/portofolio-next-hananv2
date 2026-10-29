import AboutCard from "@/components/AboutCard";
import HobiCard from "@/components/HobiCard";
import CitaCard from "@/components/Cita-CitaCard";
import Jadwal from "@/components/JadwalCard";

export const metadata = {
    title: "Tentang | Hanan",
    desription: "Cerita, hobi, cita-cita, dan jadwal belajar Hanan"
}

export default function Tentang () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 grid gap-2">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Tentang Saya</h1>
            <div className="grid gap-4">
                      <AboutCard/>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <HobiCard/>
                      <CitaCard/>
                      </div>
                      <Jadwal/>
            </div>
        </main>
    )
}
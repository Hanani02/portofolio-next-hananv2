import Hero from '@/components/Hero';
import SkillCard from '@/components/SkillCard';
import AboutCard from '@/components/AboutCard';
import HobiCard from '@/components/HobiCard';
import CitaCard from '@/components/Cita-CitaCard';
import Jadwal from '@/components/JadwalCard';

const skills = [
  {name: "HTML", level:"Menengah"},
  {name: "CSS", level:"Menengah"},
  {name: "GIT and GitHub", level:"Dasar"},
  {name: "Desain poster dengan Canva", level:"Mahir"},
  {name: "JavaScript", level:"dasar"},
]

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Muhammad Akbar Hanani"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas industri UBIG"
      />
      <section className="mt-10">
        <div className="grid gap-4">
          <AboutCard/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <HobiCard/>
          <CitaCard/>
          </div>
            <div className="bg-white rounded-xl gap-2 p-5">
              <h2 className="mb-4 text-2xl font-bold text-utama">
                Keahlian
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
              {skills.map((skill)=>(
                <SkillCard key={skill.name} name={skill.name} level={skill.level}
                />
              ))}
            </div>
          </div>
          <Jadwal/>
        </div>
      </section>
    </main>
  );
}
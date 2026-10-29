import Hero from '@/components/Hero';
import SkillCard from '@/components/SkillCard';
import ProyekCard from '@/components/ProyekCard';
import { proyek } from '@/data/proyek';
import Link from 'next/link';

const skills = [
  {name: "HTML", level:"Menengah"},
  {name: "CSS", level:"Menengah"},
  {name: "GIT and GitHub", level:"Dasar"},
  {name: "Desain poster dengan Canva", level:"Mahir"},
  {name: "JavaScript", level:"dasar"},
]

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Muhammad Akbar Hanani"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas industri UBIG"
      />
      <section className="mt-10">
        <div className="grid gap-4">
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
          <div className="bg-white rounded-xl gap-2 p-5">
              <h2 className='mb-4 text-2xl font-bold text-utama'>Proyek Terbaru</h2>
              <div className='grid gap-6 md:grid-cols-3'>
                {proyekTerbaru.map((item) => (
                  <ProyekCard key={item.slug} proyek={item}/>
                ))}
            </div>
            <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
            Lihat semua proyek
            </Link>
            </div>
        </div>
      </section>
    </main>
  );
}
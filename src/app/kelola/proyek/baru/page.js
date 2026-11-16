import { notFound, redirect } from "next/navigation";
import FormProyek from "@/components/FormProyek";
import { Card, CardContent } from "@/components/ui/card";
import { sudahMasuk } from "@/lib/pin";
import { tambahProyek } from "@/app/kelola/actions";

export const metadata = {
    title: "Ubah Proyek",
};

export default async function lihatProyek() {
    if (!(await sudahMasuk())) {
        redirect("/kelola");
    }

    const proyekKosong = {
        id: "", 
        judul: "", 
        slug: "", 
        kategori: "",
        minggu: "", 
        deskripsi: "", 
        fitur: [], 
        gambar_url: "" 
    };

    
    return (
        <main className="mx-auto w-full max-w-2xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary">
                Ubah Proyek
            </h1>
            <Card className="mt-6">
                <CardContent>
                    <FormProyek aksi={tambahProyek} proyek={proyekKosong} teksTombol="Simpan Proyek" />
                </CardContent>
            </Card>
        </main>
    );
}
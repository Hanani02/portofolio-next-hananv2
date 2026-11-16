'use client';

import { useActionState } from "react";
import TombolKirim from "./TombolKirim";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";


export default function FormProyek({ aksi, proyek, teksTombol }) {
    const [state, formAction] = useActionState(aksi, { proyek });

    return (
        <form action={formAction} className="space-y-4">
            <input type="hidden" name="id" value={proyek?.id || ""} />
            <div className="space-y-2">
                <Label htmlFor="judul">Judul</Label>
                <Input id="judul" name="judul" defaultValue={state?.proyek?.judul || ""} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="slug">Slug (Halaman url proyek)</Label>
                <Input id="slug" name="slug" defaultValue={state?.proyek?.slug || ""} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="kategori">Kategori</Label>
                <Input id="kategori" name="kategori" defaultValue={state?.proyek?.kategori || ""} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="minggu">Minggu</Label>
                <Input id="minggu" name="minggu" defaultValue={state?.proyek?.minggu || ""} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="deskripsi">Deskripsi</Label>
                <Textarea id="deskripsi" name="deskripsi" rows={2} defaultValue={state?.proyek?.deskripsi || ""} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="fitur">Fitur</Label>
                <Textarea 
                    id="fitur" 
                    name="fitur" 
                    rows={3} 
                    defaultValue={Array.isArray(state?.proyek?.fitur) ? state.proyek.fitur.join("\n") : (state?.proyek?.fitur || "")} 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="gambar_url">Gambar</Label>
                <Input id="gambar_url" name="gambar_url" defaultValue={state?.proyek?.gambar_url || ""} />
            </div>
            <TombolKirim teks={teksTombol || "Simpan Proyek"} />
            {state?.error && <p className="text-sm text-aksen">{state.error}</p>}
            {state?.berhasil && <p className="text-sm font-medium text-primary">{state.berhasil}</p>}
        </form>
    )
}

"use client";

import { useActionState } from "react";
import { kirimPesan } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import TombolKirim from "./TombolKirim";
import { toast } from "sonner";

export default function FormBukuTamu() {
    async function kirimDanBeriTahu(stateSebelum, formData) {
        const hasil = await kirimPesan(stateSebelum, formData);
        if (hasil.berhasil) {
            toast.success(hasil.berhasil);
        }
        return hasil;
    }
    const [state, formAction] = useActionState(kirimDanBeriTahu, {});

    return(
        <form action={formAction} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="nama">Nama</Label>
                <Input id="nama" name="nama" defaultValue={state.nama} placeholder="Contoh : Budi"/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="pesan">Pesan</Label>
                <Textarea id="pesan" name="pesan" rows={4} maxLength={300} defaultValue={state.pesan} placeholder="Tulis kesan atau sapaanmu"/>
            </div>
            <TombolKirim teks="Kirim Pesan"/>
            {state.error && <p className="text-sm text-aksen">{state.error}</p>}
            {state.berhasil && <p className="text-sm font-medium text-primary">{state.berhasil}</p>}
        </form>
    )
}
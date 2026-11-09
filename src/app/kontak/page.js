import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 grid gap-2">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
            <p className="text-md">Punya pertayaan atau ingin bertanya? Hubungi saya dengan mengisi form dibawah!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <Card className="md:col-span-2">
                    <CardContent>
                        <FormKontak />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>
                                <a 
                                    href="https://github.com/Hanani02" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-aksen hover:underline"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:akbarhanani02@gmail.com" 
                                    className="text-aksen hover:underline"
                                >
                                    akbarhanani02@gmail.com
                                </a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

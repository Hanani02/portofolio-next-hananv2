export default function CitaCard() {
    return(
        <div className="w-full h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm grid gap-2">
            <h3 className="text-2xl font-bold text-utama">
                Cita-Cita
            </h3>
            <p className="mt-1 text-md text-gray-800">
                <span className="font-bold text-lg">Menjadi Programmer game</span>
                <br/>Cara mencapainya :
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 text-md">
                <li>Memahami Fundamental Pembuatan Game</li>
                <li>Memapelajari C++</li>
                <li>Memperlajari Matematika mengenai game</li>
                <li>Bangun game sederhanan</li>
            </ol>
        </div>
    )
}
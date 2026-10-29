export default function CitaCard() {
    return (
        <div className="w-full h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm grid gap-2">
            <h3 className="text-2xl font-bold text-utama dark:text-sky-200">
                Cita-Cita
            </h3>
            <p className="mt-1 text-md text-gray-800 dark:text-gray-100">
                <span className="font-bold text-lg">Menjadi Programmer game</span>
                <br />Cara mencapainya :
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 text-md">
                <li>Memahami Fundamental Pembuatan Game</li>
                <li>Memapelajari C++</li>
                <li>Memperlajari Matematika mengenai game</li>
                <li>Bangun game sederhanan</li>
            </ol>
        </div>
    )
}
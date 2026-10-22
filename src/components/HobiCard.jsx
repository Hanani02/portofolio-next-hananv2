export default function HobiCard() {
    return(
        <div className="w-full h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm grid gap-4">
            <h3 className="text-2xl font-bold text-utama">
                Hobi
            </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Bermain Bola</li>
                    <li>Bermain Game</li>
                    <li>Belajar</li>
                    <li>Tidur</li>
                </ul>
        </div>
    )
}
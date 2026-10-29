export default function HobiCard() {
    return (
        <div className="w-full h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm grid gap-4">
            <h3 className="text-2xl font-bold text-utama dark:text-sky-200">
                Hobi
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Bermain Bola</li>
                <li>Bermain Game</li>
                <li>Belajar</li>
                <li>Tidur</li>
            </ul>
        </div>
    )
}
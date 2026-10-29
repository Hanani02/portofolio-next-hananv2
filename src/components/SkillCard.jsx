export default function SkillCard({ name, level }) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
            <h3 className="text-lg font-bold text-utama dark:text-sky-200">
                {name}
            </h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                Level: {level}
            </p>
        </div>
    )
}
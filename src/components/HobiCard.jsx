export default function HobiCard() {
    return (
        <div className="w-full h-full 
        rounded-xl border border-border bg-card p-5 shadow-sm grid gap-4">
            <h3 className="text-2xl font-bold text-primary">
                Hobi
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Bermain Bola</li>
                <li>Bermain Game</li>
                <li>Belajar</li>
                <li>Tidur</li>
            </ul>
        </div>
    )
}
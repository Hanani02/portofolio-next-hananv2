import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillCard({ nama, name, level }) {
    const judul = nama || name;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg text-primary text-primary">
                    {judul}
                </CardTitle>
                <Badge variant="outline">Level: {level}</Badge>
            </CardHeader>
        </Card>
    );
}
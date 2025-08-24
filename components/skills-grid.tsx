import { skills } from '@/data/skills';
import { Badge } from '@/components/ui/badge';

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="mb-2 font-semibold capitalize">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

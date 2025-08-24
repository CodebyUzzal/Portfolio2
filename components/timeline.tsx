import { ExperienceItem } from '@/data/experience';

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="space-y-8">
      {items.map((item) => (
        <li key={`${item.company}-${item.start}`}>
          <div className="font-semibold">
            {item.role} • {item.company}
          </div>
          <div className="mb-2 text-sm text-gray-400">
            {item.start} – {item.end}
          </div>
          <ul className="ml-5 list-disc space-y-1 text-sm text-gray-300">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

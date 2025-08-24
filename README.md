# Portfolio

Minimal personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Editing Content
All content lives in `/data` files:

- `data/site.ts` – site meta, navigation, social links.
- `data/projects.ts` – add a project by appending to the `projects` array.
- `data/experience.ts` – timeline items for the experience page.
- `data/skills.ts` – grouped skill tags.

Placeholder assets live in `public/`:
- `public/profile.svg` – replace with your photo.
- `public/resume.txt` – replace with a PDF résumé and update links if needed.

## Customization
### Colors
Plum Elegance shades are defined in `tailwind.config.ts`. Update them and the CSS variables in `styles/globals.css` to change the palette.

### Contact Form
The form posts to `/api/contact`. Provide the following env vars to enable email:

```
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

Without these the form will show a fallback `mailto:` link.

## Development
```
npm install
npm run dev
```

## Static Export
```
npm run build && npm run export
```
The static site is output to `out/` and can be deployed to any static host or Vercel.

## Testing
```
npm run lint
npx playwright test
```

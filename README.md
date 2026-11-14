This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Student registration

The registration form submits directly from the browser to Web3Forms; this project does not use a registration API route or backend. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to the access key from your Web3Forms dashboard before testing submissions. This public access key is sent to the browser as required by Web3Forms.

The form displays success only when Web3Forms confirms the submission. Without a configured key, it displays an unavailable message rather than reporting a successful registration.

## Contact page

The contact form uses the same direct-to-Web3Forms submission utility and access key. Public contact details are maintained in `src/data/contact.ts` and shown on the contact page and footer.

## SEO and legal pages

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin (your verified `https://` domain) so canonical/Open Graph URLs and `sitemap.xml` use the correct host. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used when the explicit value is absent. Until a site URL is configured, `sitemap.xml` contains no absolute URLs and Open Graph image metadata uses the reserved `example.invalid` placeholder base; configure the real domain before deployment.

The privacy policy, Impressum, and terms pages are drafts. Complete every marked placeholder and obtain qualified legal review before launch; the draft content is not legal advice or a claim of compliance. These draft routes are currently excluded from indexing until reviewed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

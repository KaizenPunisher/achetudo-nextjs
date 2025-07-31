# AcheTudo-Javascript

## Estrutura em Node NextJS <br>

Sistema Web Mobile com objetivo de centralizar informações de comercios locais. Visando a facilidade de pesquisa de produtos e serviços em centros comerciais.

//// Esse projeto estou desenvolvendo sozinho do zero, no modo FULLSTACK. ////

\_\_ Biblioteca de ferramentas ou tecnologias instaladas

### (Frontend) Tecnologias

- NextJS - React Framework >>

```
npx create-next-app@15.3.2
```

- TypeScript >> Yes
- ESLint >> Yes
- Tailwind CSS >> Yes
- App Router >> Yes

- Prettier - Plugin para organizar a ordem das classes de CSS do Tailwind >>
  <br>

```
npm install -D prettier prettier-plugin-tailwindcss@0.6.11 prettier@3.5.3
```

OBS: criar arquivo .prettierrc.json -

```
{
"plugins": ["prettier-plugin-tailwindcss"]
}
```

### (Frontend) Tecnologias

- ORM Drizzle: Framework para Mapeamento Objeto-Relacional
- BD Postgree: Banco de Dados Relacional

```
npm i drizzle-orm@0.43.1 pg@8.15.6
```

- Drizzle Kit - Kit para gerenciamento do BD e migrations

```
npm i -D drizzle-kit@0.31.1
```

---

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

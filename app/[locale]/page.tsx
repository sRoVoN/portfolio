// app/[locale]/page.tsx
import Hero from "../components/home/Hero";


export default async function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <Hero />
    </main>
  );
}

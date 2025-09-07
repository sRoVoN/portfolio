// app/[locale]/about/page.tsx

import Intro from "@/app/components/about/Intro";

export default async function aboutPage() {

  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <Intro />
    </main>
  );
}

// app/[locale]/contact/page.tsx

import Contact from "@/app/components/contact/Contact";

export default async function contactPage() {
  return (
    <section className=" text-black dark:text-white py-12 px-6">
      <Contact />
    </section>
  );
}

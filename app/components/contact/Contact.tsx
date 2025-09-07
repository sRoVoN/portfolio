"use client"
// app/components/about/Contact.tsx

import { FaGithub, FaEnvelope,  FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('contact');
    console.log(t("title"));

 return (   
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
        <p className="mb-8">{t("text")}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Email */}
          <a
            href={`mailto:${t("emailValue")}`}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center"
          >
            <FaEnvelope /> {t("emailLabel")}
          </a>

          {/* GitHub */}
          <a
            href={t("githubUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 transition text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center"
          >
            <FaGithub /> {t("githubLabel")}
          </a>
          {/* {Linkdin} */}
           <a
            href={t("linkdinUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center"
          >
            <FaLinkedin /> {t("linkdinLabel")}
          </a>
        </div>
      </div>
  );
};

export default Contact;


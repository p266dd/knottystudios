import { use } from "react";
// import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  // const t = useTranslations("IndexPage");

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

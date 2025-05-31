// import { getTranslations } from "next-intl/server";
// import {useTranslations} from 'next-intl'; ** For client components.
import Hero from "@/components/hero";

export default function HomePage() {
  // const t = await getTranslations("HomePage");
  return (
    <div>
      <Hero />
    </div>
  );
}

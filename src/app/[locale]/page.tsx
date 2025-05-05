import { getTranslations } from 'next-intl/server';
// import {useTranslations} from 'next-intl'; ** For client components.
 
export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
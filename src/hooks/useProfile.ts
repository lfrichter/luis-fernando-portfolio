import { useTranslation } from 'react-i18next';
import profilePt from '@/locales/pt/profile.json';
import profileEn from '@/locales/en/profile.json';
import type { IProfile } from '@/types';

export function useProfile(): IProfile {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';

  return (lang === 'pt' ? profilePt : profileEn) as IProfile;
}

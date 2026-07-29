import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import educationDataPt from '@/locales/pt/education_and_certs.json';
import educationDataEn from '@/locales/en/education_and_certs.json';
import type { IEducation, ICertification } from '@/types';

export function useEducationAndCerts() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const data = (lang === 'pt' ? educationDataPt : educationDataEn) as {
    education: IEducation[];
    certifications: ICertification[];
  };

  const categories = useMemo(() => {
    const unique = Array.from(new Set(data.certifications.map((c) => c.category)));
    return ['All', ...unique];
  }, [data]);

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === 'All') return data.certifications;
    return data.certifications.filter((c) => c.category === selectedCategory);
  }, [data, selectedCategory]);

  return {
    education: data.education,
    certifications: filteredCertifications,
    totalCertsCount: data.certifications.length,
    selectedCategory,
    setSelectedCategory,
    categories,
  };
}

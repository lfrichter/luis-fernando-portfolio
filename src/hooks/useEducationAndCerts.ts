import { useState, useMemo } from 'react';
import eduCertsData from '@/data/education_and_certs.json';
import type { IEducation, ICertification } from '@/types';

export function useEducationAndCerts() {
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('All');

  const education = eduCertsData.education as IEducation[];
  const certifications = eduCertsData.certifications as ICertification[];

  const certCategories = useMemo(() => {
    const set = new Set<string>();
    certifications.forEach((cert) => set.add(cert.category));
    return ['All', ...Array.from(set)];
  }, [certifications]);

  const filteredCertifications = useMemo(() => {
    if (selectedCertCategory === 'All') return certifications;
    return certifications.filter(
      (cert) => cert.category === selectedCertCategory
    );
  }, [certifications, selectedCertCategory]);

  return {
    education,
    certifications: filteredCertifications,
    allCertificationsCount: certifications.length,
    selectedCertCategory,
    setSelectedCertCategory,
    certCategories,
  };
}

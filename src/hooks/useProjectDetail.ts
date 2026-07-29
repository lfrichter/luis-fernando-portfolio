import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { IProjectDetail } from '@/types';

// Map of locale and detail key to dynamic imports
const detailModules: Record<string, Record<string, () => Promise<{ default: unknown }>>> = {
  pt: {
    ask_richter: () => import('@/locales/pt/projects_details/ask_richter.json'),
    smart_shorts: () => import('@/locales/pt/projects_details/smart_shorts.json'),
    canaoaves: () => import('@/locales/pt/projects_details/canaoaves.json'),
    eupizza: () => import('@/locales/pt/projects_details/eupizza.json'),
    sdlc_ia: () => import('@/locales/pt/projects_details/sdlc_ia.json'),
    spider_hub: () => import('@/locales/pt/projects_details/spider_hub.json'),
    toot: () => import('@/locales/pt/projects_details/toot.json'),
    shosales: () => import('@/locales/pt/projects_details/shosales.json'),
    favorite_products: () => import('@/locales/pt/projects_details/favorite_products.json'),
    onepush: () => import('@/locales/pt/projects_details/onepush.json'),
    semantic_cache: () => import('@/locales/pt/projects_details/semantic_cache.json'),
    pyspark: () => import('@/locales/pt/projects_details/pyspark.json'),
    postmark_email: () => import('@/locales/pt/projects_details/postmark_email.json'),
    ecommerce_k6: () => import('@/locales/pt/projects_details/ecommerce_k6.json'),
    twin_quest: () => import('@/locales/pt/projects_details/twin_quest.json'),
  },
  en: {
    ask_richter: () => import('@/locales/en/projects_details/ask_richter.json'),
    smart_shorts: () => import('@/locales/en/projects_details/smart_shorts.json'),
    canaoaves: () => import('@/locales/pt/projects_details/canaoaves.json'),
    eupizza: () => import('@/locales/en/projects_details/eupizza.json'),
    sdlc_ia: () => import('@/locales/pt/projects_details/sdlc_ia.json'),
    spider_hub: () => import('@/locales/pt/projects_details/spider_hub.json'),
    toot: () => import('@/locales/pt/projects_details/toot.json'),
    shosales: () => import('@/locales/pt/projects_details/shosales.json'),
    favorite_products: () => import('@/locales/pt/projects_details/favorite_products.json'),
    onepush: () => import('@/locales/pt/projects_details/onepush.json'),
    semantic_cache: () => import('@/locales/pt/projects_details/semantic_cache.json'),
    pyspark: () => import('@/locales/pt/projects_details/pyspark.json'),
    postmark_email: () => import('@/locales/pt/projects_details/postmark_email.json'),
    ecommerce_k6: () => import('@/locales/pt/projects_details/ecommerce_k6.json'),
    twin_quest: () => import('@/locales/pt/projects_details/twin_quest.json'),
  },
};

export function useProjectDetail(detailKey: string | null) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';

  const [detail, setDetail] = useState<IProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!detailKey) {
      setDetail(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    const langModules = detailModules[lang] || detailModules.en;
    const loader = langModules[detailKey] || detailModules.pt[detailKey];

    if (!loader) {
      setError(`Detalhes do projeto '${detailKey}' não encontrados.`);
      setIsLoading(false);
      return;
    }

    loader()
      .then((module) => {
        if (isMounted) {
          setDetail(module.default as IProjectDetail);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(
            err instanceof Error
              ? err.message
              : 'Falha ao carregar detalhes do projeto.'
          );
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [detailKey, lang]);

  return { detail, isLoading, error };
}

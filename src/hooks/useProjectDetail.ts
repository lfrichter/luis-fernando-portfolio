import { useState, useEffect } from 'react';
import type { IProjectDetail } from '@/types';

// Map of detail keys to dynamic imports for reliable bundler resolution
const detailModules: Record<string, () => Promise<{ default: unknown }>> = {
  ask_richter: () => import('@/data/projects_details/ask_richter.json'),
  smart_shorts: () => import('@/data/projects_details/smart_shorts.json'),
  canaoaves: () => import('@/data/projects_details/canaoaves.json'),
  eupizza: () => import('@/data/projects_details/eupizza.json'),
  sdlc_ia: () => import('@/data/projects_details/sdlc_ia.json'),
  spider_hub: () => import('@/data/projects_details/spider_hub.json'),
  toot: () => import('@/data/projects_details/toot.json'),
  shosales: () => import('@/data/projects_details/shosales.json'),
  favorite_products: () => import('@/data/projects_details/favorite_products.json'),
  onepush: () => import('@/data/projects_details/onepush.json'),
  semantic_cache: () => import('@/data/projects_details/semantic_cache.json'),
  pyspark: () => import('@/data/projects_details/pyspark.json'),
  postmark_email: () => import('@/data/projects_details/postmark_email.json'),
  ecommerce_k6: () => import('@/data/projects_details/ecommerce_k6.json'),
  twin_quest: () => import('@/data/projects_details/twin_quest.json'),
};

export function useProjectDetail(detailKey: string | null) {
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

    const loader = detailModules[detailKey];
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
  }, [detailKey]);

  return { detail, isLoading, error };
}

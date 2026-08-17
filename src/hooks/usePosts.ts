import { useTranslation } from 'react-i18next';
import ptPosts from '@/locales/pt/posts.json';
import enPosts from '@/locales/en/posts.json';

export type PlatformKey = 'devto' | 'codelegion' | 'linkedin' | 'github';

export interface PostRawData {
  id: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  platforms: Partial<Record<PlatformKey, string>>;
}

export interface PostItem extends PostRawData {
  primaryPlatform: PlatformKey;
  primaryUrl: string;
}

const PLATFORM_PRIORITY: PlatformKey[] = ['devto', 'codelegion', 'linkedin', 'github'];

export function getPrimaryPlatformInfo(platforms: Partial<Record<PlatformKey, string>>): {
  primaryPlatform: PlatformKey;
  primaryUrl: string;
} {
  for (const platform of PLATFORM_PRIORITY) {
    if (platforms[platform]) {
      return {
        primaryPlatform: platform,
        primaryUrl: platforms[platform]!,
      };
    }
  }

  // Fallback to first available entry
  const keys = Object.keys(platforms) as PlatformKey[];
  const fallbackKey = keys[0] || 'linkedin';
  return {
    primaryPlatform: fallbackKey,
    primaryUrl: platforms[fallbackKey] || '',
  };
}

export const usePosts = (): PostItem[] => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'pt';
  const rawPosts: PostRawData[] = currentLang === 'en' ? (enPosts as PostRawData[]) : (ptPosts as PostRawData[]);

  return [...rawPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const { primaryPlatform, primaryUrl } = getPrimaryPlatformInfo(post.platforms);
      return {
        ...post,
        primaryPlatform,
        primaryUrl,
      };
    });
};

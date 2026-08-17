import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePosts, type PlatformKey, type PostItem } from '@/hooks/usePosts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { DevToIcon, CodeLegionIcon, LinkedinIcon, GithubIcon } from '@/components/icons/SocialIcons';
import { ExternalLink, Search, Newspaper, Calendar, Tag, BookOpen } from 'lucide-react';

export const PLATFORM_CONFIG: Record<
  PlatformKey,
  { label: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; badgeStyle: string; primaryBtnStyle: string }
> = {
  devto: {
    label: 'Dev.to',
    icon: DevToIcon,
    badgeStyle: 'bg-zinc-900 dark:bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-800',
    primaryBtnStyle: 'bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 shadow-xs',
  },
  codelegion: {
    label: 'CodeLegion',
    icon: CodeLegionIcon,
    badgeStyle: 'bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20',
    primaryBtnStyle: 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white shadow-xs',
  },
  linkedin: {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    badgeStyle: 'bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30 hover:bg-blue-500/20',
    primaryBtnStyle: 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs',
  },
  github: {
    label: 'GitHub',
    icon: GithubIcon,
    badgeStyle: 'bg-purple-500/10 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30 hover:bg-purple-500/20',
    primaryBtnStyle: 'bg-purple-600 hover:bg-purple-700 text-white shadow-xs',
  },
};

export function formatPostDate(
  dateStr: string,
  lang: string = 'pt',
  referenceDate: Date = new Date()
): {
  display: string;
  fullDate: string;
  isRelative: boolean;
} {
  try {
    const postDate = new Date(`${dateStr}T00:00:00`);
    const isEn = lang.startsWith('en');
    const fullFormatter = new Intl.DateTimeFormat(isEn ? 'en-US' : 'pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const fullDate = fullFormatter.format(postDate);

    // Calculate difference in calendar months
    const yearsDiff = referenceDate.getFullYear() - postDate.getFullYear();
    const monthsDiff = yearsDiff * 12 + (referenceDate.getMonth() - postDate.getMonth());

    // If within 4 months (0, 1, 2, 3 months ago), show stamped full date
    if (monthsDiff < 4) {
      return {
        display: fullDate,
        fullDate,
        isRelative: false,
      };
    }

    // Older than 4 months -> relative display
    let display = '';
    if (monthsDiff < 12) {
      display = isEn ? `${monthsDiff} months ago` : `há ${monthsDiff} meses`;
    } else {
      const years = Math.floor(monthsDiff / 12);
      if (isEn) {
        display = years === 1 ? '1 year ago' : `${years} years ago`;
      } else {
        display = years === 1 ? 'há 1 ano' : `há ${years} anos`;
      }
    }

    return {
      display,
      fullDate,
      isRelative: true,
    };
  } catch {
    return {
      display: dateStr,
      fullDate: dateStr,
      isRelative: false,
    };
  }
}

export const Posts: React.FC = () => {
  const { t, i18n } = useTranslation();
  const posts = usePosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey | 'all'>('all');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesPlatform =
        selectedPlatform === 'all' || Boolean(post.platforms[selectedPlatform]);

      return matchesSearch && matchesPlatform;
    });
  }, [posts, searchTerm, selectedPlatform]);

  return (
    <section className="py-12 bg-background min-h-[60vh]">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="gap-1.5 px-3 py-1 bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30 font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                {t('posts.badge')}
              </Badge>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/80">
                {posts.length} {i18n.language === 'en' ? 'published' : 'publicados'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              {t('posts.title')}
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              {t('posts.subtitle')}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('posts.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs md:text-sm bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Platform Quick Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-semibold text-muted-foreground mr-1">
            {t('posts.filterPlatform')}
          </span>
          <Button
            variant={selectedPlatform === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPlatform('all')}
            className="rounded-lg text-xs h-8 px-3"
          >
            {t('posts.allPlatforms')}
          </Button>
          {(['devto', 'codelegion', 'linkedin'] as PlatformKey[]).map((platform) => {
            const config = PLATFORM_CONFIG[platform];
            const Icon = config.icon;
            const isSelected = selectedPlatform === platform;
            return (
              <Button
                key={platform}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPlatform(platform)}
                className={`rounded-lg text-xs h-8 px-3 gap-1.5 ${
                  isSelected ? '' : 'hover:border-primary/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{config.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Posts Grid/List */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-muted/20 rounded-2xl border border-dashed border-border/80">
            <Newspaper className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
            <h3 className="text-base font-bold text-foreground">{t('posts.emptyTitle')}</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">{t('posts.emptySub')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface PostCardProps {
  post: PostItem;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { t, i18n } = useTranslation();
  const primaryConfig = PLATFORM_CONFIG[post.primaryPlatform];
  const PrimaryIcon = primaryConfig.icon;

  const { display, fullDate } = formatPostDate(post.date, i18n.language);

  const availablePlatforms = (Object.keys(post.platforms) as PlatformKey[]).filter(
    (key) => Boolean(post.platforms[key])
  );

  return (
    <Card className="flex flex-col justify-between h-full bg-card hover:bg-card/95 border-border/80 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 group rounded-2xl overflow-hidden">
      <CardHeader className="p-5 pb-3">
        {/* Top Metadata Bar */}
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Calendar & Date with Tooltip */}
          <div
            className="relative group/date flex items-center gap-1.5 text-xs text-muted-foreground font-mono cursor-help"
            title={fullDate}
          >
            <Calendar className="w-3.5 h-3.5 text-muted-foreground/70 group-hover/date:text-primary transition-colors shrink-0" />
            <time dateTime={post.date}>{display}</time>

            {/* Hover Tooltip showing exact full date */}
            <div className="absolute left-0 -top-8 hidden group-hover/date:flex items-center px-2.5 py-1 bg-popover text-popover-foreground text-[11px] font-sans font-medium rounded-lg shadow-md border border-border/80 whitespace-nowrap z-30 pointer-events-none transition-all">
              {fullDate}
            </div>
          </div>

          {/* Primary badge priority indicator */}
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${primaryConfig.badgeStyle}`}>
            <PrimaryIcon className="w-3 h-3" />
            <span>{primaryConfig.label}</span>
          </span>
        </div>

        {/* Title linked to primary URL */}
        <CardTitle className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
          <a
            href={post.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-hidden"
          >
            {post.title}
          </a>
        </CardTitle>

        <CardDescription className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
          {post.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-0 mt-auto space-y-4">
        {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <Tag className="w-3 h-3 text-muted-foreground/60 shrink-0" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Row: Available platforms badges & Primary Read Button */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-border/50">
          {/* Platforms Available Badges */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-muted-foreground font-medium hidden sm:inline">
              {t('posts.availableOn')}
            </span>
            <div className="flex items-center gap-1">
              {availablePlatforms.map((platformKey) => {
                const url = post.platforms[platformKey];
                if (!url) return null;
                const pConfig = PLATFORM_CONFIG[platformKey];
                const Icon = pConfig.icon;
                return (
                  <a
                    key={platformKey}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ver no ${pConfig.label}`}
                    className={`p-1.5 rounded-md transition-all hover:scale-110 ${pConfig.badgeStyle}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Primary CTA Link */}
          <Button
            asChild
            size="sm"
            className={`gap-1.5 text-xs font-semibold rounded-xl h-8 px-3.5 ${primaryConfig.primaryBtnStyle}`}
          >
            <a href={post.primaryUrl} target="_blank" rel="noopener noreferrer">
              <span>{t('posts.readOn', { platform: primaryConfig.label })}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

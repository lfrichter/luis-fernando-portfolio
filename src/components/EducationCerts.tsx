import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEducationAndCerts } from '@/hooks/useEducationAndCerts';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle2, FileText } from 'lucide-react';

export const EducationCerts: React.FC = () => {
  const { t } = useTranslation();
  const {
    education,
    certifications,
    totalCertsCount,
    selectedCategory,
    setSelectedCategory,
    categories,
  } = useEducationAndCerts();

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
      {/* 1. Academic Education Section */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
              {t('education.academicBadge')}
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" /> {t('education.title')}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu) => (
            <Card key={edu.id} className="border-border/70 bg-card hover:border-primary/50 transition-colors shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Badge variant="secondary" className="text-[11px] mb-1 font-semibold">
                      {edu.degree}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {edu.field}
                    </CardTitle>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline" className="gap-1 text-xs">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework Topics */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                      {t('education.courseworkTitle')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TCC Details Card (if available) */}
                {edu.tccDetails && (
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/80 space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                      <FileText className="w-4 h-4" />
                      <span>{t('education.tccBadge')}</span>
                    </div>
                    <h5 className="text-sm font-bold text-foreground">
                      "{edu.tccDetails.title}"
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {edu.tccDetails.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.tccDetails.competencies.map((comp) => (
                        <Badge key={comp} variant="outline" className="text-[10px] bg-background">
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 2. Certifications Section */}
      <div className="space-y-6 pt-4 border-t border-border/60">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
              {t('education.certsBadge')}
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" /> {t('education.certsTitle')}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t('education.certsSub', { count: totalCertsCount })}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-xs rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="border-border/70 bg-card hover:border-primary/40 transition-colors shadow-xs flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <Badge variant="secondary" className="text-[10px]">
                    {cert.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {cert.issuedDate}
                  </span>
                </div>
                <CardTitle className="text-base font-bold text-foreground">
                  {cert.title}
                </CardTitle>
                <p className="text-xs font-semibold text-primary">
                  {cert.issuer}
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                {cert.skills && (
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-[10px] text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <div className="pt-2">
                    <Button variant="ghost" size="sm" asChild className="text-xs gap-1.5 p-0 h-auto hover:bg-transparent text-primary hover:underline">
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t('education.validateCert')}</span>
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

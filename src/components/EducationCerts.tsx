import React from 'react';
import { useEducationAndCerts } from '@/hooks/useEducationAndCerts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, BookOpen } from 'lucide-react';

export const EducationCerts: React.FC = () => {
  const {
    education,
    certifications,
    allCertificationsCount,
    selectedCertCategory,
    setSelectedCertCategory,
    certCategories,
  } = useEducationAndCerts();

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
      {/* Higher Education Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" /> Formação Acadêmica & Pós-Graduação
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Especialização em Engenharia de Software e Bacharelado em Gestão Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu) => (
            <Card key={edu.id} className="border-border/80 bg-card">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Badge variant="default" className="text-xs mb-2">
                      {edu.degree}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {edu.field}
                    </CardTitle>
                    <div className="text-base font-semibold text-primary mt-1">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="secondary" className="gap-1 text-xs">
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

                {/* Coursework if present */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Disciplinas & Tópicos de Destaque
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-muted/30">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* TCC Details Card if present */}
                {edu.tccDetails && (
                  <Card className="bg-muted/20 border-muted mt-4">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                        <BookOpen className="w-4 h-4" />
                        <span>Trabalho de Conclusão de Curso (TCC de Pós-Graduação)</span>
                      </div>
                      <h5 className="text-sm font-bold text-foreground">
                        {edu.tccDetails.title}
                      </h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {edu.tccDetails.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {edu.tccDetails.competencies.map((comp, idx) => (
                          <Badge key={idx} variant="secondary" className="text-[11px]">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" /> Certificações & Especializações
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Exibindo {certifications.length} de {allCertificationsCount} certificações ativas.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {certCategories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCertCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCertCategory(cat)}
              className="text-xs rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="border-border/70 bg-card hover:border-primary/40 transition-colors">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant="outline" className="text-[10px] mb-1.5">
                      {cert.category}
                    </Badge>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-[11px] shrink-0">
                    {cert.issuedDate}
                  </Badge>
                </div>

                {cert.credentialId && (
                  <div className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </div>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-[10px] bg-muted/40 font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <div className="pt-1">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>Validar Credencial</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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

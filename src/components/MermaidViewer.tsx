import React, { useEffect, useState, useId } from 'react';
import mermaid from 'mermaid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Eye } from 'lucide-react';

interface MermaidViewerProps {
  chart: string;
  title?: string;
}

export const MermaidViewer: React.FC<MermaidViewerProps> = ({ chart, title }) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [viewCode, setViewCode] = useState<boolean>(false);
  const rawId = useId();
  const renderId = `mermaid_svg_${rawId.replace(/[^a-zA-Z0-9]/g, '_')}`;

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      if (!chart) return;
      try {
        const isDark = document.documentElement.classList.contains('dark');
        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'neutral',
          securityLevel: 'loose',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        });

        // Clean chart string input
        const cleanChart = chart.trim();

        // Render mermaid syntax to SVG string
        const { svg } = await mermaid.render(renderId, cleanChart);
        if (isMounted) {
          setSvgContent(svg);
          setHasError(false);
        }
      } catch (err) {
        console.warn('Mermaid render notice:', err);
        if (isMounted) {
          setHasError(true);
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, renderId]);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-900 dark:bg-zinc-950 overflow-hidden shadow-md">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 dark:bg-zinc-900/90 border-b border-slate-800 dark:border-zinc-800 text-xs">
        <span className="font-bold text-slate-200 dark:text-zinc-200">
          {title || 'Microservices & Data Pipeline Topology'}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewCode(!viewCode)}
            className="h-7 text-[11px] gap-1 px-2.5 text-slate-400 hover:text-white hover:bg-slate-800 dark:hover:bg-zinc-800 rounded-lg"
          >
            {viewCode ? <Eye className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
            <span>{viewCode ? 'Ver Diagrama' : 'Ver Código'}</span>
          </Button>
          <Badge variant="outline" className="text-[10px] border-slate-700 dark:border-zinc-700 text-slate-300 dark:text-zinc-300 bg-slate-800/80 dark:bg-zinc-900">
            Mermaid Chart
          </Badge>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 md:p-6 overflow-x-auto min-h-[160px] flex items-center justify-center">
        {viewCode || hasError ? (
          <pre className="w-full text-emerald-400 dark:text-emerald-400 text-xs font-mono font-semibold overflow-x-auto leading-relaxed p-2">
            {chart}
          </pre>
        ) : (
          <div
            className="w-full overflow-x-auto flex justify-center [&_svg]:max-w-full [&_svg]:h-auto text-slate-100 dark:text-zinc-100"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}
      </div>
    </div>
  );
};

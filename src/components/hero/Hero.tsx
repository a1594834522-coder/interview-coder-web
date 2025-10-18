import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import SplitType from 'split-type';
import { ShaderBackground } from '@/components/shader/ShaderBackground';
import { gsap, useGSAP } from '@/lib/gsap';

export interface HeroCTA {
  text: string;
  href: string;
  primary?: boolean;
  onClick?: () => void;
}

export interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: HeroCTA[];
  microDetails?: string[];
}

export function Hero({
  title,
  description,
  badgeText = 'Generative Surfaces',
  badgeLabel = 'New',
  ctaButtons = [
    { text: 'Get started', href: '#get-started', primary: true },
    { text: 'View showcase', href: '#showcase' },
  ],
  microDetails = ['Low‑weight font', 'Tight tracking', 'Subtle motion'],
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const microItemRefs = useRef<HTMLLIElement[]>([]);

  const microItemSetters = useMemo(
    () => {
      microItemRefs.current = [];
      return microDetails.map((_, index) => (node: HTMLLIElement | null) => {
        if (node) {
          microItemRefs.current[index] = node;
        }
      });
    },
    [microDetails],
  );

  useGSAP(
    () => {
      let split: SplitType | null = null;

      const run = () => {
        const heading = headerRef.current;
        if (!heading) return;

        split?.revert();
        split = new SplitType(heading, { types: 'lines' });

        const lines = split.lines ?? [];
        const microItems = microItemRefs.current.filter(Boolean);

        gsap.set(lines, {
          filter: 'blur(16px)',
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: '50% 100%',
        });

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paragraphRef.current) {
          gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (badgeRef.current) {
          timeline.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0);
        }

        timeline.to(
          lines,
          {
            filter: 'blur(0px)',
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
          },
          0.1,
        );

        if (paragraphRef.current) {
          timeline.to(paragraphRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.55');
        }
        if (ctaRef.current) {
          timeline.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35');
        }
        if (microItems.length > 0) {
          timeline.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.25');
        }
      };

      if ('fonts' in document) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => {
        split?.revert();
      };
    },
    {
      scope: sectionRef,
      dependencies: [title, description, badgeText, badgeLabel, ctaButtons, microDetails],
    },
  );

  return (
    <section ref={sectionRef} className="relative h-screen w-screen overflow-hidden">
      <ShaderBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
        </div>

        <h1
          ref={headerRef}
          className="max-w-2xl text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </h1>

        <p
          ref={paragraphRef}
          className="max-w-xl whitespace-pre-line text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg"
        >
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
          {ctaButtons.map((button, index) => {
            const className = `rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
              button.primary
                ? 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                : 'text-white/80 hover:bg-white/5'
            }`;

            // 如果有 onClick 处理函数,使用 button 元素
            if (button.onClick) {
              return (
                <button
                  key={`${button.href}-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    button.onClick?.();
                  }}
                  className={`${className} hover:cursor-pointer`}
                >
                  {button.text}
                </button>
              );
            }

            // 内部路由使用 Link 组件
            if (button.href.startsWith('/')) {
              return (
                <Link key={`${button.href}-${index}`} to={button.href} className={className}>
                  {button.text}
                </Link>
              );
            }

            // 外部链接使用 a 标签
            return (
              <a key={`${button.href}-${index}`} href={button.href} className={className} target="_blank" rel="noopener noreferrer">
                {button.text}
              </a>
            );
          })}
        </div>

        <ul className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60">
          {microDetails.map((detail, index) => (
            <li key={`${detail}-${index}`} ref={microItemSetters[index]} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

export function DownloadSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      const children = Array.from(container.children);

      gsap.set(children, { autoAlpha: 0, y: 20 });

      gsap.to(children, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 2,
      });
    },
    { scope: containerRef },
  );

  const handleDownload = (url: string, filename: string) => {
    // 创建隐藏的 a 标签触发下载
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    // 添加到 DOM,点击,然后移除
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={containerRef}
      id="download"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
    >
      <div className="flex gap-3">
        <button
          onClick={() => handleDownload('http://47.96.89.141:8888/down/GsSdHcd8Ak5V.exe', 'BUZZ-Setup.exe')}
          className="group flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-light text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:cursor-pointer"
        >
          <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Windows 版下载
        </button>
        <button
          onClick={() => handleDownload('http://47.96.89.141:8888/down/qmOt7x56nKqq.dmg', 'BUZZ.dmg')}
          className="group flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-light text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:cursor-pointer"
        >
          <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          macOS 版下载
        </button>
      </div>
      <p className="text-xs font-light tracking-tight text-white/60">
        支持 Windows 10+ 和 macOS 12+ 系统 · 免费版每日 3 次配额
      </p>
    </div>
  );
}

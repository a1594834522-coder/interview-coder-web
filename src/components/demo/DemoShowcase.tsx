import { DownloadSection } from '@/components/download/DownloadSection';
import { Hero } from '@/components/hero/Hero';

export function DemoShowcase() {
  return (
    <div className="relative flex h-screen w-screen flex-col">
      <Hero
        title="Interview Coder"
        description={`专为在线考试设计的AI辅助工具
提供实时题目解析、智能答题建议，助您在笔试中脱颖而出。`}
        badgeText="AI 驱动"
        badgeLabel="最新"
        ctaButtons={[
          {
            text: '立即体验',
            href: 'https://github.com/a1594834522-coder/interview-coder/releases/download/v1.0.20/Interview.Coder-Windows-1.0.19.exe',
            primary: true,
          },
          { text: '查看功能', href: '/features' },
          {
            text: '查看仓库',
            href: 'https://github.com/a1594834522-coder/interview-coder/tree/v1.0.20',
          },
        ]}
        microDetails={['实时解析', '智能建议', '策略优化']}
      />
      <DownloadSection />
    </div>
  );
}

export default DemoShowcase;

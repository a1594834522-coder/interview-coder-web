import { useMemo } from 'react';
import { DownloadSection } from '@/components/download/DownloadSection';
import { Hero } from '@/components/hero/Hero';
import { detectOS } from '@/lib/detectOS';

// 下载链接配置
const DOWNLOAD_LINKS = {
  windows: 'http://47.96.89.141:8888/down/H3NntVlPEqJh.exe',
  macos: 'http://47.96.89.141:8888/down/qmOt7x56nKqq.dmg',
};

const DOWNLOAD_FILENAMES = {
  windows: 'InterviewCoder-Setup.exe',
  macos: 'InterviewCoder.dmg',
};

export function DemoShowcase() {
  // 检测用户操作系统并生成对应的下载链接
  const downloadInfo = useMemo(() => {
    const os = detectOS();

    if (os.type === 'macos') {
      return {
        url: DOWNLOAD_LINKS.macos,
        filename: DOWNLOAD_FILENAMES.macos,
        buttonText: '立即体验 (macOS)',
      };
    }

    // 默认为 Windows (包括 Linux 和 unknown)
    return {
      url: DOWNLOAD_LINKS.windows,
      filename: DOWNLOAD_FILENAMES.windows,
      buttonText: '立即体验 (Windows)',
    };
  }, []);

  // 处理下载按钮点击
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadInfo.url;
    link.download = downloadInfo.filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            text: downloadInfo.buttonText,
            href: '#download',
            primary: true,
            onClick: handleDownload,
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

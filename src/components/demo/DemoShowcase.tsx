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
  windows: 'BUZZ-Setup.exe',
  macos: 'BUZZ.dmg',
};

export function DemoShowcase() {
  // 检测用户操作系统并生成对应的下载链接
  const downloadInfo = useMemo(() => {
    const os = detectOS();

    if (os.type === 'macos') {
      return {
        url: DOWNLOAD_LINKS.macos,
        filename: DOWNLOAD_FILENAMES.macos,
        buttonText: '免费试用 (macOS)',
      };
    }

    // 默认为 Windows (包括 Linux 和 unknown)
    return {
      url: DOWNLOAD_LINKS.windows,
      filename: DOWNLOAD_FILENAMES.windows,
      buttonText: '免费试用 (Windows)',
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
        title="BUZZ"
        description={`AI 驱动的智能辅助工具
适用于在线考试、日常作业、技术面试、科学研究等多种场景。`}
        badgeText="多场景应用 · 激活码制"
        badgeLabel="专业版"
        ctaButtons={[
          {
            text: downloadInfo.buttonText,
            href: '#download',
            primary: true,
            onClick: handleDownload,
          },
          { text: '查看功能', href: '/features' },
          {
            text: '查看定价',
            href: '/pricing',
          },
        ]}
        microDetails={['智能解析', '多场景适配', '本地运行']}
      />
      <DownloadSection />
    </div>
  );
}

export default DemoShowcase;

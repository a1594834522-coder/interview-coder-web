import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contacts = [
    { label: 'QQ', value: '1594834522', icon: '💬', type: 'copy' as const },
    { label: '微信', value: 'Abruzz1', icon: '✉️', type: 'copy' as const },
    { label: '邮箱', value: '1@bu2z.de', icon: '📧', type: 'copy' as const },
    {
      label: '闲鱼',
      value: 'https://m.tb.cn/h.S80gYyA?tk=bVAxfcyd0b7',
      icon: '🐟',
      type: 'link' as const,
      displayValue: '点击打开闲鱼主页'
    },
  ];

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error('复制失败', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-white/20 bg-black/80 p-8 shadow-2xl backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
          aria-label="关闭"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 标题 */}
        <div className="mb-6">
          <h2 className="text-2xl font-light text-white">联系我们</h2>
          <p className="mt-2 text-sm text-white/60">获取激活码或咨询问题，请通过以下方式联系</p>
        </div>

        {/* 联系方式列表 */}
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <p className="text-xs text-white/60">{contact.label}</p>
                    <p className="text-sm text-white">
                      {'displayValue' in contact ? contact.displayValue : contact.value}
                    </p>
                  </div>
                </div>
                {contact.type === 'copy' ? (
                  <button
                    onClick={() => handleCopy(contact.value, contact.label)}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/20"
                  >
                    {copiedField === contact.label ? '已复制' : '复制'}
                  </button>
                ) : (
                  <a
                    href={contact.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/20"
                  >
                    打开
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 提示信息 */}
        <p className="mt-6 text-center text-xs text-white/50">
          点击"复制"按钮可快速复制联系方式
        </p>
      </div>
    </div>
  );
}

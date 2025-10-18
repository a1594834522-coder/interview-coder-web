import { Link } from 'react-router-dom';
import { ShaderBackground } from '@/components/shader/ShaderBackground';

interface PricingTier {
  name: string;
  duration: string;
  price: string;
  dailyQuota: string;
  features: string[];
  recommended?: boolean;
  highlight?: string;
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative rounded-3xl border p-6 shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:scale-105 sm:p-8 ${
        tier.recommended
          ? 'border-white/30 bg-white/10'
          : 'border-white/10 bg-black/40'
      }`}
    >
      {tier.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-light text-white backdrop-blur-sm">
          推荐
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-light text-white">{tier.name}</h3>
          {tier.highlight && (
            <p className="mt-1 text-xs text-white/60">{tier.highlight}</p>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-light text-white">{tier.price}</span>
          <span className="text-sm text-white/60">/ {tier.duration}</span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <p className="text-sm text-white/80">
            每日配额：<span className="font-medium text-white">{tier.dailyQuota}</span>
          </p>
        </div>
        <ul className="space-y-2 text-sm text-white/70">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const freeTier: PricingTier = {
    name: '免费版',
    duration: '永久',
    price: '免费',
    dailyQuota: '3 次',
    features: ['体验产品基础功能', '所有核心功能可用', '本地运行，数据私密'],
  };

  const shortTermTiers: PricingTier[] = [
    {
      name: '1天卡',
      duration: '1天',
      price: '¥5',
      dailyQuota: '30 次',
      features: ['快速体验', '单场面试应急使用'],
    },
    {
      name: '3天卡',
      duration: '3天',
      price: '¥12',
      dailyQuota: '30 次',
      features: ['日均 ¥4', '多场面试短期冲刺'],
    },
    {
      name: '7天卡',
      duration: '7天',
      price: '¥19',
      dailyQuota: '30 次',
      features: ['日均 ¥2.71', '密集面试周期首选'],
      recommended: true,
    },
    {
      name: '14天卡',
      duration: '14天',
      price: '¥29',
      dailyQuota: '40 次',
      features: ['日均 ¥2.07', '面试准备期性价比之选'],
    },
  ];

  const standardTiers: PricingTier[] = [
    {
      name: '月卡',
      duration: '30天',
      price: '¥39',
      dailyQuota: '50 次',
      features: ['日均 ¥1.30', '找工作季专用', '面试+笔试双覆盖'],
    },
    {
      name: '季卡',
      duration: '90天',
      price: '¥99',
      dailyQuota: '50 次',
      features: ['日均 ¥1.10', '春招/秋招全程护航', '兼顾学习科研'],
      recommended: true,
    },
    {
      name: '年卡',
      duration: '365天',
      price: '¥299',
      dailyQuota: '100 次',
      features: ['日均 ¥0.82', '全年求职备战', '超高配额最划算'],
      recommended: true,
    },
  ];

  const premiumTier: PricingTier = {
    name: '终身版',
    duration: '永久',
    price: '¥699',
    dailyQuota: '100 次',
    highlight: '一次购买，永久使用',
    features: [
      '永久使用权',
      '每日 100 次配额',
      '适合求职频繁者/讲师',
      '面试辅导/长期求职',
    ],
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <ShaderBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-24 sm:pt-32 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">pricing</p>
            <h1 className="mt-3 text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              选择适合你的套餐
            </h1>
            <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/70 sm:text-base">
              BUZZ 采用激活码制付费模式，专注服务线上面试/笔试场景，同时适用于日常作业、科学研究等学习场景。所有套餐均支持本地运行，数据私密安全。价格单位：人民币（元）
            </p>
          </div>
          <Link
            to="/"
            className="hidden shrink-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-light tracking-tight text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 md:block"
          >
            返回主页
          </Link>
        </div>

        <div className="space-y-12">
          {/* 免费版 */}
          <section className="space-y-4">
            <h2 className="text-xl font-light text-white/90">免费版</h2>
            <div className="max-w-md">
              <PricingCard tier={freeTier} />
            </div>
          </section>

          {/* 短期体验卡 */}
          <section className="space-y-4">
            <h2 className="text-xl font-light text-white/90">短期体验卡</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {shortTermTiers.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
          </section>

          {/* 标准套餐 */}
          <section className="space-y-4">
            <h2 className="text-xl font-light text-white/90">标准套餐</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {standardTiers.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
          </section>

          {/* 高级套餐 */}
          <section className="space-y-4">
            <h2 className="text-xl font-light text-white/90">高级套餐</h2>
            <div className="max-w-md">
              <PricingCard tier={premiumTier} />
            </div>
          </section>

          {/* 购买说明 */}
          <section className="space-y-4">
            <h2 className="text-xl font-light text-white/90">购买说明</h2>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-lg shadow-black/30 backdrop-blur-md sm:p-8">
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-medium text-white">激活方式：</span>
                    购买后获得 16 位激活码（格式：XXXX-XXXX-XXXX-XXXX），在应用内输入激活
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-medium text-white">设备绑定：</span>
                    一个激活码只能在一台设备激活，可在旧设备解除后重新激活
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-medium text-white">配额说明：</span>
                    每日配额于北京时间 00:00 重置，未使用次数不累计到次日
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-medium text-white">购买渠道：</span>
                    官网在线购买（暂未开放）或联系作者微信/邮箱购买
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-medium text-white">退款政策：</span>
                    未激活可申请退款，已激活视为已消费不支持退款
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="sticky bottom-8 flex justify-center md:hidden">
          <Link
            to="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 text-xs font-light tracking-tight text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            返回主页
          </Link>
        </div>
      </div>
    </div>
  );
}

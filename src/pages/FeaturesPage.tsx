import { Link } from 'react-router-dom';
import { ShaderBackground } from '@/components/shader/ShaderBackground';

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-2xl font-light text-white/90 sm:text-3xl">{children}</h2>;
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-white/80 shadow-lg shadow-black/30 backdrop-blur-md sm:p-8">
      {children}
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <ShaderBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 pb-24 pt-24 sm:pt-32 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">overview</p>
            <h1 className="mt-3 text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              BUZZ
            </h1>
            <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/70 sm:text-base">
              AI 驱动的智能辅助工具，适用于在线考试、日常作业、技术面试、科学研究等多种场景。支持截图解析、AI 解题与调试、隐身窗口等能力。应用完全在本地运行，确保数据隐私安全。
            </p>
          </div>
          <Link
            to="/"
            className="hidden shrink-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-light tracking-tight text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 md:block"
          >
            返回主页
          </Link>
        </div>

        <div className="space-y-10">
          <section className="space-y-4">
            <SectionTitle>功能概览</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>智能截图：使用全局快捷键随时捕获题目、代码或文献，最多保留 5 张，可管理队列或重新截图。</li>
                <li>AI 解析：自动读取截图内容，生成深度理解、解题思路与最终答案，支持代码输出与复杂度分析。</li>
                <li>智能调试：Solutions 页面可一键进入 Debug 模式，将错误信息交给 AI 给出修复建议与优化方向。</li>
                <li>隐身模式：窗口默认透明，可调整位置、透明度、尺寸，适合在线考试、远程面试等场景使用。</li>
                <li>多模型支持：内置 GPT‑5、Gemini 2.5、Claude 4 等主流 AI 模型，可按需切换。</li>
                <li>灵活计费：免费版每日 3 次，付费版支持多种套餐，最高每日 100 次配额，满足不同使用强度。</li>
              </ul>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>系统要求</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-2 pl-5">
                <li>Windows 10/11 或 macOS 12 及以上版本</li>
                <li>下载安装包后直接运行，无需安装其他环境</li>
                <li>免费版每日 3 次配额，付费用户需购买激活码</li>
                <li>首次使用建议查看快捷键说明，提高使用效率</li>
              </ul>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>快速上手</SectionTitle>
            <SectionCard>
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <span className="font-medium text-white">下载安装：</span>
                  从官网下载对应系统的安装包，双击运行安装程序
                </li>
                <li>
                  <span className="font-medium text-white">启动应用：</span>
                  安装完成后，应用会以隐身模式自动启动（窗口默认透明）
                </li>
                <li>
                  <span className="font-medium text-white">显示窗口：</span>
                  按 <span className="font-medium text-white">Ctrl + B</span> 快捷键显示主窗口
                </li>
                <li>
                  <span className="font-medium text-white">激活账户：</span>
                  免费版每日有 3 次使用配额，付费用户可在设置中输入激活码
                </li>
                <li>
                  <span className="font-medium text-white">开始使用：</span>
                  按 <span className="font-medium text-white">Ctrl + H</span> 捕获内容，按 <span className="font-medium text-white">Ctrl + Enter</span> 让 AI 开始解析
                </li>
              </ol>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>常用快捷键</SectionTitle>
            <SectionCard>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left text-xs text-white/75 sm:text-sm">
                  <thead>
                    <tr className="text-white/60">
                      <th className="pb-3 pr-4 font-normal">功能</th>
                      <th className="pb-3 font-normal">快捷键</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      ['显示或隐藏窗口', 'Ctrl + B'],
                      ['捕获截图', 'Ctrl + H'],
                      ['处理当前截图', 'Ctrl + Enter'],
                      ['删除最新截图', 'Ctrl + L'],
                      ['重置会话', 'Ctrl + R'],
                      ['移动窗口', 'Ctrl + 方向键'],
                      ['调整透明度', 'Ctrl + [ / Ctrl + ]'],
                      ['退出应用', 'Ctrl + Q'],
                    ].map(([label, shortcut]) => (
                      <tr key={label}>
                        <td className="py-3 pr-4">{label}</td>
                        <td className="py-3 font-mono text-xs text-white/80 sm:text-sm">{shortcut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/60 sm:text-sm">
                提示：若窗口不可见或无法拖动，先按一次 Ctrl + B 让其可见，再配合方向键或透明度快捷键调整位置。
              </p>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>界面说明</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-2 pl-5">
                <li>Queue：展示当前截图列表，支持删除与重新截图，右侧浮窗列出常用指令与状态提示。</li>
                <li>Solutions：输出模型思路、答案或代码，以及复杂度与关键要点，可追加上下文二次求解。</li>
                <li>Debug：复查模式，上传报错截图即可让模型指出问题与修复建议。</li>
              </ul>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>激活与设置</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <span className="font-medium text-white">激活码激活：</span>
                  付费用户在设置面板中输入 16 位激活码即可解锁对应套餐
                </li>
                <li>
                  <span className="font-medium text-white">配额查看：</span>
                  在应用内可随时查看今日剩余使用次数和套餐有效期
                </li>
                <li>
                  <span className="font-medium text-white">设备绑定：</span>
                  激活码绑定单一设备，需换设备时可在设置中解除绑定
                </li>
                <li>
                  <span className="font-medium text-white">数据存储：</span>
                  所有使用记录和配置均存储在本地，应用不会上传任何数据
                </li>
              </ul>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>常见问题</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <span className="font-medium text-white">窗口不见了？</span>
                  应用仍在后台运行，按 <span className="font-medium text-white">Ctrl + B</span> 即可切换窗口显示/隐藏
                </li>
                <li>
                  <span className="font-medium text-white">快捷键失效？</span>
                  确认系统已授予屏幕录制和全局快捷键权限。macOS 需在"系统设置 → 隐私与安全性 → 屏幕录制"中勾选 BUZZ
                </li>
                <li>
                  <span className="font-medium text-white">提示配额用尽？</span>
                  免费版每日 3 次，等待次日 00:00 重置或购买付费套餐
                </li>
                <li>
                  <span className="font-medium text-white">激活码无效？</span>
                  检查格式是否完整（XXXX-XXXX-XXXX-XXXX），确认网络连接正常，或联系客服核实
                </li>
                <li>
                  <span className="font-medium text-white">如何卸载？</span>
                  Windows 在控制面板中卸载，macOS 将应用拖入废纸篓即可
                </li>
              </ul>
            </SectionCard>
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

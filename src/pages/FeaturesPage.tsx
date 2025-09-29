import { useState } from 'react';
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

function CommandSnippet({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error('复制失败', error);
    }
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-white/70">
      <pre className="whitespace-pre-wrap break-all">{command}</pre>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="复制命令"
      >
        {copied ? '已复制' : '复制'}
      </button>
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
              Interview Coder（开源魔改版）
            </h1>
            <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/70 sm:text-base">
              面向技术面试的桌面助手，支持截图解析、AI 解题与调试、隐身窗口等能力。应用完全在本地运行，需自行提供模型 API Key，确保私有数据只在你与服务商之间传输。
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
                <li>截图队列：使用全局快捷键随时捕获题面或代码，最多保留 5 张，可管理队列或重新截图。</li>
                <li>AI 解析与作答：自动读取截图，生成题目理解、思考过程与最终回答，支持代码输出与复杂度说明。</li>
                <li>结果调试：Solutions 页面可一键进入 Debug 模式，将错误截图交给模型给出修复建议与优化方向。</li>
                <li>窗口隐身：Electron 浮窗默认透明，可调整位置、透明度、尺寸，降低被共享或录制捕捉风险。</li>
                <li>多模型支持：内置 GPT‑5、Gemini 2.5、Claude 4 等，可按需切换或扩展。（推荐使用 gemini2.5flash）</li>
              </ul>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>运行要求</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-2 pl-5">
                <li>Windows 10/11（推荐），macOS 13 及以上可使用相同目录下的启动脚本。</li>
                <li>Node.js 18 或更新版本。</li>
                <li>首次运行需执行 <code className="rounded bg-white/10 px-1">npm install</code> 安装依赖。</li>
                <li>需准备可用的模型 API Key（在应用设置弹窗中粘贴）。</li>
              </ul>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>快速启动（Windows）</SectionTitle>
            <SectionCard>
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  克隆仓库：
                  <CommandSnippet command="git clone https://github.com/a1594834522-coder/interview-coder.git" />
                </li>
                <li>
                  安装依赖：
                  <CommandSnippet command="npm install" />
                </li>
                <li>
                  启动隐身版应用：
                  <CommandSnippet command="stealth-run.bat" />
                  脚本会自动清理旧构建、重新打包并以隐身模式启动。
                </li>
                <li>
                  启动后按 <span className="font-medium text白">Ctrl + B</span> 显示主窗口，在设置面板中填写 API Key 即可。
                </li>
                <li>推荐使用 gemini2.5flash</li>
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
            <SectionTitle>API Key 与配置</SectionTitle>
            <SectionCard>
              <p className="leading-relaxed text-white/70">API Key 可在设置面板中随时切换模型供应商。配置文件默认路径：</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Windows：%APPDATA%\interview-coder-v1\config.json</li>
                <li>macOS：~/Library/Application Support/interview-coder-v1/config.json</li>
              </ul>
              <p className="mt-3 leading-relaxed text-white/70">删除该文件可重置登录与模型设定。</p>
            </SectionCard>
          </section>

          <section className="space-y-4">
            <SectionTitle>常见问题</SectionTitle>
            <SectionCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>窗口不见了？应用仍在后台运行。按 Ctrl + B 切换可见性，或结束 electron 进程后重新运行脚本。</li>
                <li>快捷键失效？确认系统已授予屏幕录制或全局快捷键权限；macOS 需在“系统设置 → 隐私与安全性 → 屏幕录制”中勾选终端或 IDE。</li>
                <li>模型调用失败？请核对 API Key 与额度，可尝试切换其他模型测试。</li>
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

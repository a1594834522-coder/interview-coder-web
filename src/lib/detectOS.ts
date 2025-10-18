/**
 * 检测用户操作系统类型
 */
export type OSType = 'windows' | 'macos' | 'linux' | 'unknown';

export interface OSInfo {
  type: OSType;
  name: string;
}

/**
 * 检测当前用户的操作系统
 */
export function detectOS(): OSInfo {
  if (typeof window === 'undefined' || !window.navigator) {
    return { type: 'unknown', name: 'Unknown' };
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform?.toLowerCase() || '';

  // 检测 macOS
  if (platform.includes('mac') || userAgent.includes('mac')) {
    return { type: 'macos', name: 'macOS' };
  }

  // 检测 Windows
  if (platform.includes('win') || userAgent.includes('windows')) {
    return { type: 'windows', name: 'Windows' };
  }

  // 检测 Linux
  if (platform.includes('linux') || userAgent.includes('linux')) {
    return { type: 'linux', name: 'Linux' };
  }

  return { type: 'unknown', name: 'Unknown' };
}

/**
 * 检查当前系统是否为 Windows
 */
export function isWindows(): boolean {
  return detectOS().type === 'windows';
}

/**
 * 检查当前系统是否为 macOS
 */
export function isMacOS(): boolean {
  return detectOS().type === 'macos';
}

/**
 * 检查当前系统是否为 Linux
 */
export function isLinux(): boolean {
  return detectOS().type === 'linux';
}

/**
 * 获取系统友好名称
 */
export function getOSName(): string {
  return detectOS().name;
}

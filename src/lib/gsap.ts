import gsapCore from 'gsap';
import { useGSAP as useGSAPHook } from '@gsap/react';

// Ensure the React hook integration is registered once per app lifecycle.
gsapCore.registerPlugin(useGSAPHook);

export const gsap = gsapCore;
export const useGSAP = useGSAPHook;

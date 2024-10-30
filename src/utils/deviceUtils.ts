/* デバイス判定 */
export const isSmartPhone = (): boolean => {
  return window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches;
};

export const showIfOrElseWindow = (window: number) => (desktopContent: any) => (mobileContent: any) => window < 768 ? mobileContent : desktopContent;

export enum Breakpoint {
    small = 'screen and (min-width: 768px)',
    medium = 'screen and (min-width: 992px)',
    large = 'screen and (min-width: 1200px)'
  };
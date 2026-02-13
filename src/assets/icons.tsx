import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Recommended icon sources:
// https://heroicons.com/
// https://www.untitledui.com/react/resources/icons
// https://www.lsicon.com/
// https://www.jsxicons.com/

// NOTE: If using SVG's, do not use HTML attributes.
// Instead, use JSX, which follows JavaScript naming rules.
// Ej: class --> className. stroke-width --> strokeWidth

// Follow example below for adding new icons
// Usage example:
// import { IconName } from 'route/to/icons.tsx';
// <IconName size={32} />

export const Calendar = ({ size = 24, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 
        2.25 0 0 1 2.25-2.25h13.5A2.25 
        2.25 0 0 1 21 7.5v11.25m-18 
        0A2.25 2.25 0 0 0 5.25 
        21h13.5A2.25 2.25 0 0 0 
        21 18.75m-18 0v-7.5A2.25 
        2.25 0 0 1 5.25 9h13.5A2.25 
        2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
};


export function Check({ size = 24, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={size} height={size} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

export function Plus({ size = 24, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={size} height={size} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}

export function Close({ size = 24, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={size} height={size} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

export function MinusCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={size} height={size} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

import { JSXElement } from 'solid-js';

export const Link = ({
  children,
  href,
}: {
  children?: JSXElement;
  href?: string;
}) => (
  <a
    href={href}
    class='p-2 border-2 border-black rounded-md hover:bg-slate-800 hover:text-white max-w-xs text-center'
  >
    {children}
  </a>
);

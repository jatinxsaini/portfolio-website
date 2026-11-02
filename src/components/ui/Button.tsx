'use client';

import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SharedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  arrow?: 'right' | 'up' | 'none';
  children: React.ReactNode;
  className?: string;
}

type LinkButtonProps = SharedButtonProps & {
  href: string;
  download?: boolean | string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'download' | 'children' | 'className'>;

type NativeButtonProps = SharedButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const isLinkButton = (props: ButtonProps): props is LinkButtonProps =>
  'href' in props && typeof props.href === 'string';

export const Button: React.FC<ButtonProps> = (props) => {
  const sizes = {
    sm: 'px-4 py-1.5 min-h-[38px] text-xs gap-2',
    md: 'px-5 sm:px-6 py-2.5 min-h-[46px] text-sm gap-2.5',
    lg: 'px-6 sm:px-7 py-3 sm:py-3.5 min-h-[54px] text-base gap-3',
  };

  const renderLabel = (children: React.ReactNode, arrow: SharedButtonProps['arrow']) => (
    <>
      {children}
      {arrow === 'up' ? (
        <ArrowUp className="flow-button__arrow flow-button__arrow--up" aria-hidden="true" />
      ) : arrow === 'right' ? (
        <ArrowRight className="flow-button__arrow" aria-hidden="true" />
      ) : null}
    </>
  );

  const renderContent = (children: React.ReactNode, arrow: SharedButtonProps['arrow']) => (
    <>
      <span className="flow-button__label">{renderLabel(children, arrow)}</span>
      <span className="flow-button__hover-content" aria-hidden="true">
        {renderLabel(children, arrow)}
      </span>
    </>
  );

  if (isLinkButton(props)) {
    const {
      href,
      download,
      external,
      variant = 'primary',
      size = 'md',
      arrow = 'right',
      children,
      className,
      ...anchorProps
    } = props;
    const isMailto = href.startsWith('mailto:');
    const isExternal = external || (href.startsWith('http') && !download);
    const opensNewTab = isExternal && !isMailto && !download;

    return (
      <a
        {...anchorProps}
        href={href}
        download={download}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
        className={cn('flow-button', sizes[size], className)}
        data-variant={variant}
      >
        {renderContent(children, arrow)}
      </a>
    );
  }

  const {
    variant = 'primary',
    size = 'md',
    arrow = 'right',
    children,
    className,
    ...buttonProps
  } = props;

  return (
    <button
      className={cn('flow-button', sizes[size], className)}
      data-variant={variant}
      {...buttonProps}
    >
      {renderContent(children, arrow)}
    </button>
  );
};

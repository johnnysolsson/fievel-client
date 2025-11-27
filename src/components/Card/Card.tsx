
import React, { ReactNode } from 'react';

export type CardVariant = 'default' | 'outlined' | 'elevated';

export interface CardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: CardVariant;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  onEdit?: () => void;
  onArchive?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  onClick,
  variant = 'default',
  imageSrc,
  imageAlt,
  tags,
  onEdit,
  onArchive,
}) => {
  const base = 'rounded-xl bg-white border p-4 transition';
  const variants: Record<CardVariant, string> = {
    default: 'border-gray-200 shadow-sm hover:shadow-md',
    outlined: 'border-gray-300 shadow-none',
    elevated: 'border-transparent shadow-lg',
  };

  const clickable = onClick
    ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500'
    : '';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`${base} ${variants[variant]} ${clickable} ${className || ''}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={title}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title || 'Card image'}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      )}
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.slice(0, 10).map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {/* Admin Buttons */}

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={onEdit}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >Ändra</button>
    <button
      type="button"
      onClick={onArchive}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >Arkivera</button>
  </div>

    </div>
  );
};


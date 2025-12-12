import React from "react";
import { Profile } from "../../types/types";

export interface CardProps extends Omit<Profile, "tags"> {
  tags?: string[];
  onEdit?: () => void;
  onTogglePause?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const ImageOrPlaceholder: React.FC<{ src?: string; alt: string; size: string }> = ({
  src,
  alt,
  size,
}) =>
  src ? (
    <img src={src} alt={alt} className={`${size} rounded-full object-cover`} />
  ) : (
    <div
      className={`${size} rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xl`}
      aria-label={alt}
    >
      {getInitials(alt)}
    </div>
  );

export const Card: React.FC<CardProps> = ({
  name,
  role,
  imageSrc,
  tags = [],
  isPaused = false,
  onEdit,
  onTogglePause,
}) => {
  // Derived state for collapsed view when paused
  // We can treat "paused" as collapsed by default if we want, 
  // but usually the parent controls the state. 
  // Based on previous code: "if (isPaused) setIsCollapsed(true);"
  // Let's assume if it's paused, we show the collapsed view.
  const isCollapsed = isPaused;

  return (
    <div
      className="bg-transparent flex flex-col gap-6 pb-6 border-b border-gray-300 relative"
    >
      {isCollapsed ? (
        <div
          className="flex items-center justify-between px-4 py-4 bg-gray-100 rounded"
        >
          <div className="flex items-center gap-4 opacity-60">
            <ImageOrPlaceholder
              src={imageSrc}
              alt={name}
              size="w-12 h-12"
            />
            <h3 className="text-sm font-serif">{name}</h3>
            <span className="text-lg font-bold text-gray-700 ml-2">Pausad</span>
          </div>
          <button
            type="button"
            onClick={onTogglePause}
            className="px-6 py-2 text-xl font-light text-white bg-brand-800 rounded-3xl hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
          >
            Aktivera
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-start gap-6 mt-6">
            {/* Left column: Profile */}
            <div className="flex flex-col items-center w-32">
              <ImageOrPlaceholder
                src={imageSrc}
                alt={name}
                size="w-28 h-28"
              />
              <h3 className="text-sm mt-3 text-center font-serif mb-1">
                {name}
              </h3>
              <p className="text-xs text-center font-serif">{role}</p>
            </div>
            {/* Right column: Nyckelord + Tags + Buttons */}
            <div className="flex-1">
              {tags.length > 0 && (
                <>
                  <p className="text-gray-700 text-sm mb-3 font-serif">
                    Nyckelord
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6 tags">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-md font-serif"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
              <div className="flex gap-4 mt-8">
                {onEdit && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit();
                    }}
                    className="px-6 py-2 text-xl font-light text-white bg-brand-800 rounded-3xl hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
                  >
                    Ändra
                  </button>
                )}
                {onTogglePause && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePause();
                    }}
                    className="px-6 py-2 text-xl font-medium text-brand-800 bg-white border border-brand-800 rounded-3xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-800"
                  >
                    Pausa
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
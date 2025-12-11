import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

export interface CardProps {
  name: string;
  role: string;
  imageSrc: string;
  tags?: string[];
  onEdit?: () => void;
  onPause?: () => void;
  onResume?: () => void;
}

// Helper to get initials from name
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
  onEdit,
  onPause,
  onResume,
}) => {
  const [profile, setProfile] = useState({
    name,
    role,
    imageSrc,
    tags,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isPaused) setIsCollapsed(true);
  }, [isPaused]);

  return (
    <div
      className={`bg-transparent flex flex-col gap-6 pb-6 border-b border-gray-300 relative ${
        isPaused && !isCollapsed ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {isCollapsed ? (
        <div
          className="flex items-center justify-between px-4 py-4 bg-gray-100 rounded"
          style={{ opacity: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <ImageOrPlaceholder
              src={profile.imageSrc}
              alt={profile.name}
              size="w-12 h-12"
            />
            <h3 className="text-sm font-serif">{profile.name}</h3>
            <span className="text-lg font-bold text-gray-700 ml-2">Pausad</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsPaused(false);
              setIsCollapsed(false);
              if (onResume) onResume();
            }}
            className="px-3 py-1 text-xs bg-green-200 rounded"
            style={{ opacity: 1, pointerEvents: "auto" }}
          >
            Aktivera
          </button>
        </div>
      ) : (
        <>
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-10">
              <span className="text-lg font-bold text-gray-700">Pausad</span>
            </div>
          )}
          <div className="flex items-start gap-6 mt-6">
            {/* Left column: Profile */}
            <div className="flex flex-col items-center w-32">
              <ImageOrPlaceholder
                src={profile.imageSrc}
                alt={profile.name}
                size="w-28 h-28"
              />
              <h3 className="text-sm mt-3 text-center font-serif mb-1">
                {profile.name}
              </h3>
              <p className="text-xs text-center font-serif">{profile.role}</p>
            </div>
            {/* Right column: Nyckelord + Tags + Buttons */}
            <div className="flex-1">
              {profile.tags.length > 0 && (
                <>
                  <p className="text-gray-700 text-sm mb-3 font-serif">
                    Nyckelord
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6 tags">
                    {profile.tags.map((tag, index) => (
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
              {(onEdit || onPause) && (
                <div className="flex gap-4 mt-8">
                  {onEdit && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                      }}
                      className="px-6 py-2 text-xl font-light text-white bg-brand-800 rounded-3xl hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
                    >
                      Ändra
                    </button>
                  )}
                  {onPause && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPaused(true);
                        if (onPause) onPause();
                      }}
                      className="px-6 py-2 text-xl font-medium text-brand-800 bg-white border border-brand-800 rounded-3xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-800"
                    >
                      Pausa
                    </button>
                  )}
                </div>
              )}
              {isModalOpen && (
                <Modal
                  name={profile.name}
                  role={profile.role}
                  tags={profile.tags}
                  imageSrc={profile.imageSrc}
                  onCancel={() => setIsModalOpen(false)}
                  onSave={(updatedProfile) => {
                    setProfile(updatedProfile);
                    setIsModalOpen(false);
                  }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
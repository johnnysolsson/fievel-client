import React, { useState } from "react";
import Modal from "../Modal/Modal";

export interface CardProps {
  name: string;
  role: string;
  imageSrc: string;
  tags?: string[];
  onEdit?: () => void;
  onArchive?: () => void;
}

export const Card: React.FC<CardProps> = ({
  name,
  role,
  imageSrc,
  tags = [],
  onEdit,
  onArchive,
}) => {
  // Store profile data in state
  const [profile, setProfile] = useState({
    name,
    role,
    imageSrc,
    tags,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-transparent flex flex-col gap-6 pb-6 border-b border-gray-300">
      <div className="flex items-start gap-6 mt-6">
        {/* Left column: Profile */}
        <div className="flex flex-col items-center w-32">
          {profile.imageSrc && (
            <img
              src={profile.imageSrc}
              alt={profile.name}
              className="w-28 h-28 rounded-full object-cover"
            />
          )}
          <h3 className="text-sm mt-3 text-center font-serif mb-1">{profile.name}</h3>
          <p className="text-xs text-center font-serif">{profile.role}</p>
        </div>

        {/* Right column: Nyckelord + Tags + Buttons */}
        <div className="flex-1">
          {profile.tags.length > 0 && (
            <>
              <p className="text-gray-700 text-sm mb-3 font-serif">Nyckelord</p>
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

          {/* Buttons */}
          {(onEdit || onArchive) && (
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
              {onArchive && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onArchive();
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
    </div>
  );
};

export default Card;
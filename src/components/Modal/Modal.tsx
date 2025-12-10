import React, { useState } from "react";

export interface ModalProps {
  name: string;
  role: string;
  imageSrc?: string;
  tags?: string[];
  onCancel: () => void;
  onSave: (profile: { name: string; role: string; imageSrc?: string; tags: string[] }) => void;
}

const Modal: React.FC<ModalProps> = ({
  name,
  role,
  imageSrc = "",
  tags = [],
  onCancel,
  onSave,
}) => {
  const [profileName, setProfileName] = useState(name);
  const [profileRole, setProfileRole] = useState(role);
  const [profileImage, setProfileImage] = useState(imageSrc);
  const [modalTags, setModalTags] = useState(tags);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !modalTags.includes(newTag.trim())) {
      setModalTags([...modalTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setModalTags(modalTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-lg p-8 w-1/2 max-w-screen-md min-w-[350px] relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative mb-4">
          <input
            type="text"
            value={profileName}
            onChange={e => setProfileName(e.target.value)}
            className="text-2xl w-full border border-brand-800 bg-brand-50 px-10 py-2 rounded font-bold focus:outline-none focus:border-brand-800 transition"
            placeholder="Redigera profilnamn"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-800 pointer-events-none">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M15.232 5.232l3.536 3.536M4 20h4.243l9.9-9.9a2 2 0 0 0 0-2.828l-2.415-2.415a2 2 0 0 0-2.828 0l-9.9 9.9V20z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        <input
          type="text"
          value={profileRole}
          onChange={e => setProfileRole(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          placeholder="Roll"
        />
        <input
          type="text"
          value={profileImage}
          onChange={e => setProfileImage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          placeholder="Bild-URL (valfritt)"
        />
        <p className="text-gray-700 text-sm mb-3 font-serif">Nyckelord</p>
        <div className="flex flex-wrap gap-3 mb-6 tags">
          {modalTags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-md font-serif flex items-center"
            >
              {tag}
              <button
                className="ml-2 text-red-500"
                onClick={() => removeTag(tag)}
                type="button"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            className="border px-2 py-1 rounded"
            placeholder="Lägg till ny tagg"
          />
          <button
            type="button"
            onClick={addTag}
            className="bg-brand-800 text-white px-4 py-1 rounded"
          >
            Lägg till
          </button>
        </div>
        <button
          type="button"
          onClick={() =>
            onSave({
              name: profileName,
              role: profileRole,
              imageSrc: profileImage,
              tags: modalTags,
            })
          }
          className="bg-brand-800 text-white px-4 py-2 rounded mt-4"
        >
          Spara
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          Stäng
        </button>
      </div>
    </div>
  );
};

export default Modal;
import React, { useState, useRef } from "react";

interface ModalProps {
  name: string;
  role: string;
  imageSrc: string;
  tags: string[];
  onSave: (profile: { name: string; role: string; imageSrc: string; tags: string[] }) => void;
  onCancel: () => void;
}

const EditableTag: React.FC<{
  tag: string;
  onUpdate: (newTag: string) => void;
  onRemove: () => void;
}> = ({ tag, onUpdate, onRemove }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(tag);

  const handleBlur = () => {
    if (value.trim() && value !== tag) {
      onUpdate(value.trim());
    }
    setEditing(false);
  };

  return editing ? (
    <input
      type="text"
      value={value}
      autoFocus
      onChange={e => setValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={e => {
        if (e.key === "Enter") handleBlur();
        if (e.key === "Escape") setEditing(false);
      }}
      className="border px-1 py-0 rounded"
      style={{ width: "80px" }}
    />
  ) : (
    <span className="bg-gray-200 px-2 py-1 rounded mr-2 flex items-center">
      <span onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>{tag}</span>
      <button type="button" className="ml-1 text-red-500" onClick={onRemove}>×</button>
    </span>
  );
};

const Modal: React.FC<ModalProps> = ({ name, role, imageSrc, tags, onSave, onCancel }) => {
  const [profileName, setProfileName] = useState(name);
  const [profileRole, setProfileRole] = useState(role); 
  const [profileImage, setProfileImage] = useState(imageSrc); 
  const [modalTags, setModalTags] = useState<string[]>(tags);
  const [newTag, setNewTag] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addTag = () => {
    if (newTag.trim() && !modalTags.includes(newTag.trim())) {
      setModalTags([...modalTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setModalTags(modalTags.filter(t => t !== tag));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setProfileImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative w-96">

      <div className="flex flex-col items-center mb-4">
        {profileImage ? (
          <div className="relative group w-28 h-28 mb-2">
            <img
              src={profileImage}
              alt="Profilbild"
              className="w-28 h-28 rounded-full object-cover cursor-pointer"
              onClick={handleImageClick}
              title="Byt bild"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={handleRemoveImage}
            >
              <span className="text-white text-sm font-semibold">Ta bort bild</span>
            </div>
          </div>
        ) : (
          <div
            className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-2 cursor-pointer text-gray-500 text-center"
            onClick={handleImageClick}
            title="Lägg till bild"
          >
            Lägg till bild
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          ref={fileInputRef}
        />
      </div>

        <input
          type="text"
          value={profileName}
          onChange={e => setProfileName(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 text-lg mt-3 text-center font-serif mb-1 font-bold"
          placeholder="Ange för- och efternamn"
        />

        <input
          type="text"
          value={profileRole}
          onChange={e => setProfileRole(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 text-xs text-center font-serif font-bold"
          placeholder="Ange roll"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {modalTags.map((tag, idx) => (
            <EditableTag
              key={idx}
              tag={tag}
              onUpdate={newTag => {
                setModalTags(tags =>
                  tags.map((t, i) => (i === idx ? newTag : t))
                );
              }}
              onRemove={() => removeTag(tag)}
            />
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
          <button type="button" onClick={addTag} className="bg-brand-800 text-white px-4 py-1 rounded">
            Lägg till
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            onSave({ name: profileName, role: profileRole, imageSrc: profileImage, tags: modalTags });
          }}
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
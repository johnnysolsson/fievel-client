import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";

interface Profile {
  name: string;
  role: string;
  imageSrc: string;
  tags: string[];
}

const CardGrid: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      name: "Johnny Olsson",
      role: "Frontend Developer",
      imageSrc: "https://54u.se/wp-content/uploads/2021/12/Johnny_02-300x300.jpg",
      tags: [
        'Frontendutvecklare', 'Backendutvecklare', 'Fullstack', 'DevOps', 'Scrum Master', 'Agile Coach'
      ],
    },    
    {
      name: "Linda Ruhmén",
      role: "Frontend Developer",
      imageSrc: "https://54u.se/wp-content/uploads/2025/08/Linda_Ruhmen-300x300.jpg",
      tags: [
        'UX Designer', 'UI Designer', 'Product Designer', 'SCRUM', 'Designsystem',
        'Workshops', 'Design thinking', 'WCAG', 'Tillgänglighet', 'Figma', 'Prototyper',
        'Google Analytics', 'Optimizely', 'ChatGPT', 'Lovable', 'Figma', 'Prototyper',
        'Google Analytics', 'Optimizely', 'ChatGPT', 'Lovable'
      ],
    },
    {
      name: "Morgan Söderqvist",
      role: "UX Designer",
      imageSrc: "https://54u.se/wp-content/uploads/2024/04/morgan_s.png",
      tags: ['UX', 'Product Owner', 'Product Designer'],
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddProfile = () => {
    setEditingIndex(null);
    setShowModal(true);
  };

  const handleEditProfile = (index: number) => {
    setEditingIndex(index);
    setShowModal(true);
  };

  const handlePauseProfile = (index: number) => {
    setEditingIndex(index);
  };

  const handleSaveProfile = (profile: Profile) => {
    if (editingIndex === null) {
      setProfiles(prev => [...prev, profile]);
    } else {
      setProfiles(prev =>
        prev.map((p, idx) => (idx === editingIndex ? profile : p))
      );
    }
    setShowModal(false);
    setEditingIndex(null);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleAddProfile}
        className="px-6 py-2 text-xl font-light text-white bg-brand-800 rounded-3xl hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
      >
        Lägg till anställd
      </button>
      <div className="grid grid-cols-1 gap-4 w-full">
        {profiles.map((profile, idx) => (
          <Card
            key={idx}
            name={profile.name}
            role={profile.role}
            imageSrc={profile.imageSrc}
            tags={profile.tags}
            onEdit={() => handleEditProfile(idx)}
            onPause={() => handlePauseProfile(idx)}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          name={editingIndex !== null ? profiles[editingIndex].name : ""}
          role={editingIndex !== null ? profiles[editingIndex].role : ""}
          tags={editingIndex !== null ? profiles[editingIndex].tags : []}
          imageSrc={editingIndex !== null ? profiles[editingIndex].imageSrc || "" : ""}
          onCancel={() => {
            setShowModal(false);
            setEditingIndex(null);
          }}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
};

export default CardGrid;
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import { Profile } from "../../types/types";

const CardGrid: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      name: "Johnny Olsson",
      role: "Frontend Developer",
      imageSrc: "https://54u.se/wp-content/uploads/2021/12/Johnny_02-300x300.jpg",
      tags: [
        'Frontendutvecklare', 'Backendutvecklare', 'Fullstack', 'DevOps', 'Scrum Master', 'Agile Coach'
      ],
      isPaused: false,
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
      isPaused: false,
    },
    {
      name: "Morgan Söderqvist",
      role: "UX Designer",
      imageSrc: "https://54u.se/wp-content/uploads/2024/04/morgan_s.png",
      tags: ['UX', 'Product Owner', 'Product Designer'],
      isPaused: false,
    },
    {
      name: "Anna Andersson",
      role: "Tech Lead",
      imageSrc: "https://randomuser.me/api/portraits/women/65.jpg",
      tags: ['Tech Lead', 'Software Architecture', 'Team Leadership', 'Mentoring', 'React', 'TypeScript', 'Node.js', 'Cloud Architecture', 'AWS'],
      isPaused: false,
    },
    {
      name: "Cool Cat",
      role: "Cool Cat",
      imageSrc: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=200",
      tags: ['Purr Programming', 'Mouse Hunter', 'Nap Architect', 'Laser Focus', 'Keyboard Warmer'],
      isPaused: false,
    },
    {
      name: "Brother Bear",
      role: "Network Engineer",
      imageSrc: "https://images.pexels.com/photos/158109/kodiak-brown-bear-adult-portrait-wildlife-158109.jpeg?auto=compress&cs=tinysrgb&w=200",
      tags: ['Cisco', 'Juniper', 'Firewalls', 'VPN', 'Routing', 'Switching', 'Network Security', 'TCP/IP', 'Wireshark'],
      isPaused: false,
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

  const handleTogglePause = (index: number) => {
    setProfiles(prev => 
      prev.map((p, idx) => idx === index ? { ...p, isPaused: !p.isPaused } : p)
    );
  };

  const handleSaveProfile = (profileData: Omit<Profile, "isPaused">) => {
    if (editingIndex === null) {
      // New profile
      setProfiles(prev => [...prev, { ...profileData, isPaused: false }]);
    } else {
      // Update existing
      setProfiles(prev =>
        prev.map((p, idx) => (idx === editingIndex ? { ...p, ...profileData, isPaused: p.isPaused } : p))
      );
    }
    setShowModal(false);
    setEditingIndex(null);
  };

  const sortedProfiles = [...profiles].sort((a, b) => {
    if (a.isPaused === b.isPaused) {
      return a.name.localeCompare(b.name);
    }
    return a.isPaused ? 1 : -1;
  });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Fievel</h1>
      <button
        type="button"
        onClick={handleAddProfile}
        className="mt-8 mb-8 px-6 py-2 text-xl font-light text-white bg-brand-800 rounded-3xl hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
      >
        Lägg till anställd
      </button>
      <div className="grid grid-cols-1 gap-4 w-full">
        {sortedProfiles.map((profile, idx) => {
          // Find the original index to pass to handlers
          const originalIndex = profiles.indexOf(profile);
          return (
            <Card
              key={originalIndex}
              name={profile.name}
              role={profile.role}
              imageSrc={profile.imageSrc}
              tags={profile.tags}
              isPaused={profile.isPaused}
              onEdit={() => handleEditProfile(originalIndex)}
              onTogglePause={() => handleTogglePause(originalIndex)}
            />
          );
        })}
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
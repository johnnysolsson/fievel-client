import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";

interface Profile {
  name: string;
  role: string;
  imageSrc?: string;
  tags: string[];
}

const CardGrid: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      name: "Anna Andersson",
      role: "Frontend Developer",
      imageSrc: "https://54u.se/wp-content/uploads/2025/08/Linda_Ruhmen-300x300.jpg",
      tags: ["React", "Design"],
    },
    {
      name: "Erik Eriksson",
      role: "Backend Developer",
      imageSrc: "https://54u.se/wp-content/uploads/2025/08/Linda_Ruhmen-300x300.jpg",
      tags: ["Node.js", "API"],
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleAddProfile = () => {
    console.log("Button clicked");
    setShowModal(true);
  };

  const handleSaveProfile = (profile: Profile) => {
    setProfiles([...profiles, profile]);
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="bg-brand-800 text-white px-4 py-2 rounded mb-4"
        onClick={handleAddProfile}
      >
        Lägg till ans   tälld
      </button>
      <div className="grid grid-cols-3 gap-4">
        {profiles.map((profile, idx) => (
          <Card
            key={idx}
            name={profile.name}
            role={profile.role}
            imageSrc={profile.imageSrc}
            tags={profile.tags}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          name=""
          role=""
          tags={[]}
          imageSrc=""
          onCancel={() => setShowModal(false)}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
};

export default CardGrid;
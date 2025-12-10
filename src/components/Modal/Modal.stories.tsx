// Modal.stories.tsx
import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal
          name="Jane Doe"
          role="Developer"
          imageSrc=""
          tags={["React", "TypeScript"]}
          onCancel={() => setOpen(false)}
          onSave={profile => {
            setOpen(false);
            alert(JSON.stringify(profile, null, 2));
          }}
        />
      )}
    </>
  );
};
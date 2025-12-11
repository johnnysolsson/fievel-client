# Modal Component

A reusable modal dialog for forms, confirmations, or custom content.

**Design highlights**
- Centered overlay with backdrop
- Customizable header, body, and footer
- Closes on backdrop click or via actions
- Accessible focus management

---

## Usage Example

```tsx
import Modal from "./Modal";

<Modal
  title="Edit Profile"
  onCancel={handleCancel}
  onSave={handleSave}
>
  {/* Modal content goes here */}
</Modal>
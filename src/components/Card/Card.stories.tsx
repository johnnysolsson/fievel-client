
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
    },
    title: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    onClick: { action: 'clicked' },
    tags: {
    control: { type: 'object' }, // allows editing array in Storybook
},

  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  args: {
    title: 'Card with Image',
    imageSrc: 'https://img.icons8.com/?size=100&id=21114&format=png&color=000000',
    imageAlt: 'Example cover image',
    children: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind', 'UI', 'Design', 'Frontend', 'Components', 'Testing', 'Docs'],
  },
};

// export const Default: Story = {
//   args: {
//     title: 'Sample Card',
//     children: 'This is a simple card content.',
//     variant: 'default',
//   },
// };

// export const Outlined: Story = {
//   args: {
//     title: 'Card with Image',
//     imageSrc:
//       'https://img.icons8.com/?size=100&id=21114&format=png&color=000000',
//     imageAlt: 'Example cover image',
//     children: 'Image header + body content.',
//   },
// };

// export const Elevated: Story = {
//   args: {
//     title: 'Elevated Card',
//     children: 'Elevated variant with stronger shadow.',
//     variant: 'elevated',
//   },
// };


// export const Clickable: Story = {
//   args: {
//     title: 'Clickable Card',
//     children: 'Try clicking or pressing Enter/Space.',
//     onClick: () => {},
//   },
// };

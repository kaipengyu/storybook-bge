import { HeroImage } from './HeroImage';

export default {
  title: 'Email/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text', description: 'URL of the desktop hero image' },
    mobileImageUrl: { control: 'text', description: 'URL of the mobile hero image' },
    altText: { control: 'text', description: 'Alt text for the image' },
    linkUrl: { control: 'text', description: 'URL the image links to' },
    width: { control: 'number', description: 'Width of the image in pixels' },
  },
};

export const Default = {
  args: {
    imageUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B195ff868-5780-49a0-b070-c25d3346908e%7D_hero.png',
    mobileImageUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B74547553-b9d8-4d06-a7e9-480ba5453378%7D_mobhero.png',
    altText: 'Boost your savings without any extra effort. -Zoe, Your Good Energy Guide',
    linkUrl: 'https://www.delmarva.com',
    width: 600,
  },
};

export const CustomHero = {
  args: {
    imageUrl: 'https://via.placeholder.com/600x300/14016c/ffffff?text=Your+Hero+Image',
    mobileImageUrl: 'https://via.placeholder.com/600x400/14016c/ffffff?text=Mobile+Hero',
    altText: 'Custom hero image',
    linkUrl: 'https://example.com',
    width: 600,
  },
};

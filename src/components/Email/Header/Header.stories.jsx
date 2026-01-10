import { Header } from './Header';

export default {
  title: 'Email/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    promotionalText: { control: 'text', description: 'Promotional message text above the logo' },
    promotionalTextColor: { control: 'color', description: 'Promotional text color' },
    promotionalBackgroundColor: { control: 'color', description: 'Promotional message background color' },
    logoUrl: { control: 'text', description: 'URL of the logo image' },
    logoAlt: { control: 'text', description: 'Alt text for the logo' },
    logoWidth: { control: 'number', description: 'Width of the logo in pixels' },
    linkUrl: { control: 'text', description: 'URL the logo links to' },
    backgroundColor: { control: 'color', description: 'Background color of the logo section' },
  },
};

export const Default = {
  args: {
    promotionalText: 'This is a promotional message from Delmarva Power.',
    promotionalTextColor: '#333132',
    promotionalBackgroundColor: '#EEEEEE',
    logoUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
    logoAlt: 'Delmarva Power An Exelon Company logo',
    logoWidth: 143,
    linkUrl: 'https://www.delmarva.com',
    backgroundColor: '#14016c',
  },
};

export const CustomBranding = {
  args: {
    promotionalText: 'Special offer from Your Company!',
    promotionalTextColor: '#333132',
    promotionalBackgroundColor: '#f5f5f5',
    logoUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
    logoAlt: 'Custom Company Logo',
    logoWidth: 180,
    linkUrl: 'https://example.com',
    backgroundColor: '#6e06c1',
  },
};

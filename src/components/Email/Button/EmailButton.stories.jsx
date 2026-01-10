import { EmailButton } from './EmailButton';

export default {
  title: 'Email/Button',
  component: EmailButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Button text' },
    linkUrl: { control: 'text', description: 'URL the button links to' },
    backgroundColor: { control: 'color', description: 'Button background color' },
    textColor: { control: 'color', description: 'Button text color' },
    borderColor: { control: 'color', description: 'Button border color' },
    borderRadius: { control: 'number', description: 'Border radius in pixels' },
    width: { control: 'number', description: 'Button width in pixels' },
    height: { control: 'number', description: 'Button height in pixels' },
    fontSize: { control: 'number', description: 'Font size in pixels' },
    paddingTop: { control: 'number', description: 'Top padding in pixels' },
    paddingBottom: { control: 'number', description: 'Bottom padding in pixels' },
  },
};

export const Default = {
  args: {
    text: 'Opting Out Is Easy',
    linkUrl: 'https://www.delmarva.com',
    backgroundColor: '#6e06c1',
    textColor: '#ffffff',
    borderColor: '#6e06c1',
    borderRadius: 40,
    width: 240,
    height: 50,
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 30,
  },
};

export const Primary = {
  args: {
    text: 'Learn More',
    linkUrl: 'https://example.com',
    backgroundColor: '#14016c',
    textColor: '#ffffff',
    borderColor: '#14016c',
    borderRadius: 40,
    width: 200,
    height: 50,
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 30,
  },
};

export const Secondary = {
  args: {
    text: 'Get Started',
    linkUrl: 'https://example.com',
    backgroundColor: '#ffffff',
    textColor: '#6e06c1',
    borderColor: '#6e06c1',
    borderRadius: 40,
    width: 220,
    height: 50,
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 30,
  },
};

export const Large = {
  args: {
    text: 'Claim Your Rebate Now',
    linkUrl: 'https://example.com',
    backgroundColor: '#6e06c1',
    textColor: '#ffffff',
    borderColor: '#6e06c1',
    borderRadius: 50,
    width: 300,
    height: 60,
    fontSize: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
};

export const Square = {
  args: {
    text: 'Sign Up',
    linkUrl: 'https://example.com',
    backgroundColor: '#14016c',
    textColor: '#ffffff',
    borderColor: '#14016c',
    borderRadius: 5,
    width: 180,
    height: 45,
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
};

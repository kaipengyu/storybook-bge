import { Title } from './Title';

export default {
  title: 'Email/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headline: { control: 'text', description: 'Main headline text' },
    headlineColor: { control: 'color', description: 'Color of the headline' },
    headlineFontSize: { control: 'number', description: 'Font size in pixels' },
    headlineLineHeight: { control: 'number', description: 'Line height in pixels' },
    showTrademark: { control: 'boolean', description: 'Process ™ symbols with superscript' },
    backgroundColor: { control: 'color', description: 'Background color' },
    paddingTop: { control: 'number', description: 'Top padding in pixels' },
  },
};

export const Default = {
  args: {
    headline: "You've been selected to maximize your savings with location-based Energy Wise Rewards™.",
    headlineColor: '#160569',
    headlineFontSize: 24,
    headlineLineHeight: 32,
    showTrademark: true,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
};

export const CustomTitle = {
  args: {
    headline: 'Save More Energy Today!',
    headlineColor: '#14016c',
    headlineFontSize: 28,
    headlineLineHeight: 36,
    showTrademark: false,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
};

export const PromoTitle = {
  args: {
    headline: 'Limited Time Offer: Get $100 Back on Smart Thermostats™',
    headlineColor: '#6e06c1',
    headlineFontSize: 24,
    headlineLineHeight: 32,
    showTrademark: true,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
};

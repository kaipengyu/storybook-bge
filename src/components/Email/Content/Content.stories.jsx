import { Content } from './Content';

export default {
  title: 'Email/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Body text content' },
    textColor: { control: 'color', description: 'Text color' },
    fontSize: { control: 'number', description: 'Font size in pixels' },
    lineHeight: { control: 'number', description: 'Line height in pixels' },
    fontWeight: { 
      control: 'select', 
      options: ['normal', 'bold', 'lighter'],
      description: 'Font weight' 
    },
    textAlign: { 
      control: 'select', 
      options: ['left', 'center', 'right'],
      description: 'Text alignment' 
    },
    backgroundColor: { control: 'color', description: 'Background color' },
    paddingTop: { control: 'number', description: 'Top padding in pixels' },
  },
};

export const Default = {
  args: {
    text: 'Your existing thermostat or smart switch will be enrolled automatically, and you can earn up to $130 in bill credits per device each year. Your previously selected cycling level (50%, 75%, or 100%) will remain the same.',
    textColor: '#170d67',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: '#ffffff',
    paddingTop: 16,
  },
};

export const CenteredContent = {
  args: {
    text: 'Prefer not to make any changes?',
    textColor: '#160569',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
};

export const BoldContent = {
  args: {
    text: 'Important: This offer expires soon!',
    textColor: '#14016c',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
};

export const Disclaimer = {
  args: {
    text: 'Offer valid for residential customers only. Bill credits of up to $26 will be applied monthly for the demand response season from June through October.',
    textColor: '#333132',
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },
};

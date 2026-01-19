import { PDFToEmail } from './PDFToEmail';

export default {
  title: 'Email/PDFToEmail',
  component: PDFToEmail,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'AI-powered email template generator that transforms PDF designs into HTML email templates using Google Gemini.',
      },
    },
  },
};

export const Default = {
  args: {},
};

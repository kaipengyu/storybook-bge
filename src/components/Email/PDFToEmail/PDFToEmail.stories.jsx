import { PDFToEmail } from './PDFToEmail';

export default {
  title: 'Email/AI Email Generator',
  component: PDFToEmail,
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true, disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
    options: {
      showPanel: false,
    },
  },
  argTypes: {
    apiKey: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    apiKey: '',
  },
};

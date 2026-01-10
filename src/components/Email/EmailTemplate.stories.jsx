import { EmailTemplate } from './EmailTemplate';

export default {
  title: 'Email/Full Template',
  component: EmailTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Header
    headerPromotionalText: { control: 'text', description: 'Promotional message text above the logo' },
    headerLogoUrl: { control: 'text', description: 'Header logo URL' },
    headerLogoAlt: { control: 'text', description: 'Header logo alt text' },
    headerBackgroundColor: { control: 'color', description: 'Header background color' },
    headerLinkUrl: { control: 'text', description: 'Header logo link URL' },
    
    // Hero
    heroImageUrl: { control: 'text', description: 'Hero image URL (desktop)' },
    heroMobileImageUrl: { control: 'text', description: 'Hero image URL (mobile)' },
    heroAltText: { control: 'text', description: 'Hero image alt text' },
    heroLinkUrl: { control: 'text', description: 'Hero image link URL' },
    
    // Title
    titleText: { control: 'text', description: 'Main title/headline text' },
    titleColor: { control: 'color', description: 'Title text color' },
    
    // Content
    contentText: { control: 'text', description: 'Main body content text' },
    contentColor: { control: 'color', description: 'Content text color' },
    
    // Button
    buttonText: { control: 'text', description: 'CTA button text' },
    buttonLinkUrl: { control: 'text', description: 'CTA button link URL' },
    buttonBackgroundColor: { control: 'color', description: 'Button background color' },
    buttonTextColor: { control: 'color', description: 'Button text color' },
    
    // Footer
    companyName: { control: 'text', description: 'Company name' },
    companyAddress: { control: 'text', description: 'Company address' },
    copyrightYear: { control: 'text', description: 'Copyright year' },
    disclaimerText: { control: 'text', description: 'Disclaimer text' },
  },
};

export const Default = {
  args: {
    // Header
    headerPromotionalText: 'This is a promotional message from Delmarva Power.',
    headerLogoUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
    headerLogoAlt: 'Delmarva Power An Exelon Company logo',
    headerBackgroundColor: '#14016c',
    headerLinkUrl: 'https://www.delmarva.com',
    
    // Hero
    heroImageUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B195ff868-5780-49a0-b070-c25d3346908e%7D_hero.png',
    heroMobileImageUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B74547553-b9d8-4d06-a7e9-480ba5453378%7D_mobhero.png',
    heroAltText: 'Boost your savings without any extra effort. -Zoe, Your Good Energy Guide',
    heroLinkUrl: 'https://www.delmarva.com',
    
    // Title
    titleText: "You've been selected to maximize your savings with location-based Energy Wise Rewards™.",
    titleColor: '#160569',
    
    // Content
    contentText: 'Your existing thermostat or smart switch will be enrolled automatically, and you can earn up to $130 in bill credits per device each year. Your previously selected cycling level (50%, 75%, or 100%) will remain the same.',
    contentColor: '#170d67',
    
    // Button
    buttonText: 'Opting Out Is Easy',
    buttonLinkUrl: 'https://www.delmarva.com',
    buttonBackgroundColor: '#6e06c1',
    buttonTextColor: '#ffffff',
    
    // Footer
    companyName: 'Delmarva Power & Light Company',
    companyAddress: '500 N Wakefield Dr., Newark, DE 19702',
    copyrightYear: '2026',
    disclaimerText: 'Offer valid for Pepco residential customers in Maryland only. Bill credits of up to $26 will be applied monthly for the demand response season from June through October.',
  },
};

export const CustomPromotion = {
  args: {
    // Header
    headerPromotionalText: 'Special offer from Delmarva Power!',
    headerLogoUrl: 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
    headerLogoAlt: 'Delmarva Power An Exelon Company logo',
    headerBackgroundColor: '#6e06c1',
    headerLinkUrl: 'https://www.delmarva.com',
    
    // Hero
    heroImageUrl: 'https://via.placeholder.com/600x300/14016c/ffffff?text=Your+Custom+Hero+Image',
    heroMobileImageUrl: 'https://via.placeholder.com/600x400/14016c/ffffff?text=Mobile+Hero',
    heroAltText: 'Custom promotional message',
    heroLinkUrl: 'https://example.com',
    
    // Title
    titleText: 'Limited Time Offer: Save Big on Your Energy Bills!',
    titleColor: '#14016c',
    
    // Content
    contentText: 'Take advantage of our exclusive offer and start saving today. This promotion is available for a limited time only, so act now to secure your savings.',
    contentColor: '#14016c',
    
    // Button
    buttonText: 'Get Started Now',
    buttonLinkUrl: 'https://example.com/signup',
    buttonBackgroundColor: '#14016c',
    buttonTextColor: '#ffffff',
    
    // Footer
    companyName: 'Delmarva Power & Light Company',
    companyAddress: '500 N Wakefield Dr., Newark, DE 19702',
    copyrightYear: '2026',
    disclaimerText: 'This is a promotional offer. Terms and conditions apply. Contact customer service for more details.',
  },
};

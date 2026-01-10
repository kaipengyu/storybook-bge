import React, { useState } from 'react';
import { Header } from './Header';
import { HeroImage } from './HeroImage';
import { Title } from './Title';
import { Content } from './Content';
import { EmailButton } from './Button';
import { Footer } from './Footer';

/**
 * Full Email Template Component - Combines all email components
 * Users can customize each section and get the complete HTML code
 */
export const EmailTemplate = ({
  // Header props
  headerPromotionalText = 'This is a promotional message from Delmarva Power.',
  headerLogoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
  headerLogoAlt = 'Delmarva Power An Exelon Company logo',
  headerBackgroundColor = '#14016c',
  headerLinkUrl = '#',
  
  // Hero props
  heroImageUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B195ff868-5780-49a0-b070-c25d3346908e%7D_hero.png',
  heroMobileImageUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B74547553-b9d8-4d06-a7e9-480ba5453378%7D_mobhero.png',
  heroAltText = 'Boost your savings without any extra effort.',
  heroLinkUrl = '#',
  
  // Title props
  titleText = "You've been selected to maximize your savings with location-based Energy Wise Rewards™.",
  titleColor = '#160569',
  
  // Content props
  contentText = 'Your existing thermostat or smart switch will be enrolled automatically, and you can earn up to $130 in bill credits per device each year. Your previously selected cycling level (50%, 75%, or 100%) will remain the same.',
  contentColor = '#170d67',
  
  // Button props
  buttonText = 'Opting Out Is Easy',
  buttonLinkUrl = '#',
  buttonBackgroundColor = '#6e06c1',
  buttonTextColor = '#ffffff',
  
  // Footer props
  companyName = 'Delmarva Power & Light Company',
  companyAddress = '500 N Wakefield Dr., Newark, DE 19702',
  copyrightYear = '2026',
  disclaimerText = 'Offer valid for Pepco residential customers in Maryland only. Bill credits of up to $26 will be applied monthly for the demand response season from June through October.',
}) => {
  const [copied, setCopied] = useState(false);

  // Generate full HTML
  const fullHtml = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" lang="en">
<head>
<title>Email Template</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
body, html { margin: 0; padding: 0; background-color: #EEEEEE; font-family: Arial, Helvetica, sans-serif; }
table { border-spacing: 0; }
.mobile { width: 600px; max-width: 600px; }
.mobilepadd { padding-left: 30px; padding-right: 30px; }
@media screen and (max-width: 600px) {
  .mobile { width: 100% !important; max-width: 100% !important; }
  .mobilepadd { padding-left: 30px !important; padding-right: 30px !important; }
  .fluid-image { width: 100% !important; height: auto !important; }
  .disappear { display: none !important; }
  .show-mb { display: block !important; width: 100% !important; max-height: none !important; overflow: visible !important; }
}
</style>
</head>
<body style="width:100%; padding:0px; margin:0 auto; background: #EEEEEE;">

<table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
  <tbody>
    <tr>
      <td align="center" bgcolor="#EEEEEE" style="text-align: center; padding: 15px 0 0;">
        <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 600px; max-width: 600px;" width="600" bgcolor="#ffffff">
          <tbody>
${Header.getHtml({ promotionalText: headerPromotionalText, logoUrl: headerLogoUrl, logoAlt: headerLogoAlt, backgroundColor: headerBackgroundColor, linkUrl: headerLinkUrl })}
${HeroImage.getHtml({ imageUrl: heroImageUrl, mobileImageUrl: heroMobileImageUrl, altText: heroAltText, linkUrl: heroLinkUrl })}
${Title.getHtml({ headline: titleText, headlineColor: titleColor })}
${Content.getHtml({ text: contentText, textColor: contentColor })}
${EmailButton.getHtml({ text: buttonText, linkUrl: buttonLinkUrl, backgroundColor: buttonBackgroundColor, textColor: buttonTextColor })}
${Footer.getHtml({ companyName, companyAddress, copyrightYear, disclaimerText })}
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

</body>
</html>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="email-component" style={{ maxWidth: '700px' }}>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleCopy}
          style={{
            backgroundColor: copied ? '#28a745' : '#6e06c1',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s',
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Full HTML'}
        </button>
      </div>
      
      <div 
        className="email-preview"
        style={{ background: '#eeeeee', padding: '20px', borderRadius: '8px' }}
      >
        <table width="600" style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff' }}>
          <tbody>
            <tr>
              <td>
                <Header 
                  promotionalText={headerPromotionalText}
                  logoUrl={headerLogoUrl}
                  logoAlt={headerLogoAlt}
                  backgroundColor={headerBackgroundColor}
                  linkUrl={headerLinkUrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <HeroImage 
                  imageUrl={heroImageUrl}
                  mobileImageUrl={heroMobileImageUrl}
                  altText={heroAltText}
                  linkUrl={heroLinkUrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Title 
                  headline={titleText}
                  headlineColor={titleColor}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Content 
                  text={contentText}
                  textColor={contentColor}
                />
              </td>
            </tr>
            <tr>
              <td>
                <EmailButton 
                  text={buttonText}
                  linkUrl={buttonLinkUrl}
                  backgroundColor={buttonBackgroundColor}
                  textColor={buttonTextColor}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Footer 
                  companyName={companyName}
                  companyAddress={companyAddress}
                  copyrightYear={copyrightYear}
                  disclaimerText={disclaimerText}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <details className="email-code" style={{ marginTop: '0' }}>
        <summary>View Full HTML Code</summary>
        <pre><code>{fullHtml}</code></pre>
      </details>
    </div>
  );
};

export default EmailTemplate;

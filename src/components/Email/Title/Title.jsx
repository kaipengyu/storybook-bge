import React from 'react';

/**
 * Email Title Component - Headline and subhead text block
 */
export const Title = ({
  headline = "You've been selected to maximize your savings with location-based Energy Wise Rewards™.",
  headlineColor = '#160569',
  headlineFontSize = 24,
  headlineLineHeight = 32,
  showTrademark = true,
  backgroundColor = '#ffffff',
  paddingTop = 30,
}) => {
  // Handle trademark in headline
  const processedHeadline = showTrademark 
    ? headline.replace(/™/g, '<sup style="font-size:24px; line-height:0; vertical-align:5px; margin-left:-4px; font-family:Verdana, Geneva, sans-serif;">™</sup>')
    : headline;

  const html = `<!-- BEGIN: Title Block -->
<tr>
  <td style="height: ${paddingTop}px; max-height: ${paddingTop}px; min-height: ${paddingTop}px; line-height: ${paddingTop}px; mso-line-height-rule: exactly;">&nbsp;</td>
</tr>
<tr>
  <td align="center" style="width: 600px; max-width: 600px;" bgcolor="${backgroundColor}">
    <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 490px; max-width: 490px; min-width:490px; border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="490">
      <tbody>
        <tr>
          <td align="left" class="mobilepadd" style="font-size: ${headlineFontSize}px; line-height:${headlineLineHeight}px; padding-top: 13px; font-weight: bold; color: ${headlineColor}; font-family: Arial, Helvetica, sans-serif;">${processedHeadline}</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- END: Title Block -->`;

  return (
    <div className="email-component">
      <div 
        className="email-preview"
        dangerouslySetInnerHTML={{ __html: `<table width="600" style="max-width:600px;background:${backgroundColor};"><tbody>${html}</tbody></table>` }}
      />
      <details className="email-code">
        <summary>View HTML Code</summary>
        <pre><code>{html}</code></pre>
      </details>
    </div>
  );
};

Title.getHtml = (props = {}) => {
  const {
    headline = "You've been selected to maximize your savings with location-based Energy Wise Rewards™.",
    headlineColor = '#160569',
    headlineFontSize = 24,
    headlineLineHeight = 32,
    showTrademark = true,
    backgroundColor = '#ffffff',
    paddingTop = 30,
  } = props;

  const processedHeadline = showTrademark 
    ? headline.replace(/™/g, '<sup style="font-size:24px; line-height:0; vertical-align:5px; margin-left:-4px; font-family:Verdana, Geneva, sans-serif;">™</sup>')
    : headline;

  return `<!-- BEGIN: Title Block -->
<tr>
  <td style="height: ${paddingTop}px; max-height: ${paddingTop}px; min-height: ${paddingTop}px; line-height: ${paddingTop}px; mso-line-height-rule: exactly;">&nbsp;</td>
</tr>
<tr>
  <td align="center" style="width: 600px; max-width: 600px;" bgcolor="${backgroundColor}">
    <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 490px; max-width: 490px; min-width:490px; border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="490">
      <tbody>
        <tr>
          <td align="left" class="mobilepadd" style="font-size: ${headlineFontSize}px; line-height:${headlineLineHeight}px; padding-top: 13px; font-weight: bold; color: ${headlineColor}; font-family: Arial, Helvetica, sans-serif;">${processedHeadline}</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- END: Title Block -->`;
};

export default Title;

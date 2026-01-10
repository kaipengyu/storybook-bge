import React from 'react';

/**
 * Email Content Component - Body text block
 */
export const Content = ({
  text = 'Your existing thermostat or smart switch will be enrolled automatically, and you can earn up to $130 in bill credits per device each year. Your previously selected cycling level (50%, 75%, or 100%) will remain the same.',
  textColor = '#170d67',
  fontSize = 16,
  lineHeight = 22,
  fontWeight = 'normal',
  textAlign = 'left',
  backgroundColor = '#ffffff',
  paddingTop = 16,
}) => {
  const html = `<!-- BEGIN: Content Block -->
<tr>
  <td align="center" style="width: 600px; max-width: 600px;" bgcolor="${backgroundColor}">
    <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 490px; max-width: 490px; min-width:490px; border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="490">
      <tbody>
        <tr>
          <td align="${textAlign}" class="mobilepadd" style="font-size: ${fontSize}px; line-height: ${lineHeight}px; padding-top: ${paddingTop}px; font-weight: ${fontWeight}; color: ${textColor}; font-family: Arial, Helvetica, sans-serif;">${text}</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- END: Content Block -->`;

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

Content.getHtml = (props = {}) => {
  const {
    text = 'Your existing thermostat or smart switch will be enrolled automatically, and you can earn up to $130 in bill credits per device each year. Your previously selected cycling level (50%, 75%, or 100%) will remain the same.',
    textColor = '#170d67',
    fontSize = 16,
    lineHeight = 22,
    fontWeight = 'normal',
    textAlign = 'left',
    backgroundColor = '#ffffff',
    paddingTop = 16,
  } = props;

  return `<!-- BEGIN: Content Block -->
<tr>
  <td align="center" style="width: 600px; max-width: 600px;" bgcolor="${backgroundColor}">
    <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 490px; max-width: 490px; min-width:490px; border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="490">
      <tbody>
        <tr>
          <td align="${textAlign}" class="mobilepadd" style="font-size: ${fontSize}px; line-height: ${lineHeight}px; padding-top: ${paddingTop}px; font-weight: ${fontWeight}; color: ${textColor}; font-family: Arial, Helvetica, sans-serif;">${text}</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- END: Content Block -->`;
};

export default Content;

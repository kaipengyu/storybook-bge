import React from 'react';

/**
 * Email Header Component - Promotional message and brand logo section
 */
export const Header = ({
  promotionalText = 'This is a promotional message from Delmarva Power.',
  promotionalTextColor = '#333132',
  promotionalBackgroundColor = '#EEEEEE',
  logoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
  logoAlt = 'Delmarva Power An Exelon Company logo',
  logoWidth = 143,
  linkUrl = '#',
  backgroundColor = '#14016c',
}) => {
  const html = `<!-- HEADER START -->
<!-- Promotional Message -->
<tr>
  <td align="center" style="width: 600px; max-width: 600px;" bgcolor="${promotionalBackgroundColor}">
    <table bgcolor="${promotionalBackgroundColor}" role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 600px; max-width: 600px; min-width:600px; border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="600">
      <tbody>
        <tr>
          <td bgcolor="${promotionalBackgroundColor}" align="left" class="mobilepadd" style="font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:14px;text-align:left;color:${promotionalTextColor}; padding:15px 30px;">${promotionalText}</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- Brand Logo -->
<tr>
  <td align="left" bgcolor="${backgroundColor}" style="text-align: left;" class="mobile">
    <table role="presentation" bgcolor="${backgroundColor}" border="0" height="100" cellpadding="0" cellspacing="0" width="100%" class="headerlogo" style="border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
      <tbody>
        <tr>
          <td align="left" class="headerlogo" height="100" style="width: 600px; max-width: 600px; height: 100px; color:#ffffff; font-size:16px; font-weight:bold; font-family: Arial, Helvetica, sans-serif; padding-left: 20px;" valign="middle" width="600" bgcolor="${backgroundColor}">
            <a href="${linkUrl}" target="_blank" style="display:block;">
              <img src="${logoUrl}" alt="${logoAlt}" border="0" width="${logoWidth}" height="auto" style="border-width:0;width:${logoWidth}px;height:auto;display:block;"/>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- HEADER END -->`;

  return (
    <div className="email-component">
      <div 
        className="email-preview"
        dangerouslySetInnerHTML={{ __html: `<table width="600" style="max-width:600px;"><tbody>${html}</tbody></table>` }}
      />
      <details className="email-code">
        <summary>View HTML Code</summary>
        <pre><code>{html}</code></pre>
      </details>
    </div>
  );
};

Header.getHtml = (props = {}) => {
  const {
    promotionalText = 'This is a promotional message from Delmarva Power.',
    promotionalTextColor = '#333132',
    promotionalBackgroundColor = '#EEEEEE',
    logoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B6bac3225-1564-4aa9-ba6b-336e57ad5207%7D_dp_logo_hrz_r_wht_rgb_286.png',
    logoAlt = 'Delmarva Power An Exelon Company logo',
    logoWidth = 143,
    linkUrl = '#',
    backgroundColor = '#14016c',
  } = props;

  return `<!-- HEADER START -->
<!-- Promotional Message -->
<tr>
  <td align="center" style="width: 600px; max-width: 600px;" bgcolor="${promotionalBackgroundColor}">
    <table bgcolor="${promotionalBackgroundColor}" role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="mobile" style="width: 600px; max-width: 600px; min-width:600px; border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="600">
      <tbody>
        <tr>
          <td bgcolor="${promotionalBackgroundColor}" align="left" class="mobilepadd" style="font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:14px;text-align:left;color:${promotionalTextColor}; padding:15px 30px;">${promotionalText}</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- Brand Logo -->
<tr>
  <td align="left" bgcolor="${backgroundColor}" style="text-align: left;" class="mobile">
    <table role="presentation" bgcolor="${backgroundColor}" border="0" height="100" cellpadding="0" cellspacing="0" width="100%" class="headerlogo" style="border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
      <tbody>
        <tr>
          <td align="left" class="headerlogo" height="100" style="width: 600px; max-width: 600px; height: 100px; color:#ffffff; font-size:16px; font-weight:bold; font-family: Arial, Helvetica, sans-serif; padding-left: 20px;" valign="middle" width="600" bgcolor="${backgroundColor}">
            <a href="${linkUrl}" target="_blank" style="display:block;">
              <img src="${logoUrl}" alt="${logoAlt}" border="0" width="${logoWidth}" height="auto" style="border-width:0;width:${logoWidth}px;height:auto;display:block;"/>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- HEADER END -->`;
};

export default Header;

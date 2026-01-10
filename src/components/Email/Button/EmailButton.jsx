import React from 'react';

/**
 * Email Button Component - CTA button with VML fallback for Outlook
 */
export const EmailButton = ({
  text = 'Opting Out Is Easy',
  linkUrl = '#',
  backgroundColor = '#6e06c1',
  textColor = '#ffffff',
  borderColor = '#6e06c1',
  borderRadius = 40,
  width = 240,
  height = 50,
  fontSize = 18,
  paddingTop = 30,
  paddingBottom = 30,
}) => {
  const html = `<!-- BEGIN: Button Block -->
<tr>
  <td align="center" class="mobilepadd" style="width: 220px; padding-top: ${paddingTop}px; padding-bottom: ${paddingBottom}px">
    <table role="button" cellpadding="0" cellspacing="0" style="border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
      <tbody>
        <tr>
          <td align="center" valign="top">
            <div>
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${linkUrl}" style="height:${height}px;v-text-anchor:middle;width:${width}px;" arcsize="${Math.round((borderRadius / height) * 100)}%" strokecolor="${borderColor}" fillcolor="${backgroundColor}">
                <w:anchorlock/>
                <center style="color:${textColor};font-family:sans-serif;font-size:${fontSize}px;font-weight:bold;">${text}</center>
              </v:roundrect>
              <![endif]-->
              <a href="${linkUrl}" style="background-color: ${backgroundColor}; border:1px solid ${borderColor}; border-radius: ${borderRadius}px; color: ${textColor}; display: inline-block; font-family: sans-serif; font-size: ${fontSize}px; font-weight: bold; line-height: ${height}px; text-align: center; text-decoration: none; width: ${width}px;-webkit-text-size-adjust: none; mso-hide: all;" target="_blank">${text}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- END: Button Block -->`;

  return (
    <div className="email-component">
      <div 
        className="email-preview"
        dangerouslySetInnerHTML={{ __html: `<table width="600" style="max-width:600px;background:#ffffff;"><tbody>${html}</tbody></table>` }}
      />
      <details className="email-code">
        <summary>View HTML Code</summary>
        <pre><code>{html}</code></pre>
      </details>
    </div>
  );
};

EmailButton.getHtml = (props = {}) => {
  const {
    text = 'Opting Out Is Easy',
    linkUrl = '#',
    backgroundColor = '#6e06c1',
    textColor = '#ffffff',
    borderColor = '#6e06c1',
    borderRadius = 40,
    width = 240,
    height = 50,
    fontSize = 18,
    paddingTop = 30,
    paddingBottom = 30,
  } = props;

  return `<!-- BEGIN: Button Block -->
<tr>
  <td align="center" class="mobilepadd" style="width: 220px; padding-top: ${paddingTop}px; padding-bottom: ${paddingBottom}px">
    <table role="button" cellpadding="0" cellspacing="0" style="border-spacing: 0; mso-line-height-rule: exactly; mso-margin-bottom-alt: 0; mso-margin-top-alt: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
      <tbody>
        <tr>
          <td align="center" valign="top">
            <div>
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${linkUrl}" style="height:${height}px;v-text-anchor:middle;width:${width}px;" arcsize="${Math.round((borderRadius / height) * 100)}%" strokecolor="${borderColor}" fillcolor="${backgroundColor}">
                <w:anchorlock/>
                <center style="color:${textColor};font-family:sans-serif;font-size:${fontSize}px;font-weight:bold;">${text}</center>
              </v:roundrect>
              <![endif]-->
              <a href="${linkUrl}" style="background-color: ${backgroundColor}; border:1px solid ${borderColor}; border-radius: ${borderRadius}px; color: ${textColor}; display: inline-block; font-family: sans-serif; font-size: ${fontSize}px; font-weight: bold; line-height: ${height}px; text-align: center; text-decoration: none; width: ${width}px;-webkit-text-size-adjust: none; mso-hide: all;" target="_blank">${text}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<!-- END: Button Block -->`;
};

export default EmailButton;

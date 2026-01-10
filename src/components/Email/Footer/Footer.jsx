import React from 'react';

/**
 * Email Footer Component - Footer with logos, disclaimer, social icons, and legal links
 */
export const Footer = ({
  // Logo settings
  logoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7Bddcc6df9-5abb-40c7-887c-c0f511a4af02%7D_dp_logo_hrz_sm_pos_rgb_g_dm_286.png',
  logoAlt = 'Delmarva Power An Exelon Company logo',
  logoLinkUrl = '#',
  secondaryLogoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B99bafd08-6966-45ad-9d81-f03b0a6809cc%7D_EmPOWER-MD-logo-final-rgb_g_dm_90.png',
  secondaryLogoAlt = 'Empower Maryland logo',
  secondaryLogoLinkUrl = '#',
  // Disclaimer text
  disclaimerText = 'Offer valid for Pepco residential customers in Maryland only. Bill credits of up to $26 will be applied monthly for the demand response season from June through October. Customers can opt out of up to two events per season by calling 866-353-5798.',
  additionalText = 'EmPOWER Maryland programs are funded by a charge on your energy bill. EmPOWER programs can help you reduce your energy consumption and save you money.',
  learnMoreUrl = '#',
  learnMoreText = 'here',
  // Social links
  facebookUrl = '#',
  twitterUrl = '#',
  linkedinUrl = '#',
  // Footer links
  unsubscribeUrl = '#',
  termsUrl = '#',
  privacyUrl = '#',
  viewInBrowserUrl = '#',
  // Company info
  companyName = 'Delmarva Power & Light Company',
  companyAddress = '500 N Wakefield Dr., Newark, DE 19702',
  copyrightYear = '2026',
  backgroundColor = '#eeeeee',
}) => {
  const html = `<!-- BEGIN: Footer -->
<!-- Footer Logos -->
<tr>
  <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table align="center" cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing:0;margin:0 auto;width:100%;max-width:600px;">
        <tr>
          <td align="left" valign="top" style="text-align:left;padding:30px 15px;">
            <table cellpadding="0" cellspacing="0" border="0" class="center">
              <tr>
                <td valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" align="left" style="border-spacing:0;margin:0 auto;">
                    <tr>
                      <td align="left">
                        <a href="${logoLinkUrl}" target="_blank" style="display:block;">
                          <img src="${logoUrl}" alt="${logoAlt}" border="0" width="143" height="auto" style="border-width:0;width:143px;height:auto;display:block;"/>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="340" style="width:340px;"></td>
                <td valign="middle">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;width:100%;max-width:90px;">
                    <tr>
                      <td align="right" valign="middle">
                        <a href="${secondaryLogoLinkUrl}" target="_blank" style="display:block;">
                          <img src="${secondaryLogoUrl}" alt="${secondaryLogoAlt}" border="0" width="90" height="auto" style="border-width:0;width:90px;height:auto;display:block;"/>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </td>
</tr>

<!-- Disclaimer Text -->
<tr>
  <td class="mobilepadd" align="center" style="padding: 0px 55px 5px 55px; text-align:left; color:#333132; font-size:10px; font-weight:normal; font-family:Arial, Helvetica, sans-serif; line-height: 14px;">
    ${disclaimerText}
  </td>
</tr>

<tr>
  <td class="mobilepadd" align="center" style="padding: 0px 55px 20px 55px; text-align:left; color:#333132; font-size:10px; font-weight:normal; font-family:Arial, Helvetica, sans-serif; line-height: 14px;">
    ${additionalText} Click <a href="${learnMoreUrl}" target="_blank" style="color: #333132; text-decoration: underline;">${learnMoreText}</a> to learn more about EmPOWER and how you can participate.
  </td>
</tr>
<!-- END: Footer -->

<!-- Social Icons and Legal Links -->
<tr>
  <td colspan="100%">
    <table align="center" bgcolor="${backgroundColor}" border="0" cellpadding="0" cellspacing="0" style="width:100%;background-color:${backgroundColor};">
      <tbody>
        <tr class="hideicons">
          <td align="center" style="padding-top:20px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="hideicons">
              <tbody>
                <tr style="display: inline-block">
                  <th style="padding:4px;"><a href="${facebookUrl}" target="_blank"><img alt="Facebook" border="0" src="https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B69b84a91-cfca-4cad-ab39-63a0d2acc784%7D_Facebook_Logo_DM.png" width="24" /></a></th>
                  <th style="padding:4px 12px;"><a href="${twitterUrl}" target="_blank"><img alt="Twitter" border="0" src="https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B8fc58551-bc91-442a-b89b-b4222a758958%7D_logo-black_Grey_DM.png" width="23" /></a></th>
                  <th style="padding:4px;"><a href="${linkedinUrl}" target="_blank"><img alt="LinkedIn" border="0" src="https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7Bd36adccb-8d2b-4f79-9180-fff34905de1e%7D_LinkedIn_Logo_Grey_DM.png" width="28" /></a></th>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td class="text-white" style="font-family:arial,helvetica,sans-serif;text-align: center;font-size:12px;padding:20px 30px 40px;color:#333132;">
            <p style="margin:0;">To unsubscribe or manage your subscriptions, please click <a href="${unsubscribeUrl}" style="text-decoration:underline;color:#333132;font-weight:400;" title="Preference Center">here</a>.</p>
            <p style="margin:0;">&nbsp;</p>
            <p class="text-white" style="margin:0;"><a href="${termsUrl}" style="text-decoration:underline;color:#333132;font-weight:400;">Terms of Use</a> | <a href="${privacyUrl}" style="text-decoration:underline;color:#333132;font-weight:400;">Privacy Policy</a> | <a href="${viewInBrowserUrl}" style="text-decoration:underline;color:#333132;font-weight:400;">View in Browser</a></p>
            <p style="margin:0;">&nbsp;</p>
            <p class="text-white" style="margin:0;">${companyName}</p>
            <p class="text-white" style="margin:0;">${companyAddress}</p>
            <p class="text-white" style="margin:0;">© ${companyName}, ${copyrightYear}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>`;

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

Footer.getHtml = (props = {}) => {
  const {
    logoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7Bddcc6df9-5abb-40c7-887c-c0f511a4af02%7D_dp_logo_hrz_sm_pos_rgb_g_dm_286.png',
    logoAlt = 'Delmarva Power An Exelon Company logo',
    logoLinkUrl = '#',
    secondaryLogoUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B99bafd08-6966-45ad-9d81-f03b0a6809cc%7D_EmPOWER-MD-logo-final-rgb_g_dm_90.png',
    secondaryLogoAlt = 'Empower Maryland logo',
    secondaryLogoLinkUrl = '#',
    disclaimerText = 'Offer valid for Pepco residential customers in Maryland only. Bill credits of up to $26 will be applied monthly for the demand response season from June through October. Customers can opt out of up to two events per season by calling 866-353-5798.',
    additionalText = 'EmPOWER Maryland programs are funded by a charge on your energy bill. EmPOWER programs can help you reduce your energy consumption and save you money.',
    learnMoreUrl = '#',
    learnMoreText = 'here',
    facebookUrl = '#',
    twitterUrl = '#',
    linkedinUrl = '#',
    unsubscribeUrl = '#',
    termsUrl = '#',
    privacyUrl = '#',
    viewInBrowserUrl = '#',
    companyName = 'Delmarva Power & Light Company',
    companyAddress = '500 N Wakefield Dr., Newark, DE 19702',
    copyrightYear = '2026',
    backgroundColor = '#eeeeee',
  } = props;

  return `<!-- BEGIN: Footer -->
<!-- Footer Logos -->
<tr>
  <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table align="center" cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing:0;margin:0 auto;width:100%;max-width:600px;">
        <tr>
          <td align="left" valign="top" style="text-align:left;padding:30px 15px;">
            <table cellpadding="0" cellspacing="0" border="0" class="center">
              <tr>
                <td valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" align="left" style="border-spacing:0;margin:0 auto;">
                    <tr>
                      <td align="left">
                        <a href="${logoLinkUrl}" target="_blank" style="display:block;">
                          <img src="${logoUrl}" alt="${logoAlt}" border="0" width="143" height="auto" style="border-width:0;width:143px;height:auto;display:block;"/>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="340" style="width:340px;"></td>
                <td valign="middle">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;width:100%;max-width:90px;">
                    <tr>
                      <td align="right" valign="middle">
                        <a href="${secondaryLogoLinkUrl}" target="_blank" style="display:block;">
                          <img src="${secondaryLogoUrl}" alt="${secondaryLogoAlt}" border="0" width="90" height="auto" style="border-width:0;width:90px;height:auto;display:block;"/>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </td>
</tr>

<!-- Disclaimer Text -->
<tr>
  <td class="mobilepadd" align="center" style="padding: 0px 55px 5px 55px; text-align:left; color:#333132; font-size:10px; font-weight:normal; font-family:Arial, Helvetica, sans-serif; line-height: 14px;">
    ${disclaimerText}
  </td>
</tr>

<tr>
  <td class="mobilepadd" align="center" style="padding: 0px 55px 20px 55px; text-align:left; color:#333132; font-size:10px; font-weight:normal; font-family:Arial, Helvetica, sans-serif; line-height: 14px;">
    ${additionalText} Click <a href="${learnMoreUrl}" target="_blank" style="color: #333132; text-decoration: underline;">${learnMoreText}</a> to learn more about EmPOWER and how you can participate.
  </td>
</tr>
<!-- END: Footer -->

<!-- Social Icons and Legal Links -->
<tr>
  <td colspan="100%">
    <table align="center" bgcolor="${backgroundColor}" border="0" cellpadding="0" cellspacing="0" style="width:100%;background-color:${backgroundColor};">
      <tbody>
        <tr class="hideicons">
          <td align="center" style="padding-top:20px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="hideicons">
              <tbody>
                <tr style="display: inline-block">
                  <th style="padding:4px;"><a href="${facebookUrl}" target="_blank"><img alt="Facebook" border="0" src="https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B69b84a91-cfca-4cad-ab39-63a0d2acc784%7D_Facebook_Logo_DM.png" width="24" /></a></th>
                  <th style="padding:4px 12px;"><a href="${twitterUrl}" target="_blank"><img alt="Twitter" border="0" src="https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B8fc58551-bc91-442a-b89b-b4222a758958%7D_logo-black_Grey_DM.png" width="23" /></a></th>
                  <th style="padding:4px;"><a href="${linkedinUrl}" target="_blank"><img alt="LinkedIn" border="0" src="https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7Bd36adccb-8d2b-4f79-9180-fff34905de1e%7D_LinkedIn_Logo_Grey_DM.png" width="28" /></a></th>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td class="text-white" style="font-family:arial,helvetica,sans-serif;text-align: center;font-size:12px;padding:20px 30px 40px;color:#333132;">
            <p style="margin:0;">To unsubscribe or manage your subscriptions, please click <a href="${unsubscribeUrl}" style="text-decoration:underline;color:#333132;font-weight:400;" title="Preference Center">here</a>.</p>
            <p style="margin:0;">&nbsp;</p>
            <p class="text-white" style="margin:0;"><a href="${termsUrl}" style="text-decoration:underline;color:#333132;font-weight:400;">Terms of Use</a> | <a href="${privacyUrl}" style="text-decoration:underline;color:#333132;font-weight:400;">Privacy Policy</a> | <a href="${viewInBrowserUrl}" style="text-decoration:underline;color:#333132;font-weight:400;">View in Browser</a></p>
            <p style="margin:0;">&nbsp;</p>
            <p class="text-white" style="margin:0;">${companyName}</p>
            <p class="text-white" style="margin:0;">${companyAddress}</p>
            <p class="text-white" style="margin:0;">© ${companyName}, ${copyrightYear}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>`;
};

export default Footer;

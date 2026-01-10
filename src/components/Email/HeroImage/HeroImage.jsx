import React from 'react';

/**
 * Email Hero Image Component - Full width hero image
 */
export const HeroImage = ({
  imageUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B195ff868-5780-49a0-b070-c25d3346908e%7D_hero.png',
  mobileImageUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B74547553-b9d8-4d06-a7e9-480ba5453378%7D_mobhero.png',
  altText = 'Hero image',
  linkUrl = '#',
  width = 600,
}) => {
  const html = `<!-- BEGIN: Hero Image – Full Width Image Block -->
<tr>
  <td align="center" class="disappear">
    <a href="${linkUrl}" target="_blank" style="display:block;">
      <img src="${imageUrl}" alt="${altText}" width="${width}" class="fluid-image" style="border-width:0;width:${width}px;height:auto;display:block;" border="0"/>
    </a>
  </td>
</tr>
<!--[if !mso]><!-->
<tr>
  <td align="center">
    <div class="show-mb" style="display:none;width:0;overflow:hidden;float:left;max-height:0;">
      <a href="${linkUrl}" target="_blank" style="display:block;">
        <img src="${mobileImageUrl}" alt="${altText}" width="${width}" class="fluid-image appear" style="display:block;height:auto;max-width:${width}px;border:none;" border="0"/>
      </a>
    </div>
  </td>
</tr>
<!--<![endif]-->
<!-- END: Hero Image -->`;

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

HeroImage.getHtml = (props = {}) => {
  const {
    imageUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B195ff868-5780-49a0-b070-c25d3346908e%7D_hero.png',
    mobileImageUrl = 'https://img04.en25.com/EloquaImages/clients/PepcoHoldingsInc/%7B74547553-b9d8-4d06-a7e9-480ba5453378%7D_mobhero.png',
    altText = 'Hero image',
    linkUrl = '#',
    width = 600,
  } = props;

  return `<!-- BEGIN: Hero Image – Full Width Image Block -->
<tr>
  <td align="center" class="disappear">
    <a href="${linkUrl}" target="_blank" style="display:block;">
      <img src="${imageUrl}" alt="${altText}" width="${width}" class="fluid-image" style="border-width:0;width:${width}px;height:auto;display:block;" border="0"/>
    </a>
  </td>
</tr>
<!--[if !mso]><!-->
<tr>
  <td align="center">
    <div class="show-mb" style="display:none;width:0;overflow:hidden;float:left;max-height:0;">
      <a href="${linkUrl}" target="_blank" style="display:block;">
        <img src="${mobileImageUrl}" alt="${altText}" width="${width}" class="fluid-image appear" style="display:block;height:auto;max-width:${width}px;border:none;" border="0"/>
      </a>
    </div>
  </td>
</tr>
<!--<![endif]-->
<!-- END: Hero Image -->`;
};

export default HeroImage;

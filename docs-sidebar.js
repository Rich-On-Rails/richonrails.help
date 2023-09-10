/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/**
 * @param {string} title
 * @returns {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarItemHtml}
 */
const unavailable = title => ({
  type: 'html',
  value: title,
  className: 'menu__link menu__link--unavailable',
  defaultStyle: true,
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'welcome',
    'planet/demo',
    {
      type: 'category',
      label: 'Planet 1',
      collapsible: false,
      items: [        
        'planet/demo',
        'planet/demo',        
      ],
    },
    {
      type: 'category',
      label: 'Loco Prep',
      link: {
        type: 'doc',
        id: 'planet/demo',
      },
      collapsed: true,
      items: [
        'planet/demo',
        'planet/demo',        
      ],
    },   
    
  ],
};
module.exports = sidebars;

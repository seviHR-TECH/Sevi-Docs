/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  Developer: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

/**module.exports = {
  Buyer: [
    'introduction',
    {
      type: 'category',
      label: 'Buyer',
      collapsed: false,
      items: [
        'Buyer protection',
        'FAQ',
        'Funding wallet',
        'Notifications',
      ],
    },
    {
      type: 'category',
      label: 'Mobile app',
      collapsed: false,
      items: [
          'Group',
          'Register',
          'Technical',
          ],
        },
      ],
  Seller: [
    'customers',
    'intro',
    'transactions',
  ],
};
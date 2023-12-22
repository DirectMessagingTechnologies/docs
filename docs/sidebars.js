/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro-dmt',
    // 'hello',
    {
      type: 'category',
      label: 'Docs',
      collapsible:true,
      collapsed:false,
      items: [
        {
          type: "category",
          label: "API",
          collapsible:true,
          collapsed:true,
          items:[
            "api/api-overview",
            {
              type:"category",
              label:"Creator Analytics",
              collapsible: true,
              collapsed: false,
              items:[
                "api/api-estimator",
                "api/api-finder",
                // "api/api-audience"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Apps",
          collapsible:true,
          collapsed:true,
          items:[
            {
              type:"category",
              label:"Google Sheets Creator Data",
              collapsible:true,
              collapsed:true,
              items:[
                "apps/gsheets-overview",
                "apps/gsheets-faq",
                "apps/gsheets-help-support",
                "apps/gsheets-service-terms",
                "apps/gsheets-privacy-policy",
                
              ]
            }
          ]
      },      
      ],
    }
  ],
  
};

export default sidebars;
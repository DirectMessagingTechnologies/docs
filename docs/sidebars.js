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
      items: ['tutorial-basics/create-a-document'],
    },
    {
      type: 'category',
      label: 'Additional',
      items: []
    }
  ],
  
};

export default sidebars;

// someSidebar: [
//   {
//     type: "category",
//     collapsible: false,
//     collapsed: false,
//     label: "Get Started",
//     items: [
//       "index",
//       "getting_started",
//       {
//         type: "category",
//         label: "User Workflow Guides",
//         collapsible: true,
//         collapsed: true,
//         items: [
//           "team_accountability",
//           "executive_reporting",
//           "hidden_costs",
//         ],
//       },
//     ],
//   },
//   {
//     type: "category",
//     collapsible: false,
//     collapsed: false,
//     label: "Security and Access",
//     items: [
//       "security",
//       "vantage_account",
//       "sso",
//       "rbac",
//       "workspaces",
//     ],
//   },
//   {
//     type: "category",
//     collapsible: false,
//     collapsed: false,
//     label: "API and Terraform",
//     items: [
//       "terraform",
//       "vql",
//       "data_dictionary",
//     ],     
//   },
//   {
//     type: "category",
//     collapsible: false,
//     collapsed: false,
//     label: "Integrations",
//     items: [
//       {
//         type: "category",
//         label: "AWS",
//         items: [
//           "connecting_aws", 
//           "permissions_aws", 
//           "supported_services"
//         ],
//       },
//       {
//         type: "category",
//         label: "Azure",
//         items: [
//           "connecting_azure", 
//           "azure_supported_services"
//         ],
//       },
//       {
//         type: "category",
//         label: "Google Cloud",
//         items: [
//           "connecting_gcp",
//           "enabling_gcp_billing_export",
//         ],
//       },
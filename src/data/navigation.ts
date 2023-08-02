// demos links
const demos = [
  { id: 1, url: '/demo-1', title: 'Demo I', thumnail: 'mi1' },
  { id: 2, url: '/demo-2', title: 'Demo II', thumnail: 'mi2' },
  { id: 3, url: '/demo-3', title: 'Demo III', thumnail: 'mi3' },
  { id: 4, url: '/demo-4', title: 'Demo VI', thumnail: 'mi4' },
  { id: 5, url: '/demo-5', title: 'Demo V', thumnail: 'mi5' },
  { id: 6, url: '/demo-6', title: 'Demo VI', thumnail: 'mi6' },
];

// pages navigations
const navlinks = [
  { id: 211, title: 'Home', url: '/' },
  { id: 221, title: 'About', url: '/about' },
  { id: 231, title: 'Gallery', url: '/gallery' },
  { id: 211, title: 'Facilities', url: '/facilities' },
  { id: 263, title: 'Events', url: '/programevents' },
  { id: 263, title: 'News', url: '/news' },
  { id: 243, title: 'Contact', url: '/contact' },  
  // { id: 265, title: 'Register', url: '/register' },
  // { id: 251, title: 'Job Listing I', url: '/career-1' },
  // { id: 266, title: 'Terms & Condition', url: '/terms' }
];

let ourfeatures = [
  "Transportation Facilities"
]

// projects pages link
const projectsNavigation = [
  {
    title: 'PROJECT PAGES',
    children: [
      { id: 1, title: 'Project I', url: '/projects-1' },
      { id: 2, title: 'Project II', url: '/projects-2' },
      { id: 3, title: 'Project III', url: '/projects-3' },
      { id: 4, title: 'Project VI', url: '/projects-4' }
    ]
  },
  {
    title: 'SINGLE PROJECTS',
    children: [
      { id: 1, title: 'Single Project I', url: '/single-project-1' },
      { id: 2, title: 'Single Project II', url: '/single-project-2' },
      { id: 3, title: 'Single Project III', url: '/single-project-3' },
      { id: 4, title: 'Single Project VI', url: '/single-project-4' }
    ]
  }
];

// blog pages links
const blogsNavigation = [
  { id: 1, url: '/blog-1', title: 'Blog without Sidebar' },
  { id: 2, url: '/blog-2', title: 'Blog with Sidebar' },
  { id: 3, url: '/blog-3', title: 'Blog with Left Sidebar' },
  {
    id: 4,
    url: null,
    title: 'Blog Posts',
    children: [
      { id: 41, url: '/blog-details-1', title: 'Post without Sidebar' },
      { id: 42, url: '/blog-details-2', title: 'Post with Sidebar' },
      { id: 43, url: '/blog-details-3', title: 'Post with Left Sidebar' }
    ]
  }
];

// documentation pages links
const documentionNavigation = {
  usage: [
    { id: 1, title: 'Get Started', url: '/docs' },
    // { id: 2, title: 'Forms', url: '#' },
    { id: 3, title: 'FAQ', url: '/docs/faq' },
    { id: 4, title: 'Changelog', url: '/docs/changelog' },
    { id: 5, title: 'Credits', url: '/docs/credits' }
  ],
  styleguide: [
    { id: 0, title: 'Theme', url: '/docs/styleguide/theme' },
    { id: 1, title: 'Colors', url: '/docs/styleguide/colors' },
    { id: 2, title: 'Fonts', url: '/docs/styleguide/fonts' },
    { id: 3, title: 'SVG Icons', url: '/docs/styleguide/svg-icons' },
    { id: 4, title: 'Font Icons', url: '/docs/styleguide/font-icons' },
    { id: 5, title: 'Illustrations', url: '/docs/styleguide/illustrations' },
    { id: 6, title: 'Backgrounds', url: '/docs/styleguide/backgrounds' },
    { id: 7, title: 'Misc', url: '/docs/styleguide/misc' }
  ],
  elements: [
    { id: 1, title: 'Accordion', url: '/docs/elements/accordions' },
    { id: 2, title: 'Alerts', url: '/docs/elements/alerts' },
    { id: 3, title: 'Animations', url: '/docs/elements/animations' },
    { id: 4, title: 'Avatars', url: '/docs/elements/avatars' },
    { id: 5, title: 'Background', url: '/docs/elements/background' },
    { id: 6, title: 'Badges', url: '/docs/elements/badges' },
    { id: 7, title: 'Buttons', url: '/docs/elements/buttons' },
    { id: 8, title: 'Card', url: '/docs/elements/card' },
    { id: 9, title: 'Carousel', url: '/docs/elements/carousel' },
    { id: 10, title: 'Dividers', url: '/docs/elements/dividers' },
    { id: 11, title: 'Form Elements', url: '/docs/elements/form-elements' },
    { id: 12, title: 'Image Hover', url: '/docs/elements/image-hover' },
    { id: 13, title: 'Image Mask', url: '/docs/elements/image-mask' },
    { id: 14, title: 'Lightbox', url: '/docs/elements/lightbox' },
    { id: 15, title: 'Media Player', url: '/docs/elements/media-player' },
    { id: 16, title: 'Modal', url: '/docs/elements/modal' },
    { id: 17, title: 'Pagination', url: '/docs/elements/pagination' },
    { id: 18, title: 'Progressbar', url: '/docs/elements/progressbar' },
    { id: 19, title: 'Shadows', url: '/docs/elements/shadows' },
    { id: 20, title: 'Shapes', url: '/docs/elements/shapes' },
    { id: 21, title: 'Tables', url: '/docs/elements/tables' },
    { id: 22, title: 'Tabs', url: '/docs/elements/tabs' },
    { id: 23, title: 'Text Animations', url: '/docs/elements/text-animation' },
    { id: 24, title: 'Text Highlight', url: '/docs/elements/text-highlight' },
    { id: 25, title: 'Tiles', url: '/docs/elements/tiles' },
    // { id: 26, title: 'Tooltips & Popovers', url: '/docs/elements/tooltips-popovers' },
    { id: 27, title: 'Typography', url: '/docs/elements/typography' }
  ]
};

// blocks pages links
const blocksNavigation = [
  { id: 1, url: '/docs/blocks/about', title: 'About', thumnail: '/img/demos/block1.svg' },
  { id: 2, url: '/docs/blocks/blog', title: 'Blog', thumnail: '/img/demos/block2.svg' },
  { id: 3, url: '/docs/blocks/call-to-action', title: 'Call to Action', thumnail: '/img/demos/block3.svg' },
  { id: 4, url: '/docs/blocks/clients', title: 'Clients', thumnail: '/img/demos/block4.svg' },
  { id: 5, url: '/docs/blocks/contact', title: 'Contact', thumnail: '/img/demos/block5.svg' },
  { id: 6, url: '/docs/blocks/facts', title: 'Facts', thumnail: '/img/demos/block6.svg' },
  { id: 7, url: '/docs/blocks/faq', title: 'FAQ', thumnail: '/img/demos/block7.svg' },
  { id: 8, url: '/docs/blocks/features', title: 'Features', thumnail: '/img/demos/block8.svg' },
  { id: 9, url: '/docs/blocks/footer', title: 'Footer', thumnail: '/img/demos/block9.svg' },
  { id: 10, url: '/docs/blocks/hero', title: 'Hero', thumnail: '/img/demos/block10.svg' },
  { id: 11, url: '/docs/blocks/navbar', title: 'Navbar', thumnail: '/img/demos/block11.svg' },
  { id: 12, url: '/docs/blocks/portfolio', title: 'Portfolio', thumnail: '/img/demos/block12.svg' },
  { id: 13, url: '/docs/blocks/pricing', title: 'Pricing', thumnail: '/img/demos/block13.svg' },
  { id: 14, url: '/docs/blocks/process', title: 'Process', thumnail: '/img/demos/block14.svg' },
  { id: 15, url: '/docs/blocks/team', title: 'Team', thumnail: '/img/demos/block15.svg' },
  { id: 16, url: '/docs/blocks/testimonials', title: 'Testimonials', thumnail: '/img/demos/block16.svg' }
];

export { demos, navlinks, projectsNavigation, blogsNavigation, documentionNavigation, blocksNavigation,ourfeatures };

module.exports = {
  siteTitle: "A History of Race & Resistance", // Site title.

  sitePreTitle: "A History of",
  siteTitleAlt: "GatsbyJS Casper Theme Starter", // Alternative site title for SEO.
  siteLogohE:
    "/logos/hE-logo-white-croped.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteLogoConsented:
    "/logos/consented-logo-white.png",
  siteLogoFist:
    "/logos/resistance-hand-white.png",
  siteUrl: "https://haysclark.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-starter-casper", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "9th - 10th August 2018 at SOAS", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://www.facebook.com/events/427941207654599/",
/*
    "https://www.google.co.uk/maps/dir/''/soas+university+of+london/@51.5223291,-0.1992985,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48761b31db1e0f19:0x14db538713f5b80b!2m2!1d-0.129259!2d51.52235",
*/
    "https://www.eventbrite.co.uk/e/a-history-of-race-resistance-in-britain-tickets-46437967210?aff=eac2"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/events/427941207654599/",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    /*{
      label: "Location",
      url: "https://www.google.co.uk/maps/place/SOAS+University+of+London/@51.5224686,-0.1313338,17z/data=!4m5!3m4!1s0x48761b31db1e0f19:0x14db538713f5b80b!8m2!3d51.52235!4d-0.129259",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },*/
    {
      label: "Eventbrite",
      url: "https://www.eventbrite.co.uk/e/a-history-of-race-resistance-in-britain-tickets-46437967210?aff=eac2",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    //label: "Consented & hackingEducation" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};

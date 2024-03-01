import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { Footer } from "./components/Footer";

const logo = (
  <span>
    <img
      src="/images/mercury-black-logo.svg"
      style={{ height: "33px" }}
      className="dark:hidden"
      alt="Mercury Dark Logo"
    ></img>
    <img
      src="/images/mercury-white-logo.svg"
      style={{ height: "33px" }}
      className="hidden dark:block"
      alt="Mercury Logo"
    ></img>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/mljar/mercury",
  },
  docsRepositoryBase: "https://github.com/mljar/runmercury-website/tree/main",
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    if (frontMatter?.ogTitle) {
      return {
        titleTemplate: frontMatter?.ogTitle,
      };
    }

    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Mercury",
      };
    }
  },
  logo,
  head: function useHead() {
    const { frontMatter } = useConfig();
    const { title } = useConfig();
    const { route } = useRouter();
    console.log(route);
    // here :)
    let socialCard = "https://runmercury.com/images/mercury-og.png";
    if (frontMatter?.ogImage === "widgets") {
      socialCard = "https://runmercury.com/images/mercury-og-widgets.png";
    }
    console.log(socialCard);

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            frontMatter.description
              ? frontMatter.description
              : "Build Web Apps from Jupyter Notebook"
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site" content="@RunMercury" />
        <meta name="twitter:site:domain" content="runmercury.com" />
        <meta name="twitter:url" content="https://runmercury.com" />
        <meta
          name="og:title"
          content={
            title ? title : "Mercury - build web apps in Jupyter Notebook"
          }
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Mercury" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </>
    );
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: <Footer />,
  },
  //darkMode: false
};

export default config;

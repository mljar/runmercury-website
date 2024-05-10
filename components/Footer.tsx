import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode, FormEvent } from "react";
import { getPagesUnderRoute } from "nextra/context";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-gray-700 dark:text-gray-100 no-underline hover:underline transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-gray-900 dark:text-white font-semibold">{children}</h3>;
}

const navigation = {
  mercury: [
    {
      name: "Documentation",
      href: "/docs/",
    },
    {
      name: "Tutorials",
      href: "/tutorials/",
    },
    {
      name: "Examples",
      href: "/examples/",
    }
  ],
  contact: [
    {
      name: "Contact us",
      href: "/support/contact/",
    },
    {
      name: "Support",
      href: "/support/support/",
    },
    {
      name: "GitHub",
      href: "https://github.com/mljar/mercury",
    },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy/" },
    { name: "Terms of Service", href: "/terms-of-service/" },
  ],
};

interface Page {
  name: string;
  route: string;
  children?: Page[];
  meta?: Record<string, any>;
  frontMatter?: any;
}

function sortByDate(a: Page, b: Page) {
  return (
    new Date(b.frontMatter?.date).getTime() -
    new Date(a.frontMatter?.date).getTime()
  );
}

export function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Mercury
      </h2>
      <div className="py-8 mx-auto max-w-7xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Mercury</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.mercury.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Contact</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:!mt-0">
            <FooterHeader>Subscribe to our newsletter</FooterHeader>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-100">
              Join the Mercury newsletter and stay updated on new releases,
              features, and tutorials.
            </p>
            <div className="mt-4 sm:flex sm:max-w-md">
              <a
                href="https://forms.gle/EjqYi3ttEkZkuKy46"
                target="_blank"
                className="px-6 py-3 text-white no-underline bg-primary-700 rounded hover:bg-primary-800 hover:no-underline font-medium"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="md:flex md:items-center md:justify-between mt-8">
            <div>
              <a
                className="text-current"
                target="_blank"
                rel="noopener noreferrer"
                href="https://mljar.com"
              >
                <p className="mt-4 text-xs text-gray-700 dark:text-gray-100">
                  &copy; {new Date().getFullYear()} MLJAR Sp. z o.o. All rights
                  reserved.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

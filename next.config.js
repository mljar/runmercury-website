const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

module.exports = withNextra({
  output: 'export',
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true
})

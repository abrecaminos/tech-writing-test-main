import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="./assets/ghostlogoresized.png" alt="Welcome to Ghost"/>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '© 2024 Ghost',
  },
  faviconGlyph: '/favicon.ico'
}

export default config

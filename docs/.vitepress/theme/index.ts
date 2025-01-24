import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import { theme } from 'vitepress-openapi/client';
import 'vitepress-openapi/dist/style.css';

export default {
  ...DefaultTheme,
  async enhanceApp({ app, router, siteData }) {
    theme.enhanceApp({ app });
  },
} satisfies Theme;

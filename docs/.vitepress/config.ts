import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi';
import specEn from '../../public/openapi.json' assert { type: 'json' };
import specEs from '../../public/openapi.es.json' assert { type: 'json' };
import specPtBR from '../../public/openapi.pt-BR.json' assert { type: 'json' };

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  title: 'VitePress OpenAPI',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Generate documentation from OpenAPI specifications.',
      themeConfig: {
        sidebar: [
          ...useSidebar({
            spec: specEn,
            linkPrefix: '/operations/',
          }).generateSidebarGroups(),
        ]
      },
    },
    es: {
      label: 'Español',
      lang: 'es',
      description: 'Genera documentación a partir de especificaciones OpenAPI.',
      themeConfig: {
        sidebar: [
          ...useSidebar({
            spec: specEs,
            linkPrefix: '/es/operations/',
          }).generateSidebarGroups(),
        ]
      },
    },
    'pt-BR': {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      description: 'Gere documentação a partir de especificações OpenAPI.',
      themeConfig: {
        sidebar: [
          ...useSidebar({
            spec: specPtBR,
            linkPrefix: '/pt-BR/operations/',
          }).generateSidebarGroups(),
        ]
      },
    }
  },
});

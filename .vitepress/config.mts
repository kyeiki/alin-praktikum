import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  base: '/alin-praktikum/',
  title: 'Praktikum Aljabar Linear',
  description:
    'Modul praktikum mata kuliah Aljabar Linear berbasis Rust, Program Sarjana Terapan Teknik Informatika, Politeknik Negeri Bandung.',
  srcExclude: ['**/modul1-slides.md', '**/deploy.md'],
  markdown: {
    config(md) {
      md.use(mathjax3)
    },
  },
  themeConfig: {
    nav: [{ text: 'Modul', link: '/modul1' }],
    sidebar: [
      {
        text: 'Modul Praktikum',
        items: [
          {
            text: 'Modul 1: Pengenalan Rust & Dasar Komputasi Vektor',
            link: '/modul1',
          },
        ],
      },
    ],
    outline: { level: [2, 3] },
  },
})

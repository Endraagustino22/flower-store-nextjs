// app/fonts.js
import localFont from 'next/font/local'

export const GreatVibes = localFont({
  src: [
    {
      path: '../public/fonts/GreatVibes-Regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-GreatVibes',
})

export const Montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat-VariableFont_wght.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-Montserrat',
})

export const CrimsonText = localFont({
  src: [
    {
      path: '../public/fonts/CrimsonText-Regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-CrimsonText',
})

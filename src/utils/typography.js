import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
import CodePlugin from 'typography-plugin-code'

funstonTheme.plugins = [new CodePlugin()]

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Lato",
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: "Karla",
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '700',
        '700i',
      ]
    }
  ],
  headerFontFamily: ["Lato"],
  bodyFontFamily: ["Karla"],
})

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
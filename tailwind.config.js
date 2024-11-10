import colors from 'tailwindcss/colors'

// 删除 tailwincss 弃用颜色，避免警告信息
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
          content: {
            'mark_icon': 'url(~/assets/image/mark_icon.png)',
            'double_circle_icon': 'url(~/assets/image/dot-circle.png)',
            'banner_home_icon': 'url(~/assets/image/HomeIco.png)'
          }
        },
        colors: {
            ...colors,
            primary: 'var(--primary)',
            link: 'var(--link)',
            tip: 'var(--tip)',
            secondary: 'var(--secondary)',
            content: 'var(--content)',
            sky: 'var(--sky)',
            darkBlue: "#005180",
            lightBlue: "#0078BF"
        },
        screens: {
          sm: '480px',
          md: '768px',
          lg: '1200px',
          xl: '1200px',
          xs: {'max': '767px'},
        },
    },
    plugins: [],
}

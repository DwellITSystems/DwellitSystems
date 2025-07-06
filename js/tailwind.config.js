tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            maxHeight: {
                '0': '0',
                'screen': '100vh',
                'full': '9999px'
            },
            backgroundImage: {

            },
            colors: {
                "primary": "rgba(var(--primary-color),1)",
                "primary-foreground": "rgba(var(--primary-foreground),1)",
                "secondary-color": "rgba(var(--secondary-color),1)",
                "tertiary-color": "rgba(var(--tertiary-color),1)",
                "main-bg-color": "rgba(var(--bg-color),1)"
            },
            backgroundColor: {
                'nav-scrolled': 'rgba(255, 255, 255, 0.95)',
            },
            translate: {

            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            fontSize: {

            },
            height: {

            },
            width: {

            }
        }
    }
}
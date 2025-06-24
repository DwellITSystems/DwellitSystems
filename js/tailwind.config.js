tailwind.config = {
    theme: {
        extend: {
            backgroundImage: {

            },
            colors: {
                "primary": "rgba(var(--primary-color),1)",
                "primary-foreground": "rgba(var(--primary-foreground),1)",
                "tertiary-color": "rgba(var(--tertiary-color),1)"
            },
            backgroundColor: {
                'nav-scrolled': 'rgba(255, 255, 255, 0.95)',
            },
            translate: {

            },
            animation: {
                fadeInDown: 'fadeInDown 0.5s ease-out forwards',
                fadeInUp: 'fadeInUp 0.5s ease-out forwards',
                animationSliderText: 'fadeInDown 1s ease-out forwards'
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
                    '100%': { opacity: '1', transform: 'none' },
                },
                animationSliderText: {
                    '0%': { opacity: '0', transform: 'translateY(-100px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
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
import DefaultTheme from 'vitepress/theme'

declare global {
    interface Window {
        _carbonads: any
    }
}

export default {
    ...DefaultTheme,
    enhanceApp({ router }) {
        router.onAfterRouteChanged = () => {
            if (typeof window._carbonads !== 'undefined')
                window._carbonads.refresh();
        }
    }
}
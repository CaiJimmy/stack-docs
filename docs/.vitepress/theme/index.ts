import DefaultTheme from 'vitepress/theme'

declare global {
    interface Window {
        _carbonads: any
    }
}

export default {
    ...DefaultTheme,
    enhanceApp({ router }) {
        const oldOnAfterRouteChanged = router.onAfterRouteChanged;

        router.onAfterRouteChanged = () => {
            oldOnAfterRouteChanged && oldOnAfterRouteChanged();
            if (typeof window._carbonads !== 'undefined')
                window._carbonads.refresh();
        }
    }
}
import LayoutContextProvider from './Layout'
import TranslationContextProvider from './Translation'


/**
 * Wrap context conbination
 */
export default function Context({ children }) {
    return (
        <LayoutContextProvider>
            <TranslationContextProvider>
                {children}
            </TranslationContextProvider>
        </LayoutContextProvider>
    )
}



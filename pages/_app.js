import { Provider } from 'react-redux';
import store from 'app/reducers/store'
import { AnimatePresence } from 'framer-motion'
import Layout from 'components/layout/Layout'
import 'tailwindcss/tailwind.css'
import 'assets/styles/app.scss'



export default function Application({ Component, pageProps, router }) {

    /**
     * Render
     */
    return (
        <Provider store={store}>
            <Layout key="layout">
                {/* <AnimatePresence exitBeforeEnter initial={false}> */}
                    <Component {...pageProps}  key={router.route}/>
                {/* </AnimatePresence> */}
            </Layout>
        </Provider>
    )
}



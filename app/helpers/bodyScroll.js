import { disableBodyScroll as disableScroll, enableBodyScroll as enableScroll, clearAllBodyScrollLocks as clearLocks } from 'body-scroll-lock'


const body = typeof window !== "undefined" ? document.body : {}
const header = typeof window !== "undefined" ? document.getElementById('header') : {}

const disableBodyScroll = () => {
    body.style.width = body.clientWidth + 'px'
    header.style.width = body.clientWidth + 'px'
    disableScroll(body)
}

const enableBodyScroll = () => {
        body.style.width = ''
        header.style.width =  ''
        enableScroll(body)
}

const clearScrollLocks = () => {
    body.style.width = ''
    header.style.width =  ''
    clearLocks()
}
export { disableBodyScroll, enableBodyScroll, clearScrollLocks }
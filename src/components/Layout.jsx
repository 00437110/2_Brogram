export default function Layout(props) {


    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient" >The Brogram</h1>
            <p><strong> The 30 Simple Workout Program </strong> </p>
        </header>

    )

    const footer = (

        <footer>
            <p>Built by <a href="https://eddomin-portfolio.netlify.app/" target="_blank">Erick </a><br/>
            Styled with <a href="https://fantacss.smoljames.com/" target="_blank">FantaCSS</a>
            </p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}

        </>
    )


}
import { useRouteError } from "react-router-dom"


interface RouterError {
    statusText?: string;
    message?: string;
}

export function ErrorPage () {
    const error: RouterError = useRouteError() as RouterError
    return (
        <div id="error-page">
        <h1>Desculpe, algo inesperado ocorreu.</h1>
        <i>{error.statusText || error.message} </i>
        </div>
    )
}
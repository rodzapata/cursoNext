import Link from "next/link"

export default function NotFound() {
    return (
        <section>
            <h1>pagina no encontrada -404</h1>
            <p>Lo sentimos, la pagina que buscas no existe. </p>
            <Link href="/">volver al inicio</Link>
        </section>
    )
}
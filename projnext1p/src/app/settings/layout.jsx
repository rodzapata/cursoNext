import Link from "next/link"

export const metadata = {
  title: "Mi App",
  description: "Descripción",
};

export default function SettingLayout({children}){
    return(
        <>
            <h2>Seccion Config</h2>
            <ul>
                <li>
                    <Link href="./settings/roles">roles</Link>
                </li>
                <li>
                    <Link href="./settings/users">users</Link>

                </li>
            </ul>
            {children}
        </>
    )
}
import Link from "next/link"


function Dashboard() {

    return (
        <>
        <h1>Hello world</h1>
        <h1>Hello from Dashboard</h1>
        <Link href="/dashboard/detail">Detail</Link>
        </>
    )
}

export default Dashboard
import { Suspense } from "react"
import { Button } from "../components/Button"
import { Products } from "../components/Products"
import Link from "next/link"


function Dashboard() {

    return (
        <>
            <Button />
            <Suspense>
                <Products />
            </Suspense>

            <div className="flex flex-col">
                <Link href={'/dashboard/1'}>product 1</Link>
                <Link href={'/dashboard/2'}>product 2</Link>
                <Link href={'/dashboard/3'}>product 3</Link>
            </div>
        </>
    )
}

export default Dashboard
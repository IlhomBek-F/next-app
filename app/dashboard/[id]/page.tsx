import { Products } from "@/app/components/Products"
import { Suspense } from "react"

async function DetailPage() {

    return (
        <div className="flex justify-center items-center flex-col">
            <h1>Producst</h1>
            <Suspense fallback={'Loading,,,'}>
                <Products />
            </Suspense>
        </div>

    )
}

export default DetailPage
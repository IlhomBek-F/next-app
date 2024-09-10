'use client'

import { useRouter } from "next/navigation";

function Button() {
    const router = useRouter();

    return (
        <div>
            <button onClick={() => router.push('/dashboard/22')}>To detail</button>
        </div>
    )
}

export { Button }
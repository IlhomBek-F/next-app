import Image from "next/image"

function ProductDetail({ params }) {
    console.log(params)
    return (
        <>
            <Image src='https://tse1.mm.bing.net/th?id=OIP.OF59vsDmwxPP1tw7b_8clQHaE8&pid=Api&P=0&h=220'
                width='200' height='200' alt="img"

            />
            <p>product page</p>
        </>
    )
}

export default ProductDetail
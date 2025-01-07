import Head from "next/head"
import Link from "next/link"

export const metadata={
    title:"firstPost",
    description:"This is firstPost page"
}

const firstPost = () => {
    return (
        <div>
            <h1>最初の投稿</h1>
            <Link href="../">homeへ戻る</Link>
        </div>
    )
}

export default firstPost
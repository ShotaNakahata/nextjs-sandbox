import Link from "next/link"


const firstPost = () => {
    return (
        <div>
            <h1>最初の投稿</h1>
            <Link href="../">homeへ戻る</Link>
        </div>
    )
}

export default firstPost
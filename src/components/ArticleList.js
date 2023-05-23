import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    const postList = posts.map((post) => {
        return <Article key={post.id} title={post.title} preview={post.preview} date={post.date} />
    })
    
    return (
        <main>
            {postList}
        </main>
    )
}

export default ArticleList
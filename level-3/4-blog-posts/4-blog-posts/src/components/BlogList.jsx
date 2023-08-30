import data from './data'
import BlogPost from './BlogPost'

export default function BlogList() {
    const posts = data.map(post => {return(<BlogPost post={post}/>)})
    return(
        <main className="blog-list">
            <section className="blog-list--posts">{posts}</section>
        </main>
    )
}
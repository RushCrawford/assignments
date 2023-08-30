export default function BlogPost(props) {
    return(
        <main className="blog-post">
            <h1 className="blog-post--title">{props.post.title}</h1>
            <h2 className="blog-post--sub-title">{props.post.subTitle}</h2>
            <small className="blog-post--footer">Posted by <a className="blog-post--author">{props.post.author}</a> on {props.post.date} </small>
        </main>
    )
}
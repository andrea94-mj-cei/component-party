const BlogPost = ({titulo, autor, fecha, children}) => {
    return ( 
        <>
        <div className="Card-blog">
        <h2>{titulo}</h2>
        <p>{children}</p>
        <h3>{autor}</h3>
        <h4>{fecha}</h4>
        </div>
        </>
     );
}
 
export default BlogPost;
import styles from './Blogs.module.css'
import BlogArticle from "./components/BlogArticle/BlogArticle";

interface IBlogs {
    blog1: any,
    blog2: any
}

function Blogs(props: IBlogs) {
    const {
        blog1,
        blog2
    } = props

    return (
        <section className={styles.blogSection}>
            <h2 className={styles.blogHeader}>
                <div className="container">
                    <p>
                        ut aliquip
                    </p>
                    <p>
                        ex ea commodo
                    </p>
                    consequat
                </div>
            </h2>
            <BlogArticle image1={blog1} image2={blog2}/>
        </section>
    );
}

export default Blogs;
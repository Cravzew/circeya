import styles from "./BlogArticle.module.css";

interface IBlogArticle {
    image1: any
    image2: any
}

function BlogArticle(props: IBlogArticle) {
    const {image1, image2} = props

    return (
        <>
            <article className={styles.blogArticle}>
                <div className={styles.blogArticleImage}>
                    <img src={image1} alt="image"/>
                </div>
                <div className={"container" + ' ' + styles.blogArticleContainer}>
                    <div className={styles.blogArticleContent}>
                        <h3 className={styles.blogArticleHeader}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </h3>
                        <p className={styles.blogArticleDescr}>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className={styles.blogArticleDescr}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim
                            id est laborum
                        </p>
                    </div>
                </div>
            </article>
            <article className={styles.blogArticle}>
                <div className={"container" + ' ' + styles.blogArticleContainer}>
                    <div className={styles.blogArticleContent}>
                        <h3 className={styles.blogArticleHeader}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </h3>
                        <p className={styles.blogArticleDescr}>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className={styles.blogArticleDescr}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim
                            id est laborum
                        </p>
                    </div>
                    <div className={styles.blogArticleImageDesktop}>
                        <img src={image2} alt="image"/>
                    </div>
                </div>
                <div className={styles.blogArticleImageMobile}>
                    <img src={image2} alt="image"/>
                </div>
            </article>
        </>
    );
}

export default BlogArticle;
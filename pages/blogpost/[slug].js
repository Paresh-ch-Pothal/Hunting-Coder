import React, { useState } from 'react';
import styles from "../../styles/Blog.module.css"
import fs from "fs"

const SlugComponent = (props) => {
    const [blog, setblog] = useState(props.myblog);
    // console.log(props)

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
    //         return a.json()
    //     }).then((parsed) => {
    //         setblog(parsed)
    //     })
    // }, [router.isReady])


    function createMarkup(c) {
        return { __html: c };
    }

    return (
        <>
            <main className={styles.main}>
                <div style={{ marginTop: "30px", maxWidth: "75vw" }}>
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>{blog && blog.title}</h1>
                    <hr />

                    {/* <div style={{ marginTop: "20px" }}>{blog && blog.content} </div> */}

                    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
                </div>
            </main>
        </>
    );
}

export default SlugComponent;

//static site generation

export const getStaticPaths = (async () => {
    return {
        paths: [
            {
                params: { slug: "learn-reactjs" },
            },
            {
                params: { slug: "learn-python" },
            }, // See the "paths" section below
            {
                params: { slug: "learn-javascript" },
            },
        ],
        fallback: true, // false or "blocking"
    }
})


export async function getStaticProps(context) {
    // console.log(context)
    const { slug } = context.params;
    let myblog = fs.readFileSync(`blogdata/${slug}.json`, "utf-8");

    return { props: { myblog: JSON.parse(myblog) } }
}


//this is server side rendering
// export async function getServerSideProps(context) {
//     // console.log(context.query)
//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     let myblog = await data.json();

//     return { props: { myblog } }
// }




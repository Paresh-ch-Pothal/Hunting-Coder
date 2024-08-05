import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css";
import Link from 'next/link';
import fs from "fs"
import InfiniteScroll from 'react-infinite-scroll-component';

export default function blog(props) {

  // const [blogs, setblogs] = useState([])
  const [blogs, setblogs] = useState(props.allblogs)
  const [count, setcount] = useState(2)
  // console.log(props)

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   }).then((parsed) => {
  //     console.log(parsed)
  //     setblogs(parsed)
  //   })
  // }, [])

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setcount(count + 2)
    let data = await d.json()
    setblogs(data)
};

  return (
    <div>
      <main className={`${styles.main}`}>
        <h2 style={{
          marginTop: "20px"
        }}>Latest Blogs</h2>
        <InfiniteScroll
          dataLength={blogs.length} // This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogitem) => (
            <div key={blogitem.slug} className={styles.blogitem}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.styleh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.para}>{blogitem.content.slice(0, 150)}....</p>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          ))}
        </InfiniteScroll>
      </main>
    </div>
  )
}

//to use server side rendering we can use getserverSideprops
//it is execute in the server side

// export async function getServerSideProps() {
//   //instead of using useEffect we can use this
//   let data=await fetch('http://localhost:3000/api/blogs')
//   let allblogs=await data.json()
//   return {
//     props: { allblogs }
//   }
// }



//static site generation
export async function getStaticProps() {
  let data = fs.readdirSync("blogdata");
  let allcount = data.length;
  let myfile;
  let allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = fs.readFileSync(('blogdata/' + item), 'utf-8');
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs, allcount },
  };
}

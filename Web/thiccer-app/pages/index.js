import Head from 'next/head'
import PostList  from '../components/PostList'
import cookie from "cookie"

{/*Not sure why posts is acting weird here. Def wanna look into that.*/}

export default function Home({ posts }) {
  var postArray = posts.posts;
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Thiccer - Home</title>
        <meta name='keywords' content='socialmedia'></meta>
      </Head>
      
      <PostList postArray = {postArray} />

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/post`)
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}

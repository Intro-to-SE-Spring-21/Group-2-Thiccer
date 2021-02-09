import Head from 'next/head'
import LargeTextInput from '../components/LargeTextInput'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Thiccer - Create Post</title>
        <meta name='keywords' content='socialmedia'></meta>
      </Head>
      <LargeTextInput className = ""></LargeTextInput>
      <Alert></Alert>
    </div>
  )
}


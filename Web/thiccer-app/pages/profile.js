import Head from 'next/head'
import dynamic from 'next/dynamic'
//Needs Style Sheet

const DynamicComponetWithNoSSR = dynamic(
  () => import ('../components/ProfileMain'),
  {ssr: false}
  )

export default function profile() {
    return (
      <div>
        <Head>
          <title>Thiccer - Profile</title>
          <meta name='keywords' content='socialmedia'></meta>
        </Head>
      <DynamicComponetWithNoSSR/>
      </div>
    )
}

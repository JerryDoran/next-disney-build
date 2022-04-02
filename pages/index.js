import { getSession, useSession } from 'next-auth/client'
import App from '../components/App'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  const [session, loading] = useSession()
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {!session ? <Hero /> : <App />}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session: session,
    },
  }
}

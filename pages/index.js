import Head from 'next/head'
import UserDetails from '../components/UserDetails'
import Pagination from '../components/Pagination'

export default function Home() {

  return (
    <div className={"p-2 sm:p-10"}>
      <Head>
        <title>Fyle</title>
        <meta name="description" content="front end assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserDetails/>
      <Pagination/>
    </div>
  )
}

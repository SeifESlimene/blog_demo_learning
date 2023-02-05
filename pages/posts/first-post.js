import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Alert from '../../components/utils/alert'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <Alert type='error'>Be Careful!</Alert>
        <Alert type='success'>All Done!</Alert>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}
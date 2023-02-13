import Head from 'next/head'
import { Header } from '../ui/Header'

interface Props {
  title: string
  pageDescription: string
  imgFullUrl?: string
  children: JSX.Element | JSX.Element[]
  showHeader?: boolean
  showFooter?: boolean
}

export function ShopLayout({
  title,
  pageDescription,
  imgFullUrl,
  children,
  showHeader = true,
  showFooter = true
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {imgFullUrl !== undefined ? (
          <meta name='og:image' content={imgFullUrl} />
        ) : null}
      </Head>
      {showHeader && <Header />}

      {/* <Sidebar/> */}

      <main className='container mx-auto my-10 px-6 md:px-4'>
        {children}
      </main>

      {showFooter && <footer>{/* <CustomFooter/> */}</footer>}
    </>
  )
}

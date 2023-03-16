import Head from 'next/head'

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

export function AuthLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

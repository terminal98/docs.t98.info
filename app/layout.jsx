import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    absolute: '',
    template: '%s - にじてくと'
  }
}

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>にじてくと</b>}

  // ... Your additional navbar options
  />
)
const search = (
  <Search
    emptyResult={"見つかりませんでした。"}
    loading={"読み込み中…"}
    errorText={"検索に失敗しました"}
    placeholder={"サイト内検索"}
  />
)
const footer = <Footer>&copy; {new Date().getFullYear()} NIJITECT.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/terminal98/docs.t98.info"
          footer={footer}
          editLink={null}
          feedback={{ content: "フィードバック" }}
          search={search}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
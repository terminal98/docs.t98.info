import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata, title } = result
  const Wrapper = getMDXComponents().wrapper

  return (
    <Wrapper toc={toc} metadata={metadata} title={title}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */

const withNextra = nextra({
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra()

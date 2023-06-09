/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
              Home
          </Link>
          <Link href="/create-nft">
              Sell NFT
          </Link>
          <Link href="/my-nfts">
              My NFTs
          </Link>
          <Link href="/dashboard">
              Dashboard
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
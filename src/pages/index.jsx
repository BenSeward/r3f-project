import Header from '@/config'
import { Scene } from '@/components/Scene/Scene'

export default function App({ pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Scene />
    </>
  )
}

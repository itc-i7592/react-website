import Container from './container'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main><Container>{children}</Container></main>
      <Footer />
    </>
  )
}

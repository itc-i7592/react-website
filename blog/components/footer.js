import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Container from './container'

export default function Hero() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
        </div>
      </Container>
    </footer>
  )
}

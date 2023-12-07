import classNames from 'classnames/bind'
import styles from './Home.module.sass'

const cx = classNames.bind(styles)

function Home() {
  return <div className={cx('home-wrapper')}></div>
}

export default Home

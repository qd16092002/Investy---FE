import notfound_bg from '@src/assets/images/notfound_bg.png'
import logo from '@src/assets/images/logo.png'
import classNames from 'classnames/bind'
import styles from './NotFound.module.sass'
import useMediaQuery from '@src/hooks/useMediaQuery'

const cx = classNames.bind(styles)

function NotFound() {
  const maxSmSize = useMediaQuery('(max-width: 768px)')

  return (
    <div className={cx('not-found-wrapper')}>
      <div className={cx('left')}>
        <img className={maxSmSize ? cx('mobile1') : cx('tablet1')} src={logo} alt='not-found' />
        <div className={cx('title1')}>
          <div className={cx('title11')}>404. </div>
          <div className={cx('title12')}>That’s an error.</div>
        </div>
        <div className={cx('title2')}>The requested URL/ badpage was not found on this server.</div>
        <div className={cx('title2')}>That’s all we know. </div>
      </div>
      <img className={maxSmSize ? cx('mobile') : cx('tablet')} src={notfound_bg} alt='not-found' />
    </div>
  )
}

export default NotFound

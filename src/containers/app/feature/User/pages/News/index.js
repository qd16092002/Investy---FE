/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './News.module.sass'

const cx = classNames.bind(styles)

function News() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>News</div>
    </div>
  )
}

export default News

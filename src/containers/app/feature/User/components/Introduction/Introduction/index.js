/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Introduction.module.sass'

const cx = classNames.bind(styles)

function Introduction() {
  return (
    <div className={cx('main')}>
      <div className={cx('title')}>Education</div>
    </div>
  )
}

export default Introduction

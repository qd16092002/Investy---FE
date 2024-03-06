/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Description.module.sass'

const cx = classNames.bind(styles)

function Description() {
  return (
    <div className={cx('form_wallpapper')}>
      <div className={cx('main')}>
        <div className={cx('title')}>Description</div>
        <textarea placeholder='Enter text here'></textarea>
      </div>
      <div className={cx('main')}>
        <div className={cx('title')}>Frequently Asked Questions</div>
        <div className={cx('line')}></div>
        <div className={cx('title')}>Add Questions and Answers for your Buyers</div>
        <div className={cx('addques')}>
          <input className={cx('input')} placeholder='Add Questions here'></input>
          <input className={cx('input')} placeholder='Add Answers here'></input>
        </div>
      </div>
    </div>
  )
}

export default Description

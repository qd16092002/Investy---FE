/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ReviewAndFeedbacksProfileUser.module.sass'
import { Rate } from 'antd'
// import logo from '@src/assets/images/logo.png'
const cx = classNames.bind(styles)

function ReviewAndFeedbacksProfileUser() {
  return (
    <div className={cx('main')}>
      <div className={cx('title')}>Review received</div>
      <div className={cx('content')}>
        <div className={cx('rate')}>
          <Rate
            allowHalf
            defaultValue={2.5}
            style={{
              marginRight: '20px',
              color: '#24D59E'
            }}
          />
          2.5 (120)
        </div>
      </div>
    </div>
  )
}

export default ReviewAndFeedbacksProfileUser

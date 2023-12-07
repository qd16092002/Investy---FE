/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './QA.module.sass'

const cx = classNames.bind(styles)

function QA() {
  return (
    <div>
      <div className={cx('details')}>
        <div className={cx('__info')}>Chưa nghĩ ra</div>
      </div>
    </div>
  )
}

export default QA

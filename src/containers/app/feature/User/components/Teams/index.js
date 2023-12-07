/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Teams.module.sass'

const cx = classNames.bind(styles)

function Teams() {
  return (
    <div>
      <div className={cx('details')}>
        <div className={cx('__info')}>Chưa có thành viên nào. Hãy thêm thành viên</div>
      </div>
    </div>
  )
}

export default Teams

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import classNames from 'classnames/bind'
import styles from './AuthLayout.module.sass'

const cx = classNames.bind(styles)

function AuthLayout() {
  return <div className={cx('auth-layout')}></div>
}

export default AuthLayout

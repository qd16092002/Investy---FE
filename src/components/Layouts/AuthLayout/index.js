/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import classNames from 'classnames/bind'
import styles from './AuthLayout.module.sass'
import { BackgroundImage } from '@src/assets/svgs'
const cx = classNames.bind(styles)

function AuthLayout() {
  return (
    <div className={cx('auth-layout')}>
      <BackgroundImage />
    </div>
  )
}

export default AuthLayout

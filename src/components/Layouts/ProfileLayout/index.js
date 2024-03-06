/* eslint-disable no-unused-vars */
import cn from 'classnames/bind'
import styles from './ProfileLayout.module.sass'
import { BellNotification, IconButtonSignIn, IconButtonSignUp, IconProfile, SignOutIcon } from '@src/assets/svgs'
import LayoutUser from '@src/containers/app/feature/User/pages/LayoutUser'
import { Toaster } from 'react-hot-toast'
import AppButton from '@src/components/AppButton'
import { Divider, Dropdown, Menu } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { logout } from '@src/containers/authentication/feature/Auth/authSlice'
import AppLongText from '@src/components/AppLongText'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const cookies = new Cookies()
const cx = cn.bind(styles)

function ProfileLayout({ children }) {
  const userInfo = useSelector((state) => state.auth.user)
  console.log('userInfo:: ', userInfo)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    cookies.remove('access_token')
    navigate('/recruiment')
  }
  return (
    <>
      <Header />
      <Toaster position='top-center' />
      <div className={cx('LayoutUser-layout')}>
        <div className={cx('main-content')}>
          <div className={cx('left')}>
            <LayoutUser />
          </div>
          <div className={cx('right')}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default ProfileLayout

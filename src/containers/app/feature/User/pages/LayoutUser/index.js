/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames/bind'
import styles from './LayoutUser.module.sass'
import { v4 as uuidv4 } from 'uuid'
import { Link, useLocation } from 'react-router-dom'
import {
  IconInformation,
  IconNews,
  IconMember,
  // IconMesseger,
  IconSettings,
  IconStatistics
} from '@src/assets/svgs'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

const menuUser = [
  {
    icon: <IconInformation />,
    title: 'Information',
    link: '/infomation'
  },
  {
    icon: <IconNews />,
    title: 'News',
    link: '/news'
  },
  {
    icon: <IconMember />,
    title: 'Member',
    link: '/member'
  },
  {
    icon: <IconSettings />,
    title: 'Settings',
    link: '/settings'
  }
]
const menuAdmin = [
  {
    icon: <IconInformation />,
    title: 'Information',
    link: '/infomation'
  },
  {
    icon: <IconNews />,
    title: 'News',
    link: '/news'
  },
  {
    icon: <IconMember />,
    title: 'Member',
    link: '/member'
  },
  {
    icon: <IconSettings />,
    title: 'Settings',
    link: '/settings'
  },
  {
    icon: <IconStatistics />,
    title: 'Statistics',
    link: '/statistics'
  }
]

function LayoutUser() {
  const location = useLocation()
  const userInfo = useSelector((state) => state.auth.user)
  console.log('userInfo:: ', userInfo)

  return (
    <div className={cx('LayoutUser-wrapper')}>
      <div className={cx('user-card')}>
        {userInfo?.role !== 'ADMIN' && (
          <ul className={cx('menu')}>
            {menuUser.map((item, index) => {
              return (
                <Link key={uuidv4(item.link)} to={item.link}>
                  <li className={cx(location.pathname === item.link ? 'active' : 'inactive')} key={uuidv4(index)}>
                    <div className={cx('icon')}>{item.icon}</div>
                    <p>{item.title}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        )}
        {userInfo?.role === 'ADMIN' && (
          <ul className={cx('menu')}>
            {menuAdmin.map((item, index) => {
              return (
                <Link key={uuidv4(item.link)} to={item.link}>
                  <li className={cx(location.pathname === item.link ? 'active' : 'inactive')} key={uuidv4(index)}>
                    <div className={cx('icon')}>{item.icon}</div>
                    <p>{item.title}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default LayoutUser

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileViewer.module.sass'
import { Rate } from 'antd'
import { useEffect, useState } from 'react'
import ServicesProfileUser from '../../../components/ServicesProfileUser'
import PortfolioProfileUser from '../../../components/PortfolioProfileUser'
import ReviewAndFeedbacksProfileUser from '../../../components/ReviewAndFeedbacksProfileUser'
import { IconTymProfile } from '@src/assets/svgs'
import { Link, useLocation } from 'react-router-dom'
import zalo from '@src/assets/images/Profile/Zalo.png'
import IntroductionViewer from '../../../components/Viewer/components/IntroductionViewer'
import { useGetUserbyIdMutation } from '../../../userService'
const cx = classNames.bind(styles)
const TABS = {
  INTRODUCTION: {
    code: 'INTRODUCTION'
  },
  SERVICES: {
    code: 'SERVICES'
  },
  PORTFOLIO: {
    code: 'PORTFOLIO'
  },
  REVIEWANDFEEDBACKS: {
    code: 'REVIEWANDFEEDBACKS'
  }
}
const getUserId = (path) => {
  // Split the path and get the last part
  const pathParts = path.split('/')
  const userId = pathParts[pathParts.length - 1]
  return userId
}
function ProfileViewer() {
  const { pathname } = useLocation()
  const userId = getUserId(pathname)
  const [getuserid, { data: userbyid }] = useGetUserbyIdMutation({ userId })
  console.log(userbyid)
  useEffect(() => {
    getuserid(userId)
  }, [getuserid, userId])
  const [activeTab, setActiveTab] = useState(TABS.INTRODUCTION)
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('avatar')}>
          <div className={cx('avatar')}>{userbyid?.fullName && userbyid?.fullName[0]?.toUpperCase()}</div>
        </div>
        <div className={cx('infor')}>
          <div className={cx('name')}>{userbyid?.fullName}</div>
          <div className={cx('rate')}>
            <Rate
              allowHalf
              defaultValue={5}
              style={{
                marginRight: '20px',
                color: '#24D59E'
              }}
            />
            5
          </div>
          <div className={cx('connect')}>
            <div>
              <IconTymProfile />
            </div>

            <Link target='_blank' to={`https://chat.zalo.me/?phone=${userbyid?.phoneNumber}`}>
              <img
                style={{
                  height: '40px'
                }}
                src={zalo}
                alt='Zalo'
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('header__process')}>
          <div
            className={cx('header__title', activeTab.code === TABS.INTRODUCTION.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.INTRODUCTION)}
          >
            Introduction
          </div>

          <div
            className={cx('header__title', activeTab.code === TABS.SERVICES.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.SERVICES)}
          >
            Services
          </div>

          <div
            className={cx('header__title', activeTab.code === TABS.PORTFOLIO.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.PORTFOLIO)}
          >
            Portfolio
          </div>
          <div
            className={cx('header__title', activeTab.code === TABS.REVIEWANDFEEDBACKS.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.REVIEWANDFEEDBACKS)}
          >
            Reviews & Feedbacks
          </div>
        </div>

        <div className={cx('line')}></div>
        {activeTab.code === TABS.SERVICES.code && <ServicesProfileUser />}
        {activeTab.code === TABS.INTRODUCTION.code && <IntroductionViewer />}
        {activeTab.code === TABS.PORTFOLIO.code && <PortfolioProfileUser />}
        {activeTab.code === TABS.REVIEWANDFEEDBACKS.code && <ReviewAndFeedbacksProfileUser />}
      </div>
    </div>
  )
}

export default ProfileViewer

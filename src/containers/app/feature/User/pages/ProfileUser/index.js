/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileUser.module.sass'
import { Rate } from 'antd'
import { useState } from 'react'
import IntroductionProfileUser from '../../components/IntroductionProfileUser'
import ServicesProfileUser from '../../components/ServicesProfileUser'
import PortfolioProfileUser from '../../components/PortfolioProfileUser'
import { useSelector } from 'react-redux'
import ReviewAndFeedbacksProfileUser from '../../components/ReviewAndFeedbacksProfileUser'

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
function ProfileUser() {
  const userInfo = useSelector((state) => state.auth.user)
  const [activeTab, setActiveTab] = useState(TABS.INTRODUCTION)
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('avatar')}>
          <div className={cx('avatar')}>{userInfo?.fullName && userInfo?.fullName[0]?.toUpperCase()}</div>
        </div>
        <div className={cx('infor')}>
          <div className={cx('name')}>{userInfo?.fullName}</div>
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
        {activeTab.code === TABS.INTRODUCTION.code && <IntroductionProfileUser />}
        {activeTab.code === TABS.PORTFOLIO.code && <PortfolioProfileUser />}
        {activeTab.code === TABS.REVIEWANDFEEDBACKS.code && <ReviewAndFeedbacksProfileUser />}
      </div>
    </div>
  )
}

export default ProfileUser

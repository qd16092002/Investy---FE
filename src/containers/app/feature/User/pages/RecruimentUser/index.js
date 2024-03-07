/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './RecruimentUser.module.sass'
import { useState } from 'react'
import Pricing from '../../components/ServicesProfileUser/componets/Pricing'
import {
  RecruitmentIconApplyOnline,
  RecruitmentIconCallaborate,
  RecruitmentIconRecruitmentPost
} from '@src/assets/svgs/recruitment'
import ApplyOnline from '../../components/RecruitmentUser/ApplyOnline'

const cx = classNames.bind(styles)
const TABS = {
  APPLYONLINE: {
    code: 'APPLYONLINE'
  },
  RECRUITMENTPOST: {
    code: 'RECRUITMENTPOST'
  },
  CALLABORATE: {
    code: 'CALLABORATE'
  }
}
function RecruimentUser() {
  const [activeTab, setActiveTab] = useState(TABS.APPLYONLINE)
  return (
    <div className={cx('main')}>
      <div className={cx('content')}>
        <div className={cx('header__process')}>
          <div
            className={cx('header__title', activeTab.code === TABS.APPLYONLINE.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.APPLYONLINE)}
          >
            <RecruitmentIconApplyOnline />
            <div>Apply online</div>
          </div>
          <div
            className={cx('header__title', activeTab.code === TABS.RECRUITMENTPOST.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.RECRUITMENTPOST)}
          >
            <RecruitmentIconRecruitmentPost />
            <div>Recruitment post</div>
          </div>

          <div
            className={cx('header__title', activeTab.code === TABS.CALLABORATE.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.CALLABORATE)}
          >
            <RecruitmentIconCallaborate />
            <div>Collaborate</div>
          </div>
        </div>
        <div className={cx('line')}></div>
        {activeTab.code === TABS.APPLYONLINE.code && <ApplyOnline />}
        {activeTab.code === TABS.RECRUITMENTPOST.code && <Pricing />}
        {activeTab.code === TABS.CALLABORATE.code && <div>3</div>}
      </div>
    </div>
  )
}

export default RecruimentUser

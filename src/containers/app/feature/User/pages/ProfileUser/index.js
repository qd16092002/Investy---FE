/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileUser.module.sass'
import { Col, Row } from 'antd'
import { useState } from 'react'
import OverviewUser from '../../components/OverviewUser'
import Teams from '../../components/Teams'
import Documents from '../../components/Documents'
import VideoPitch from '../../components/VideoPitch'
import QA from '../../components/QA'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)
const TABS = {
  OVERVIEW: {
    code: 'OVERVIEW'
  },
  TEAMS: {
    code: 'TEAMS'
  },
  DOCUMENTS: {
    code: 'DOCUMENTS'
  },
  VIDEOPITCH: {
    code: 'VIDEOPITCH'
  },
  QA: {
    code: 'QA'
  }
}

function ProfileUser() {
  const userInfo = useSelector((state) => state.auth.user)
  const [activeTab, setActiveTab] = useState(TABS.OVERVIEW)
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('form-header')}>
        <Row className={cx('header')}>
          <Col>
            <div className={cx('header__process')}>
              <div
                className={cx('header__title', activeTab.code === TABS.OVERVIEW.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.OVERVIEW)}
              >
                Overview
              </div>
              {userInfo?.role === 'STARTUP' && (
                <div
                  className={cx('header__title', activeTab.code === TABS.TEAMS.code ? 'active' : 'inactive')}
                  onClick={() => setActiveTab(TABS.TEAMS)}
                >
                  Team
                </div>
              )}
              <div
                className={cx('header__title', activeTab.code === TABS.DOCUMENTS.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.DOCUMENTS)}
              >
                Documents
              </div>

              <div
                className={cx('header__title', activeTab.code === TABS.VIDEOPITCH.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.VIDEOPITCH)}
              >
                Video Pitch
              </div>

              <div
                className={cx('header__title', activeTab.code === TABS.QA.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.QA)}
              >
                Questions & Answers
              </div>
            </div>
          </Col>
        </Row>
        {activeTab.code === TABS.DOCUMENTS.code && <Documents />}
        {activeTab.code === TABS.TEAMS.code && <Teams />}
        {activeTab.code === TABS.OVERVIEW.code && <OverviewUser />}
        {activeTab.code === TABS.VIDEOPITCH.code && <VideoPitch />}
        {activeTab.code === TABS.QA.code && <QA />}
      </div>
    </div>
  )
}

export default ProfileUser

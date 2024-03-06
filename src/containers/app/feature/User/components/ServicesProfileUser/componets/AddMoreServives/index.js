/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './AddMoreServives.module.sass'
import { useState } from 'react'
import {
  ProfileDescription,
  ProfileGallery,
  ProfileOverview,
  ProfilePricing,
  ProfilePublish,
  ProfileRequirement
} from '@src/assets/svgs/profile'
import Overview from '../Overview'
import Pricing from '../Pricing'
import Description from '../Description'
import Requirement from '../Requirement'
import Gallery from '../Gallery'
import Publish from '../Publish'

const cx = classNames.bind(styles)
const TABS = {
  OVERVIEW: {
    code: 'OVERVIEW',
    icon: <ProfileOverview />
  },
  PRICING: {
    code: 'PRICING',
    icon: <ProfilePricing />
  },
  DESCRIPTION: {
    code: 'DESCRIPTION',
    icon: <ProfileDescription />
  },
  REQUIREMENT: {
    code: 'REQUIREMENT',
    icon: <ProfileRequirement />
  },
  GALLERY: {
    code: 'GALLERY',
    icon: <ProfileGallery />
  },
  PUBLISH: {
    code: 'PUBLISH',
    icon: <ProfilePublish />
  }
}
function AddMoreServives() {
  const [activeTab, setActiveTab] = useState(TABS.OVERVIEW)
  return (
    <div className={cx('main')}>
      <div className={cx('content')}>
        <div className={cx('header__process')}>
          <div
            className={cx('header__title', activeTab.code === TABS.OVERVIEW.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.OVERVIEW)}
          >
            <ProfileOverview />
            <div>Overview</div>
          </div>
          <div
            className={cx('header__title', activeTab.code === TABS.PRICING.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.PRICING)}
          >
            <ProfilePricing />
            <div>Pricing</div>
          </div>

          <div
            className={cx('header__title', activeTab.code === TABS.DESCRIPTION.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.DESCRIPTION)}
          >
            <ProfileDescription />
            <div>Description & FAQ</div>
          </div>

          <div
            className={cx('header__title', activeTab.code === TABS.REQUIREMENT.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.REQUIREMENT)}
          >
            <ProfileRequirement />
            <div>Requirement</div>
          </div>
          <div
            className={cx('header__title', activeTab.code === TABS.GALLERY.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.GALLERY)}
          >
            <ProfileGallery />
            <div>Gallery</div>
          </div>
          <div
            className={cx('header__title', activeTab.code === TABS.PUBLISH.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab(TABS.PUBLISH)}
          >
            <ProfilePublish />
            <div>Publish</div>
          </div>
        </div>
        <div className={cx('line')}></div>
        {activeTab.code === TABS.OVERVIEW.code && <Overview />}
        {activeTab.code === TABS.PRICING.code && <Pricing />}
        {activeTab.code === TABS.DESCRIPTION.code && <Description />}
        {activeTab.code === TABS.REQUIREMENT.code && <Requirement />}
        {activeTab.code === TABS.GALLERY.code && <Gallery />}
        {activeTab.code === TABS.PUBLISH.code && <Publish />}
      </div>
    </div>
  )
}

export default AddMoreServives

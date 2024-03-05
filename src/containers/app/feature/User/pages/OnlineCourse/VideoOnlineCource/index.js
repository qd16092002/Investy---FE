/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './VideoOnlineCource.module.sass'
import { IconHeaderOnlineCource, IconHeaderOnlineCource_2 } from '@src/assets/svgs'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'

const cx = classNames.bind(styles)

function VideoOnlineCource() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('content')}>
          <Link to='/online-cource/firststepkorea'>
            <IconHeaderOnlineCource />
          </Link>
          <div className={cx('icon')}>
            <IconHeaderOnlineCource_2 />
          </div>
          <div className={cx('title')}>Korea 2n</div>
        </div>
        <div className={cx('line')}></div>
      </div>
      <div className={cx('content_2')}>
        <Player>
          <source src='https://www.youtube.com/embed/uaAkNKRCHdM' />
        </Player>
      </div>
    </div>
  )
}

export default VideoOnlineCource

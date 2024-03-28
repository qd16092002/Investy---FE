/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './DetailedPage.module.sass'
import { IconSaveDetailPage, IconShareDetailPage } from '@src/assets/svgs'
import detail_1 from '@src/assets/images/Portfolio/deatailpage_1.png'

const cx = classNames.bind(styles)

function DetailedPage() {
  return (
    <div className={cx('main')}>
      <div className={cx('content')}>
        <div className={cx('text')}>
          <div className={cx('title')}>Detailed page</div>
          <div className={cx('button')}>
            <button>
              <IconSaveDetailPage />
              <div>SAVE</div>
            </button>
            <button>
              <IconShareDetailPage />
              <div> SHARE</div>
            </button>
          </div>
          <div className={cx('hastag')}>
            <div className={cx('items')}>#Hangover Reliever</div>
            <div className={cx('items')}>#Detailed page</div>
            <div className={cx('items')}>#Product detailed page</div>
            <div className={cx('items')}>#Detailed page product</div>
            <div className={cx('items')}>#Detailed page product</div>
            <div className={cx('items')}>#Detailed page product</div>
            <div className={cx('items')}>#Detailed page product</div>
            <div className={cx('items')}>#Detailed page product</div>
          </div>
          <div className={cx('line')}></div>
          <div className={cx('title')}>Detailed page</div>
          <div className={cx('content')}>
            [Detail page] This is the detailed page of Samyang Corporation_Easy Tomorrow Stick Shine Muscat Flavor.
          </div>
          <div className={cx('title')}>Participant period</div>
          <div className={cx('content')}>December 2023 - December 2023 </div>
          <div className={cx('title')}>Client</div>
          <div className={cx('content')}>Samyang Corporation</div>
          <div className={cx('title')}>Sector</div>
          <div className={cx('content')}>Beverage/ Food</div>
          <div className={cx('title')}>Style</div>
          <div className={cx('style')}>
            <div className={cx('content')}>Modern</div>
            <div className={cx('content')}>Colorful</div>
            <div className={cx('content')}>Luxurious</div>
          </div>
        </div>

        <div className={cx('img')}>
          <img alt='detail_1' src={detail_1}></img>
        </div>
      </div>
    </div>
  )
}

export default DetailedPage

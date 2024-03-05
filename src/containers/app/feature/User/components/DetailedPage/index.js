/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './DetailedPage.module.sass'
import { CloseIcon, IconSaveDetailPage, IconShareDetailPage, Iconmuiten } from '@src/assets/svgs'
import { Rate } from 'antd'
import { useSelector } from 'react-redux'
import detail_1 from '@src/assets/images/Portfolio/deatailpage_1.png'
import detail_2 from '@src/assets/images/Portfolio/detailpage_2.png'

const cx = classNames.bind(styles)

function DetailedPage({ onClose }) {
  const userInfo = useSelector((state) => state.auth.user)
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <div className={cx('title')}>
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
                  height: '30px'
                }}
              />
              2.5 (120)
            </div>
          </div>
        </div>
        <div className={cx('button_close')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('text')}>
          <div className={cx('title')}>
            <div>Design</div>
            <Iconmuiten />
            <div>Detailed page</div>
          </div>
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
          {/* <div className={cx('hastag')}>
            <div className={cx('items')}>#Hangover Reliever</div>
            <div className={cx('items')}>#Detailed page</div>
            <div className={cx('items')}>#Product detailed page</div>
            <div className={cx('items')}>#Detailed page product</div>
          </div> */}
        </div>

        <div className={cx('img')}>
          <img
            alt='detail_1'
            src={detail_1}
            style={{
              width: '26vw'
            }}
          ></img>
          <img
            alt='detail_1'
            src={detail_2}
            style={{
              marginTop: '20px',
              width: '26vw'
            }}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default DetailedPage

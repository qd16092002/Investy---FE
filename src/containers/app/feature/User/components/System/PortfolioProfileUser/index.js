/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './PortfolioProfileUser.module.sass'
// import logo from '@src/assets/images/logo.png'
import avt2 from '@src/assets/images/User/Freelance/Items/2.png'
import { useState } from 'react'
import { IconDetail } from '@src/assets/svgs/profileuser'
import DetailedPage from '../DetailedPage'
import { ServicesIconAddMore, StartRate } from '@src/assets/svgs'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

function PortfolioProfileUser() {
  const [detailShow, setDetailShow] = useState(false)
  return (
    <div className={cx('main')}>
      <div className={cx('product')}>
        {detailShow ? (
          <div className={cx('detail')}>
            <div className={cx('title')}>
              <div className={cx('design')} onClick={() => setDetailShow(!detailShow)}>
                Design
              </div>
              <div
                style={{
                  marginTop: '2px'
                }}
              >
                <IconDetail />
              </div>
              <div>Detailed page</div>
            </div>
            <DetailedPage />
          </div>
        ) : (
          <div className={cx('active')}>
            <div className={cx('boxmember')} onClick={() => setDetailShow(!detailShow)}>
              <img src={avt2} alt='items' className={cx('image')}></img>
              <div className={cx('title')}> Golden Prize of “Investy Awards 2023” </div>
              <div className={cx('price')}> 500,000 VND~</div>
              <div className={cx('rate')}>
                <div
                  style={{
                    marginRight: '5px'
                  }}
                >
                  <StartRate />
                </div>
                4,9 (3,460)
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={cx('add_services')}>
        <Link to='/profile/addmoreservices'>
          <button className={cx('button')}>
            ADD MORE PORTFOLIOS
            <div>
              <ServicesIconAddMore />
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioProfileUser

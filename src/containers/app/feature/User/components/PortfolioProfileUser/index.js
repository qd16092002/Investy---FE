/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './PortfolioProfileUser.module.sass'
// import logo from '@src/assets/images/logo.png'
import image from '@src/assets/images/Portfolio/2.png'
import AppModal from '@src/components/AppModal'
import { useRef } from 'react'
import DetailedPage from '../DetailedPage'
const cx = classNames.bind(styles)

function PortfolioProfileUser() {
  const onClose = () => {
    closeRef.current.click()
  }
  const closeRef = useRef()
  return (
    <div className={cx('main')}>
      <div className={cx('title')}>Portfolio</div>
      <div className={cx('content')}>
        <div className={cx('title_2')}>Design</div>
        <div className={cx('dess')}>
          <AppModal
            triggerBtn={
              <div className={cx('items')}>
                <img className={cx('image')} src={image} alt='detail' />
                <div className={cx('detail')}>Detailed page</div>
              </div>
            }
            contentStyle={{
              width: '60vw',
              height: '82vh',
              backgroundColor: 'white',
              boxShadow: '4px 4px 10px 0px #00000040',
              borderRadius: '7px',
              padding: '20px'
            }}
            ref={closeRef}
          >
            <DetailedPage onClose={onClose} />
          </AppModal>

          <div className={cx('items')}>
            <img className={cx('image')} src={image} alt='detail' />
            <div className={cx('detail')}>Detailed page</div>
          </div>
          <div className={cx('items')}>
            <img className={cx('image')} src={image} alt='detail' />
            <div className={cx('detail')}>Detailed page</div>
          </div>
          <div className={cx('items')}>
            <img className={cx('image')} src={image} alt='detail' />
            <div className={cx('detail')}>Detailed page</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioProfileUser

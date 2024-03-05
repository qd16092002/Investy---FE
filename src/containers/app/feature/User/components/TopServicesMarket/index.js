/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './TopServicesMarket.module.sass'
import { MemberMentor } from '@src/app-configs'
import { StartRate } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function TopServicesMarket() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>Top 1 services market - Investy</div>
      <div className={cx('boxbutton')}>
        <div
          className={cx('items')}
          style={{
            paddingTop: '20px',
            backgroundColor: '#000000',
            color: '#FFFFFF'
          }}
        >
          Logo design
        </div>
        <div
          className={cx('items')}
          style={{
            paddingTop: '20px'
          }}
        >
          Homepage
        </div>
        <div
          className={cx('items')}
          style={{
            paddingTop: '20px'
          }}
        >
          Translate
        </div>
        <div
          className={cx('items')}
          style={{
            paddingTop: '20px'
          }}
        >
          Law consulting
        </div>
        <div className={cx('items')}>Cleaning, Repairment</div>
        <div className={cx('items')}>Psychological consulting</div>
      </div>
      <div className={cx('product')}>
        <div className={cx('boxmember')}>
          {MemberMentor.map((member, index) => (
            <div key={index} className={cx('member')}>
              <div className={cx('image')}></div>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopServicesMarket

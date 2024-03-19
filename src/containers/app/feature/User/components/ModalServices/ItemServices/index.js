/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ItemServices.module.sass'
import { CloseIcon } from '@src/assets/svgs'
import anh1 from '@src/assets/images/Recruitment/ModalServices/1.png'
import anh2 from '@src/assets/images/Recruitment/ModalServices/2.png'
import anh3 from '@src/assets/images/Recruitment/ModalServices/3.png'
import anh4 from '@src/assets/images/Recruitment/ModalServices/4.png'
import anh5 from '@src/assets/images/Recruitment/ModalServices/5.png'
import { Rate } from 'antd'
import { useEffect, useState } from 'react'
import Premium from '../Premium'
import Standard from '../Standard'
import Deluxe from '../Deluxe'
import { useGetServicesbyIDMutation, userApi } from '../../../userService'

const cx = classNames.bind(styles)
const TABS = {
  STANDARD: {
    code: 'STANDARD'
  },
  DELUXE: {
    code: 'DELUXE'
  },
  PREMIUM: {
    code: 'PREMIUM'
  }
}
const TABMODAL = {
  SERVICES: {
    code: 'SERVICES'
  },
  PRICING: {
    code: 'PRICING'
  },
  EDIT: {
    code: 'EDIT'
  },
  CANCEL: {
    code: 'CANCEL'
  },
  REVIEW: {
    code: 'REVIEW'
  }
}
function ItemServices({ onClose, id }) {
  const [activeTab, setActiveTab] = useState(TABS.STANDARD)
  const [activeTab2, setActiveTab2] = useState(TABMODAL.SERVICES)
  const [getservicesid, { data: servicesid }] = useGetServicesbyIDMutation(userApi.endpoints.getServicesbyID)
  useEffect(() => {
    getservicesid(id)
  }, [getservicesid, id])
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('detail')}>
        <div className={cx('left')}>
          <img src={anh1} alt='Anh1'></img>
          <div className={cx('list_small_img')}>
            <img src={anh2} alt='Anh2'></img>
            <img src={anh3} alt='Anh2'></img>
            <img src={anh4} alt='Anh2'></img>
            <img src={anh5} alt='Anh2'></img>
          </div>
          <div className={cx('rate')}>
            <Rate
              allowHalf
              defaultValue={2.5}
              style={{
                marginRight: '20px'
              }}
            />
            2.5 (203 Reviews)
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>{servicesid?.title}</div>
          <div className={cx('box')}>
            <div className={cx('tab')}>
              <div
                className={cx('header__title', activeTab.code === TABS.STANDARD.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.STANDARD)}
              >
                <div>STANDARD</div>
              </div>
              <div
                className={cx('header__title', activeTab.code === TABS.DELUXE.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.DELUXE)}
              >
                <div>DELUXE</div>
              </div>

              <div
                className={cx('header__title', activeTab.code === TABS.PREMIUM.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.PREMIUM)}
              >
                <div>PREMIUM</div>
              </div>
            </div>
            <div className={cx('line')}> </div>
            {activeTab.code === TABS.STANDARD.code && <Standard iduser={id} />}
            {activeTab.code === TABS.DELUXE.code && <Deluxe iduser={id} />}
            {activeTab.code === TABS.PREMIUM.code && <Premium iduser={id} />}
          </div>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('tab')}>
          <div
            className={cx('header__title', activeTab2.code === TABMODAL.SERVICES.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab2(TABMODAL.SERVICES)}
          >
            <div>Services description</div>
          </div>
          <div
            className={cx('header__title', activeTab2.code === TABMODAL.PRICING.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab2(TABMODAL.PRICING)}
          >
            <div>Pricing information</div>
          </div>

          <div
            className={cx('header__title', activeTab2.code === TABMODAL.EDIT.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab2(TABMODAL.EDIT)}
          >
            <div>Edit/ Re-proceed</div>
          </div>
          <div
            className={cx('header__title', activeTab2.code === TABMODAL.CANCEL.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab2(TABMODAL.CANCEL)}
          >
            <div>Cancellation & Refund</div>
          </div>
          <div
            className={cx('header__title', activeTab2.code === TABMODAL.REVIEW.code ? 'active' : 'inactive')}
            onClick={() => setActiveTab2(TABMODAL.REVIEW)}
          >
            <div>Service review</div>
          </div>
        </div>
        <div className={cx('line')}> </div>
        <div
          style={{
            height: '200px'
          }}
        ></div>
      </div>
    </div>
  )
}

export default ItemServices

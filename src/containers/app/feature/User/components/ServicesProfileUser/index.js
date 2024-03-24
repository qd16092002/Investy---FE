/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ServicesProfileUser.module.sass'
import { ServicesIconAddMore, StartRate } from '@src/assets/svgs'
import { Pagination } from 'antd'
import avtitems from '@src/assets/images/User/Freelance/Items/3.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetServicesbyuserMutation, userApi } from '../../userService'
import { useEffect, useRef, useState } from 'react'
import AppModal from '@src/components/AppModal'
import ItemServices from '../ModalServices/ItemServices'

const cx = classNames.bind(styles)

function ServicesProfileUser() {
  const onClose = () => {
    closeRef.current.click()
  }
  const closeRef = useRef()
  const userInfo = useSelector((state) => state.auth.user)
  const userId = userInfo?._id
  console.log('userId: ', userId)
  const [getservicesbyuser, { data: servicesbyuser }] = useGetServicesbyuserMutation(
    userApi.endpoints.getServicesbyuser
  )
  console.log('abc:: ', servicesbyuser)
  useEffect(() => {
    getservicesbyuser(userId)
  }, [getservicesbyuser, userId])
  const [servicesid, setservicesId] = useState()
  return (
    <div className={cx('main')}>
      <div className={cx('product')}>
        <div className={cx('boxmember')}>
          {servicesbyuser?.services.map((index) => (
            <AppModal
              key={index}
              triggerBtn={
                <div key={index} className={cx('member')} onClick={() => setservicesId(index._id)}>
                  <img src={avtitems} alt='items' className={cx('image')}></img>
                  <div className={cx('title')}>{index?.title}</div>
                  <div className={cx('price')}>
                    {' '}
                    {index?.standard?.[0]?.VAT1}
                    {'VND~'}
                  </div>
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
              }
              contentStyle={{
                width: '90vw',
                height: '90vh',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040',
                borderRadius: '7px',
                padding: '20px',
                overflowY: 'scroll'
              }}
              ref={closeRef}
            >
              <ItemServices onClose={onClose} id={servicesid} />
            </AppModal>
          ))}
        </div>
        <div className={cx('pagination')}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <div className={cx('add_services')}>
        <Link to='/profile/addmoreservices'>
          <button className={cx('button')}>
            ADD MORE SERVICES{' '}
            <div>
              <ServicesIconAddMore />
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ServicesProfileUser

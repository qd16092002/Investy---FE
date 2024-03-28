/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ServicesViewer.module.sass'
import { StartRate } from '@src/assets/svgs'
import avtitems from '@src/assets/images/User/Freelance/Items/3.png'
import { useEffect, useRef, useState } from 'react'
import AppModal from '@src/components/AppModal'
import { useGetServicesbyuserMutation, useGetUserbyIdMutation } from '../../../../userService'
import ItemServices from '../../../ModalServices/ItemServices'
import { useLocation } from 'react-router'

const cx = classNames.bind(styles)

const getUserId = (path) => {
  // Split the path and get the last part
  const pathParts = path.split('/')
  const userId = pathParts[pathParts.length - 1]
  return userId
}
function ServicesViewer() {
  const { pathname } = useLocation()
  const userId = getUserId(pathname)
  const [getuserid, { data: userbyid }] = useGetUserbyIdMutation({ userId })
  console.log(userbyid)
  useEffect(() => {
    getuserid(userId)
  }, [getuserid, userId])
  const onClose = () => {
    closeRef.current.click()
  }
  const closeRef = useRef()
  console.log('userId: ', userId)
  const [getservicesbyuser, { data: servicesbyuser }] = useGetServicesbyuserMutation(userId)
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
              ServicesViewer
            </AppModal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesViewer

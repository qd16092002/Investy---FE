/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ServicesProfileUser.module.sass'
import { MemberMentor } from '@src/app-configs'
import { ServicesIconAddMore, StartRate } from '@src/assets/svgs'
import { Pagination } from 'antd'
import avtitems from '@src/assets/images/User/Freelance/Items/3.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetServicesbyuserMutation } from '../../userService'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function ServicesProfileUser() {
  const userInfo = useSelector((state) => state.auth.user)
  const userId = userInfo?._id
  console.log('userId: ', userId)
  const [getservicesbyuser, { data: servicesbyuser }] = useGetServicesbyuserMutation({ userId })
  console.log('abc:: ', servicesbyuser)
  useEffect(() => {
    getservicesbyuser(userId)
  }, [getservicesbyuser, userId])
  return (
    <div className={cx('main')}>
      <div className={cx('product')}>
        <div className={cx('boxmember')}>
          {MemberMentor.map((member, index) => (
            <div key={index} className={cx('member')}>
              <img src={avtitems} alt='avtitems' className={cx('image')}></img>
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

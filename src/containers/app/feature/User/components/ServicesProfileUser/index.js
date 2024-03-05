/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ServicesProfileUser.module.sass'
import { MemberMentor } from '@src/app-configs'
import { StartRate } from '@src/assets/svgs'
import { Pagination } from 'antd'

const cx = classNames.bind(styles)

function ServicesProfileUser() {
  return (
    <div className={cx('main')}>
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
        <div className={cx('pagination')}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  )
}

export default ServicesProfileUser

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Company.module.sass'
import Search_Company from '../../../components/Search/Search_Company'
import { IconBoxSearch, StartRate } from '@src/assets/svgs'
import { MemberMentor } from '@src/app-configs'
import { Pagination } from 'antd'
import avt1 from '@src/assets/images/User/Company/avtari.png'
import avt3 from '@src/assets/images/User/Company/avtinvesty.png'
import avt2 from '@src/assets/images/User/Company/avtvmo.png'
import back1 from '@src/assets/images/User/Company/backari.png'
import back3 from '@src/assets/images/User/Company/backinvesty.png'
import back2 from '@src/assets/images/User/Company/backvmo.png'
import avtitems from '@src/assets/images/User/Freelance/Items/4.png'
const cx = classNames.bind(styles)

function Company() {
  return (
    <div className={cx('form-wallpaper')}>
      <Search_Company />
      <div className={cx('content')}>
        <div className={cx('list_outstanding')}>
          <div className={cx('title')}>List of outstanding companies</div>
          <div className={cx('detail')}>
            <div className={cx('box')}>
              <img src={back1} alt='back1' className={cx('back')}></img>
              <img className={cx('avt')} src={avt1} alt='avt1'></img>
              <div className={cx('content_2')}>
                <div className={cx('title_2')}>Airbridge</div>
                <div className={cx('detail_2')}>
                  Airbridge powers brands with tools to accurately measure, attribute, and optimize their digital
                  marketing strategies. Our full-suite measurement tools from unified web and mobile analytics,
                  multi-touch attribution, incrementality measurement, and deep links.
                </div>
              </div>
            </div>
            <div className={cx('box')}>
              <img src={back2} alt='back2' className={cx('back')}></img>
              <img className={cx('avt')} src={avt2} alt='avt1'></img>
              <div className={cx('content_2')}>
                <div className={cx('title_2')}>VMO Holdings</div>
                <div className={cx('detail_2')}>
                  VMO is a flagship team in engineering and development. We routinely make excellent and profitable
                  applications for clients in all sectors: Start-ups & Innovation, Business
                </div>
              </div>
            </div>
            <div className={cx('box')}>
              <img src={back3} alt='back3' className={cx('back')}></img>
              <img className={cx('avt')} src={avt3} alt='avt1'></img>
              <div className={cx('content_2')}>
                <div className={cx('title_2')}>Investy Company Limited</div>
                <div className={cx('detail_2')}>
                  Investy Co., Ltd. is a connecting company that was established in 2023(Spin off from FTU university)
                  with a vision to connect Vietnam startup ecosystem in Vietnam. Our firm focuses on 3 main objects:
                  startups, investors, and global talents in Vietnam, with a focus on...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('limited_search')}>
          <div className={cx('boxsearch')}>
            <input className={cx('input_search')} placeholder='Investy Company Limited'></input>
            <label htmlFor='search' className={cx('icon')}>
              <IconBoxSearch />
            </label>
          </div>
          <div className={cx('button_search')}>
            <div className={cx('button_1')}>Co,., LTD</div>
            <div className={cx('button_2')}>10 - 24 employees</div>
            <div className={cx('button_2')}>Hanoi, Vietnam</div>
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default Company

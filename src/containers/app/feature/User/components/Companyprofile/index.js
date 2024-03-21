/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Companyprofile.module.sass'
import { Link } from 'react-router-dom'
import logoAri from '@src/assets/images/User/Company/avtari.png'
import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)
import { v4 as uuidv4 } from 'uuid'
import { useLazyGetAllRecruitmentQuery } from '../../userService'
import moment from 'moment'

function Companyprofile() {
  const [getRecruitment, { data: recruitmentif }] = useLazyGetAllRecruitmentQuery()
  useEffect(() => {
    getRecruitment({}, false)
  }, [getRecruitment])
  const [recruitmentid, setrecruitmentid] = useState()
  console.log('abc:  ', recruitmentid)
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('content')}>
        <div className={cx('box_2')}>
          <div className={cx('input_search')}>
            <select>
              <option value='' disabled selected hidden>
                Select category
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <select>
              <option value='' disabled selected hidden>
                Service options
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <select>
              <option value='' disabled selected hidden>
                Budget
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <select>
              <option value='' disabled selected hidden>
                Delivery time
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <input placeholder='Tax invoice'></input>
            <input placeholder='MASTER expert'></input>
            <input placeholder='Portfolio'></input>
            <input placeholder='Prime'></input>
            <input placeholder='Quick response'></input>
          </div>
          <div className={cx('button_click')}>
            <div className={cx('button_1')}>Sort by</div>
            <div className={cx('button_checkbox')}>Relevant</div>
            <div className={cx('button_checkbox')}>Date</div>
            <div className={cx('button_checkbox')}>Emergency</div>
          </div>
          <div className={cx('product')}>
            {recruitmentif?.map((item) => {
              return (
                <div key={uuidv4(item)} className={cx('box')}>
                  <img src={logoAri} alt='logoari' className={cx('avt')}></img>
                  <div className={cx('content')}>
                    <div className={cx('title')}>
                      <div className={cx('bio')}>{item.RecruitmentTitle}</div>
                      <div className={cx('price')}>{item.Salary}</div>
                    </div>
                    <div className={cx('content')}> {item.Nameofthecompany}</div>
                    <div className={cx('icon')}>
                      <div className={cx('location')}>{item.Location}</div>
                      <div className={cx('date')}>
                        Deadline: {moment(item.RecruitmentDeadline).format('DD/MM/yyyy')}
                      </div>
                      <div className={cx('location')}>Post 1 hour ago</div>
                      <Link
                        onClick={() => setrecruitmentid(item._id)}
                        to={`/recruittab/${item._id}`}
                        className={cx('apply')}
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companyprofile

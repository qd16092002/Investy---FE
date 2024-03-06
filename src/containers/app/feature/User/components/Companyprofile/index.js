/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Companyprofile.module.sass'
import { IconHeart, LocationIcon, MoneyIconrate } from '@src/assets/svgs'
import { Link } from 'react-router-dom'
import logoAri from '@src/assets/images/User/Company/avtari.png'
import logoInvesty from '@src/assets/images/User/Company/avtinvesty.png'
const cx = classNames.bind(styles)

function Companyprofile() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>DESIGN</div>
      <div className={cx('content')}>
        <div className={cx('box_1')}>
          <div className={cx('image')}>COMPANY PROFILE</div>
          <div className={cx('content')}>
            <div className={cx('title')}>
              <div className={cx('avt')}></div>
              <div className={cx('name')}>
                <div className={cx('company_name')}>INVESTY COMPANY</div>
                <div className={cx('company_name')}>LTD</div>
                <div className={cx('spotlight_company')}>Spotlight Company</div>
              </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('profile')}>
              <div className={cx('bio')}>Digital Marketing Intern for Vietnam SNS</div>
              <div className={cx('icon')}>
                <MoneyIconrate />
                <div className={cx('price')}>10 - 12 million</div>
              </div>
              <div className={cx('icon')}>
                <LocationIcon />
                <div className={cx('price')}>Hanoi</div>
              </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('profile')}>
              <div className={cx('bio')}>Digital Marketing Intern for Vietnam SNS</div>
              <div className={cx('icon')}>
                <MoneyIconrate />
                <div className={cx('price')}>10 - 12 million</div>
              </div>
              <div className={cx('icon')}>
                <LocationIcon />
                <div className={cx('price')}>Hanoi</div>
              </div>
            </div>
          </div>
        </div>
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
            <Link to='/recruittab'>
              <div className={cx('box')}>
                <img src={logoAri} alt='logoari' className={cx('avt')}></img>
                <div className={cx('content')}>
                  <div className={cx('title')}>
                    <div className={cx('bio')}>Digital Marketing Intern for Vietnam SNS</div>
                    <div className={cx('price')}>10 - 12 million</div>
                  </div>
                  <div className={cx('content')}> INVESTY COMPANY LIMITED</div>
                  <div className={cx('icon')}>
                    <div className={cx('location')}>Ha Noi</div>
                    <div className={cx('date')}>30/2/2024</div>
                    <div className={cx('location')}>Post 1 hour ago</div>
                    <Link to='/recruittab' className={cx('apply')}>
                      Apply
                    </Link>
                    <div className={cx('heart')}>
                      {' '}
                      <IconHeart />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='/recruittab'>
              <div className={cx('box')}>
                <img src={logoAri} alt='logoari' className={cx('avt')}></img>
                <div className={cx('content')}>
                  <div className={cx('title')}>
                    <div className={cx('bio')}>Digital Marketing Intern for Vietnam SNS</div>
                    <div className={cx('price')}>10 - 12 million</div>
                  </div>
                  <div className={cx('content')}> INVESTY COMPANY LIMITED</div>
                  <div className={cx('icon')}>
                    <div className={cx('location')}>Ha Noi</div>
                    <div className={cx('date')}>30/2/2024</div>
                    <div className={cx('location')}>Post 1 hour ago</div>
                    <Link to='/recruittab' className={cx('apply')}>
                      Apply
                    </Link>
                    <div className={cx('heart')}>
                      {' '}
                      <IconHeart />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='/recruittab'>
              <div className={cx('box')}>
                <img src={logoInvesty} alt='logoinvesty' className={cx('avt')}></img>
                <div className={cx('content')}>
                  <div className={cx('title')}>
                    <div className={cx('bio')}>Digital Marketing Intern for Vietnam SNS</div>
                    <div className={cx('price')}>10 - 12 million</div>
                  </div>
                  <div className={cx('content')}> INVESTY COMPANY LIMITED</div>
                  <div className={cx('icon')}>
                    <div className={cx('location')}>Ha Noi</div>
                    <div className={cx('date')}>30/2/2024</div>
                    <div className={cx('location')}>Post 1 hour ago</div>
                    <Link to='/recruittab' className={cx('apply')}>
                      Apply
                    </Link>
                    <div className={cx('heart')}>
                      {' '}
                      <IconHeart />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companyprofile

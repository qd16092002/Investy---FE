/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './CompanyprofileUser.module.sass'
import {
  DeadlineIconBig,
  EmployIcon,
  IconHeart,
  IconUploadCV,
  JobIcon,
  LocationIcon,
  LocationIconBig,
  MoneyIconrateBig,
  TechnologyIcon,
  WebsiteIcon
} from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'

const cx = classNames.bind(styles)

function CompanyprofileUser() {
  const onSubmit = async () => {
    toast.success('Upload CV successfully!')
  }
  return (
    <div className={cx('form-wallpaper')}>
      <Toaster position='top-center' />
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
              <div className={cx('bio')}>
                Investy Co., Lt d. is a connecting company that was established in 2023 with a vision to incubate
                Vietnamese talents
              </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('profile')}>
              <div className={cx('icon')}>
                <EmployIcon />
                <div className={cx('price')}>10 - 24 employees</div>
              </div>
              <div className={cx('icon')}>
                <LocationIcon />
                <div className={cx('price')}>Nam Tu Liem, Hanoi</div>
              </div>
              <div className={cx('icon')}>
                <TechnologyIcon />
                <div className={cx('price')}>Technology</div>
              </div>
              <div className={cx('icon')}>
                <WebsiteIcon />
                <div className={cx('price')}>investy.io.vn</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('box_2')}>
          <div className={cx('box')}>
            <div className={cx('content')}>
              <div className={cx('title')}>
                <div className={cx('bio')}>Digital Marketing Intern for Vietnam SNS</div>
              </div>
              <div className={cx('content')}>
                <div className={cx('items')}>
                  <div className={cx('icon')}>
                    <MoneyIconrateBig />
                  </div>
                  <div className={cx('icon_name')}>
                    <div className={cx('title')}>Salary range</div>
                    <div className={cx('price')}>10 - 12 million VND</div>
                  </div>
                </div>
                <div className={cx('items')}>
                  <div className={cx('icon')}>
                    <LocationIconBig />
                  </div>
                  <div className={cx('icon_name')}>
                    <div className={cx('title')}>Location</div>
                    <div className={cx('price')}>Hanoi</div>
                  </div>
                </div>
                <div className={cx('items')}>
                  <div className={cx('icon')}>
                    <DeadlineIconBig />
                  </div>
                  <div className={cx('icon_name')}>
                    <div className={cx('title')}>Experience</div>
                    <div className={cx('price')}>Under 1 year</div>
                  </div>
                </div>
              </div>
              <div className={cx('icon')}>
                <div className={cx('date')}>Deadline: 30/2/2024</div>
                <button onClick={onSubmit} type='submit' className={cx('apply')}>
                  Apply Now
                </button>
                <div className={cx('heart')}>
                  {' '}
                  <IconHeart />
                </div>
                <div
                  style={{
                    marginTop: '-10px'
                  }}
                >
                  {' '}
                  <IconUploadCV />
                </div>
              </div>
            </div>
          </div>
          <div className={cx('detail')}>
            <div className={cx('title')}>RECRUITMENT DETAILS</div>
            <div className={cx('job')}>
              <div className={cx('title')}>
                <JobIcon />
                <div className={cx('name')}>JOB DESCRIPTION</div>
              </div>
              <ul>
                <li>
                  <div></div>Creation of content for Vietnamese SNS and short-form platforms
                </li>
                <li>
                  <div></div>Designing social media assets and cover artwork
                </li>
                <li>
                  <div></div>Content planning and production Managing and creating content for our social media channels
                </li>
                <li>
                  <div></div>Developing visual concepts, brand identity, and video production
                </li>
                <li>
                  <div></div>Managing and creating content for our social media channels
                </li>
              </ul>
            </div>
            <div className={cx('job')}>
              <div className={cx('title')}>
                <JobIcon />
                <div className={cx('name')}>JOB JOB REQUIREMENTS</div>
              </div>
              <ul>
                <li>
                  <div></div>Creation of content for Vietnamese SNS and short-form platforms
                </li>
                <li>
                  <div></div>Designing social media assets and cover artwork
                </li>
                <li>
                  <div></div>Content planning and production Managing and creating content for our social media channels
                </li>
                <li>
                  <div></div>Developing visual concepts, brand identity, and video production
                </li>
                <li>
                  <div></div>Managing and creating content for our social media channels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyprofileUser

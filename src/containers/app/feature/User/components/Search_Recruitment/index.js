/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Search_Recruitment.module.sass'
import { IconBoxSearch } from '@src/assets/svgs'
import { Slider } from 'antd'

const cx = classNames.bind(styles)

function Search_Recruitment() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('box-search')}>
        <div className={cx('title')}> Find the right job, right away</div>
        <div className={cx('boxsearch')}>
          <input className={cx('input_search')} placeholder='Type the company name'></input>
          <label htmlFor='search' className={cx('icon')}>
            <IconBoxSearch />
          </label>
        </div>
        <div className={cx('choice_search')}>
          {/* <input placeholder='Company category'></input> */}
          <select>
            <option value='' disabled selected hidden>
              Company category
            </option>
            <option value='All'>All</option>
            <option value='Foreign company'>Foreign company</option>
            <option value='Vietnamese company'>Vietnamese company</option>
            <option value='Government, NGO/NPO'>Government, NGO/NPO</option>
          </select>
          <select>
            <option value='' disabled selected hidden>
              Job category
            </option>
            <option value='Online'>Online</option>
            <option value='Volunteer'>Volunteer</option>
            <option value='Internship'>Internship</option>
            <option value='Full-time'>Full-time</option>
            <option value='Part-time'>Part-time</option>
            <option value='Other'>Other</option>
          </select>
          <select>
            <option value='' disabled selected hidden>
              Specialization
            </option>
            <option value='Marketing, Communications, PR'>Marketing, Communications, PR</option>
            <option value='Sales'>Sales</option>
            <option value='Administrative personnel'>Administrative personnel</option>
            <option value='Media, Press'>Media, Press</option>
            <option value='Travel, Hotel'>Travel, Hotel</option>
            <option value='Finance, Accounting, Bank'>Finance, Accounting, Bank</option>
            <option value='Accounting and auditing'>Accounting and auditing</option>
            <option value='Business Analysis, Data Analysis'>Business Analysis, Data Analysis</option>
            <option value='Design'>Design</option>
            <option value='IT'>IT</option>
            <option value='Importing & Exporting, Logistics'>Importing & Exporting, Logistics</option>
            <option value='Translator & Interpreter'>Translator & Interpreter</option>
            <option value='Teacher, Tutor'>Teacher, Tutor</option>
            <option value='Lawyer'>Lawyer</option>
            <option value='Doctor, Nurse'>Doctor, Nurse</option>
            <option value='Engineer'>Engineer</option>
            <option value='Common labour'>Common labour</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className={cx('choice_search')}>
          <input placeholder='Location'></input>
          <div className={cx('slider')}>
            <div>Salary range </div>
            <Slider
              range={{
                draggableTrack: true
              }}
              min={0}
              max={50000}
              step={500}
            />
          </div>
          <input placeholder='Experience'></input>
        </div>
        <div className={cx('choice_search')}>
          <input placeholder='Industry'></input>
        </div>
      </div>
    </div>
  )
}

export default Search_Recruitment

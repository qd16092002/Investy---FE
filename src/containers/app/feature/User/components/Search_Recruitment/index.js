/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Search_Recruitment.module.sass'
import { IconBoxSearch } from '@src/assets/svgs'

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
          <input placeholder='Company category'></input>
          <input placeholder='Job category'></input>
          <input placeholder='Specialization'></input>
        </div>
        <div className={cx('choice_search')}>
          <input placeholder='Location'></input>
          <input placeholder='Salary range'></input>
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

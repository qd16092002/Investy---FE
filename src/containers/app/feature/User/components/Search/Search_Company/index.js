/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Search_Company.module.sass'
import { IconBoxSearch } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function Search_Company() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('box-search')}>
        <div className={cx('title')}> Find the company, right away</div>
        <div className={cx('boxsearch')}>
          <input className={cx('input_search')} placeholder='Type the company name'></input>
          <label htmlFor='search' className={cx('icon')}>
            <IconBoxSearch />
          </label>
        </div>
        <div className={cx('choice_search')}>
          <input placeholder='Company category'></input>
          <input placeholder='Work scale'></input>
          <input placeholder='Location'></input>
        </div>
        <div className={cx('choice_search')}>
          <input placeholder='Industry'></input>
        </div>
      </div>
    </div>
  )
}

export default Search_Company

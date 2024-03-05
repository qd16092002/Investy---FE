/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Search_FreeLancer.module.sass'
import { IconBoxSearch } from '@src/assets/svgs'
import { TreeSelect } from 'antd'
import { useState } from 'react'
import { treeData } from '@src/app-configs'

const cx = classNames.bind(styles)

function Search_FreeLancer() {
  const [value, setValue] = useState()
  const onChange = (newValue) => {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('box-search')}>
        <div className={cx('title')}> Find the right freelance service, right away</div>
        <div className={cx('boxsearch')}>
          <input className={cx('input_search')} placeholder='Type the company name'></input>
          <label htmlFor='search' className={cx('icon')}>
            <IconBoxSearch />
          </label>
        </div>
        <div className={cx('choice_search')}>
          <div className={cx('a')}>
            <TreeSelect
              showSearch
              value={value}
              style={{
                height: '50px',
                border: '1px solid #7A7A7A',
                width: '100%',
                borderRadius: '100px',
                padding: '0px 30px',
                backgroundColor: '#FFFFFF',
                color: '#7A7A7A'
              }}
              dropdownStyle={{
                maxHeight: 400,
                overflow: 'auto'
              }}
              placeholder='Select categories'
              allowClear
              multiple
              onChange={onChange}
              treeData={treeData}
            />
          </div>
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
        </div>
        <div className={cx('choice_search')}>
          <select>
            <option value='' disabled selected hidden>
              Delivery time
            </option>
            <option value='Idea'>Idea</option>
            <option value='Early Growth'>Early Growth</option>
            <option value='Growth'>Growth</option>
          </select>
          <input placeholder='Tax invoice'></input>
          <input placeholder='Quick response'></input>
        </div>
        <div className={cx('choice_search')}>
          <input placeholder='Portfolio'></input>
        </div>
      </div>
    </div>
  )
}

export default Search_FreeLancer

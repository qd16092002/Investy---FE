/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Requirement.module.sass'
import { Checkbox, Radio } from 'antd'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Requirement() {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className={cx('main')}>
      <div className={cx('title')}>Tell your buyer what you need to get started</div>
      <div className={cx('line')}></div>
      <div className={cx('title')}>REQUIREMENT #1</div>
      <textarea placeholder='Add Answers here'></textarea>
      <div className={cx('type')}>
        <Radio.Group
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          onChange={onChange}
          value={value}
        >
          <div className={cx('title_2')}>Answer type</div>
          <Radio
            value={1}
            style={{
              color: 'black'
            }}
          >
            <div className={cx('sort')}>Free Text</div>
          </Radio>
          <Radio value={2}>
            <div className={cx('sort')}>Multiple Answer</div>
          </Radio>
          <Radio value={3}>
            <div className={cx('sort')}>Attached File</div>
          </Radio>
        </Radio.Group>
      </div>
      <div className={cx('checkbox')}>
        <Checkbox className={cx('items')}>
          <div>Answer is mandatory</div>
        </Checkbox>
      </div>
    </div>
  )
}

export default Requirement

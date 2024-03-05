/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Education.module.sass'
import { CloseIcon } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function Education({ onClose }) {
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <div className={cx('title_1')}>Education</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('title')}>University</div>
      <input className={cx('input')} placeholder='University'></input>
      <div className={cx('title')}>Major</div>
      <input className={cx('input')} placeholder='Major'></input>
      <div className={cx('title')}>Time</div>
      <div className={cx('checkbox')}></div>
      <div className={cx('checktime')}>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Starting time</div>
          <div className={cx('daymonth')}>
            <select className={cx('select')}>
              <option value='' disabled selected hidden>
                Month
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <input className={cx('select')} placeholder='Year'></input>
          </div>
        </div>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Finishing time</div>
          <div className={cx('daymonth')}>
            <select className={cx('select')}>
              <option value='' disabled selected hidden>
                Month
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <input className={cx('select')} placeholder='Year'></input>
          </div>
        </div>
      </div>
      <div className={cx('title')}>Description</div>
      <textarea className={cx('textarea')} placeholder='Write your detailed description of your education'></textarea>
      <button onClick={onClose}>Save</button>
    </div>
  )
}

export default Education

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Overview.module.sass'

const cx = classNames.bind(styles)

function Overview() {
  return (
    <div className={cx('main')}>
      <div className={cx('details')}>
        <div className={cx('label')}>TITLE</div>
        <div className={cx('content')}>
          <input className={cx('input')}></input>
          <div>Max: 80 characters</div>
        </div>
      </div>
      <div className={cx('details')}>
        <div className={cx('label')}>CATEGORY</div>
        <div className={cx('content')}>
          <select className={cx('input')}>
            <option value='' disabled selected hidden>
              SELECT A CATEGORY
            </option>
            <option value='Idea'>Idea</option>
            <option value='Early Growth'>Early Growth</option>
            <option value='Growth'>Growth</option>
          </select>
        </div>
      </div>
      <div
        className={cx('details')}
        style={{
          marginBottom: '0px'
        }}
      >
        <div className={cx('label')}>SEARCH TAG</div>
        <div className={cx('content')}>
          <input className={cx('input')}></input>
          <div>Up to 5 items</div>
        </div>
      </div>
    </div>
  )
}

export default Overview

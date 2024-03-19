/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Deluxe.module.sass'

const cx = classNames.bind(styles)

function Deluxe() {
  return (
    <div className={cx('main')}>
      <div className={cx('price')}>
        660,000 VND <div className={cx('note')}>(VAT included)</div>
      </div>
      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('listnote')}
      >
        Detailed page 15,000px design
      </div>
      <div className={cx('listnote')}>Design based on approximately 6 parts on detailed page</div>
      <div className={cx('listnote')}>*Consultation required *Shooting and planning required</div>
      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('yesno')}
      >
        <div className={cx('left')}>Correction work</div>
        <div className={cx('right')}>Yes</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Available for commercial use</div>
        <div className={cx('right')}>Yes</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of drafts</div>
        <div className={cx('right')}>One</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Working day</div>
        <div className={cx('right')}>5 days</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of modifications</div>
        <div className={cx('right')}>Episode 2</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <button type='submit'>PURCHASE</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className={cx('compare')}>COMPARE PRICES</div>
      </div>
    </div>
  )
}

export default Deluxe

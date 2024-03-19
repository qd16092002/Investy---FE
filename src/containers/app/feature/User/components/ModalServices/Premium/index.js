/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Premium.module.sass'
import { useGetServicesbyIDMutation, userApi } from '../../../userService'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function Premium({ iduser }) {
  const [getservicesid, { data: servicesid }] = useGetServicesbyIDMutation(userApi.endpoints.getServicesbyID)
  useEffect(() => {
    getservicesid(iduser)
  }, [getservicesid, iduser])
  return (
    <div className={cx('main')}>
      <div className={cx('price')}>
        {servicesid?.premium?.[0]?.VAT3} <div className={cx('note')}>(VAT included)</div>
      </div>
      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('listnote')}
      >
        {servicesid?.premium?.[0]?.note13}
      </div>
      <div className={cx('listnote')}>{servicesid?.premium?.[0]?.note23}</div>
      <div className={cx('listnote')}>{servicesid?.premium?.[0]?.note33}</div>

      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('yesno')}
      >
        <div className={cx('left')}>Correction work</div>
        <div className={cx('right')}>{servicesid?.premium?.[0]?.correctionwork3}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Available for commercial use</div>
        <div className={cx('right')}>{servicesid?.premium?.[0]?.available3}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of drafts</div>
        <div className={cx('right')}>{servicesid?.premium?.[0]?.numberofdrafts3}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Working day</div>
        <div className={cx('right')}>
          {servicesid?.premium?.[0]?.workingday3} {' days'}
        </div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of modifications</div>
        <div className={cx('right')}>{servicesid?.premium?.[0]?.numberofmodifications3}</div>
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

export default Premium

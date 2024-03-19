/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Standard.module.sass'
import { useEffect } from 'react'
import { useGetServicesbyIDMutation, userApi } from '../../../userService'

const cx = classNames.bind(styles)

function Standard({ iduser }) {
  const [getservicesid, { data: servicesid }] = useGetServicesbyIDMutation(userApi.endpoints.getServicesbyID)
  useEffect(() => {
    getservicesid(iduser)
  }, [getservicesid, iduser])
  return (
    <div className={cx('main')}>
      <div className={cx('price')}>
        {servicesid?.standard?.[0]?.VAT1} <div className={cx('note')}>(VAT included)</div>
      </div>
      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('listnote')}
      >
        {servicesid?.standard?.[0]?.note11}
      </div>
      <div className={cx('listnote')}>{servicesid?.standard?.[0]?.note21}</div>
      <div className={cx('listnote')}>{servicesid?.standard?.[0]?.note31}</div>

      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('yesno')}
      >
        <div className={cx('left')}>Correction work</div>
        <div className={cx('right')}>{servicesid?.standard?.[0]?.correctionwork1}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Available for commercial use</div>
        <div className={cx('right')}>{servicesid?.standard?.[0]?.available1}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of drafts</div>
        <div className={cx('right')}>{servicesid?.standard?.[0]?.numberofdrafts1}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Working day</div>
        <div className={cx('right')}>
          {servicesid?.standard?.[0]?.workingday1} {' days'}
        </div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of modifications</div>
        <div className={cx('right')}>{servicesid?.standard?.[0]?.numberofmodifications1}</div>
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

export default Standard

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Deluxe.module.sass'
import { useGetServicesbyIDMutation, userApi } from '../../../userService'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function Deluxe({ iduser }) {
  const [getservicesid, { data: servicesid }] = useGetServicesbyIDMutation(userApi.endpoints.getServicesbyID)
  useEffect(() => {
    getservicesid(iduser)
  }, [getservicesid, iduser])

  return (
    <div className={cx('main')}>
      <div className={cx('price')}>
        {servicesid?.deluxe?.[0]?.VAT2} <div className={cx('note')}>(VAT included)</div>
      </div>
      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('listnote')}
      >
        {servicesid?.deluxe?.[0]?.note12}
      </div>
      <div className={cx('listnote')}>{servicesid?.deluxe?.[0]?.note22}</div>
      <div className={cx('listnote')}>{servicesid?.deluxe?.[0]?.note32}</div>

      <div
        style={{
          marginTop: '15px'
        }}
        className={cx('yesno')}
      >
        <div className={cx('left')}>Correction work</div>
        <div className={cx('right')}>{servicesid?.deluxe?.[0]?.correctionwork2}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Available for commercial use</div>
        <div className={cx('right')}>{servicesid?.deluxe?.[0]?.available2}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of drafts</div>
        <div className={cx('right')}>{servicesid?.deluxe?.[0]?.numberofdrafts2}</div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Working day</div>
        <div className={cx('right')}>
          {servicesid?.deluxe?.[0]?.workingday2} {' days'}
        </div>
      </div>
      <div className={cx('yesno')}>
        <div className={cx('left')}>Number of modifications</div>
        <div className={cx('right')}>{servicesid?.deluxe?.[0]?.numberofmodifications2}</div>
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

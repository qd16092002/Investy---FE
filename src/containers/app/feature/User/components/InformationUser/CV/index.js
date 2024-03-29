/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './CV.module.sass'
import { CloseIcon } from '@src/assets/svgs'
import PDFViewer from '../MyPdf'

const cx = classNames.bind(styles)

function CV({ onClose }) {
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('content')}>
        <PDFViewer />
      </div>
    </div>
  )
}

export default CV

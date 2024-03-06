/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Introduction.module.sass'
import { CloseIcon } from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'

const cx = classNames.bind(styles)

function Introduction({ onClose }) {
  const onSubmit = async () => {
    toast.success('Update successfully!')
  }
  const handleClick = () => {
    onSubmit()
    onClose()
  }
  return (
    <div className={cx('main')}>
      <Toaster position='top-center' />
      <div className={cx('header')}>
        <div className={cx('title_1')}>Introduction</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <textarea placeholder='Enter text here'></textarea>
      <button className={cx('save')} onClick={handleClick} type='submit'>
        Save
      </button>
    </div>
  )
}

export default Introduction

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Skills.module.sass'
import { Rate } from 'antd'
import { CloseIcon } from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'

const cx = classNames.bind(styles)

function Skills({ onClose }) {
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
        <div className={cx('title_1')}>Skills</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>

      <div className={cx('title')}>Name of the skill</div>
      <input className={cx('input')} placeholder='Name of the skill'></input>
      <div className={cx('title')}>Organization</div>
      <input className={cx('input')} placeholder='Organization'></input>
      <div className={cx('title')}>Evaluation</div>
      <div className={cx('rate')}>
        <Rate
          allowHalf
          style={{
            marginRight: '20px',
            fontSize: '30px'
          }}
        />
      </div>

      <div className={cx('title')}>Description</div>
      <textarea className={cx('textarea')}></textarea>
      <button onClick={handleClick}>Save</button>
    </div>
  )
}

export default Skills

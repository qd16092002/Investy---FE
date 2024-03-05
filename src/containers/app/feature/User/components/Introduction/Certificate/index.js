/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Certificate.module.sass'
import { CertificateIconLink, CertificateIconUpload, CloseIcon } from '@src/assets/svgs'
import { Button, Upload, message } from 'antd'

const cx = classNames.bind(styles)
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}
function Certificate({ onClose }) {
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <div className={cx('title_1')}>Certificate</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('title')}>Certificate</div>
      <input className={cx('input')} placeholder='Name of certificate'></input>
      <div className={cx('title')}>Organization</div>
      <input className={cx('input')} placeholder='Name of organization'></input>
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
      <div className={cx('title')}>Upload your certificate</div>
      <div className={cx('footer')}>
        <Upload {...props}>
          <Button
            style={{
              height: '70.6px',
              padding: '10px 15px'
            }}
            className={cx('upload')}
            icon={<CertificateIconUpload />}
          >
            <div>Upload the file</div>
          </Button>
        </Upload>

        <div className={cx('upload')}>
          <CertificateIconLink />
          <div>Insert the link</div>
        </div>
      </div>
      <button className={cx('save')} onClick={onClose}>
        Save
      </button>
    </div>
  )
}

export default Certificate

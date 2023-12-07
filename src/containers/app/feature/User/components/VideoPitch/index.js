/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './VideoPitch.module.sass'
import { Button, Upload, message } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

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
function VideoPitch() {
  return (
    <div>
      <div className={cx('details')}>
        <div className={cx('__info')}>PITCH DECK</div>
        <div className={cx('title')}>
          The video is optinal, but investors love it! We encourage you to upload a brief (3-5 minutes) live pitch
        </div>
        <div className={cx('upload')}>
          <Upload
            {...props}
            style={{
              colorBgMask: '#1D3461'
            }}
          >
            <Button icon={<PlusCircleOutlined />}>Upload video</Button>
          </Upload>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10px'
          }}
        >
          <div className={cx('underline')}></div>
          <div className={cx('underline_name')}>Or</div>
          <div className={cx('underline')}></div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <input className={cx('input')} placeholder='Use video URl (eg. YouTube or Video)'></input>
          <button className={cx('button')}>Preview and save </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPitch

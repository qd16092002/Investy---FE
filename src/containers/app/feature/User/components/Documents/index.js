/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Documents.module.sass'
import { UploadOutlined } from '@ant-design/icons'
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
function Documents() {
  return (
    <div>
      <div className={cx('details')}>
        <div className={cx('__info')}>PITCH DECK</div>
        <div className={cx('underline')}></div>
        <div className={cx('content')}>Upload pitch deck</div>
        <div className={cx('__info_2')}>OTHER DOCUMENT</div>
        <div className={cx('underline')}></div>
        <div className={cx('content')}>Upload your first document.</div>
        <div className={cx('upload')}>
          <div
            style={{
              marginRight: '5px'
            }}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload pitch deck</Button>
            </Upload>
          </div>
          <div>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload other document</Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents

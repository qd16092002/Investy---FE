/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Gallery.module.sass'
import { useState } from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)
const getBase64 = (img, callback) => {
  // eslint-disable-next-line no-undef
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
function Gallery() {
  const [imageUrl1, setImageUrl1] = useState()

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl1(url)
      })
    }
  }
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
  return (
    <div>
      <div className={cx('main')}>
        <div className={cx('photo')}>
          <div className={cx('title')}>Photos (0/4)</div>
          <div className={cx('items')}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount='4'
              token={{}}
            >
              {imageUrl1 ? (
                <img
                  src={imageUrl1}
                  alt='avatar'
                  style={{
                    width: '100%'
                  }}
                />
              ) : (
                <div className={cx('abc')}>Drag a photo or Browse</div>
              )}
            </Upload>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount='4'
              token={{}}
            >
              {imageUrl1 ? (
                <img
                  src={imageUrl1}
                  alt='avatar'
                  style={{
                    width: '100%'
                  }}
                />
              ) : (
                <div className={cx('abc')}>Drag a photo or Browse</div>
              )}
            </Upload>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount='4'
              token={{}}
            >
              {imageUrl1 ? (
                <img
                  src={imageUrl1}
                  alt='avatar'
                  style={{
                    width: '100%'
                  }}
                />
              ) : (
                <div className={cx('abc')}>Drag a photo or Browse</div>
              )}
            </Upload>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount='4'
              token={{}}
            >
              {imageUrl1 ? (
                <img
                  src={imageUrl1}
                  alt='avatar'
                  style={{
                    width: '100%'
                  }}
                />
              ) : (
                <div className={cx('abc')}>Drag a photo or Browse</div>
              )}
            </Upload>
          </div>
        </div>
        <div className={cx('line')}></div>
        <div className={cx('photo')}>
          <div className={cx('title')}>Video (0/1)</div>
          <div className={cx('items')}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount='4'
              token={{}}
            >
              {imageUrl1 ? (
                <img
                  src={imageUrl1}
                  alt='avatar'
                  style={{
                    width: '100%'
                  }}
                />
              ) : (
                <div className={cx('abc')}>Drag a photo or Browse</div>
              )}
            </Upload>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <div className={cx('line')}></div>
        <div className={cx('photo')}>
          <div className={cx('title')}>PDF (0/4)</div>
          <div className={cx('items')}>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Drag a PDF or Browse</Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

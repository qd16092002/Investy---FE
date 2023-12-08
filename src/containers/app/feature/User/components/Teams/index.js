/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Teams.module.sass'
import { useState } from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { UrlLinkedin, UrlTwitter, UrlFacebook, IconAddMember } from '@src/assets/svgs'

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

const cx = classNames.bind(styles)

function Teams() {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8
        }}
      >
        Upload
      </div>
    </div>
  )
  return (
    <div className={cx('main')}>
      <div className={cx('details')}>
        <div className={cx('__info')}>Chưa có thành viên nào. Hãy thêm thành viên</div>
      </div>
      <form className={cx('details_2')}>
        <div className={cx('__info')}>Thêm thành viên</div>
        <div
          className={cx('items')}
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div className={cx('uploadimg')}>
            <div className={cx('title')}>Tải ảnh lên</div>
            <div className={cx('note')}>Tệp PNG hoặc JPG ít nhất 256 x 256 px</div>
          </div>
          <div className={cx('content')}>
            <Upload
              name='avatar'
              listType='picture-circle'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt='avatar'
                  style={{
                    width: '100%'
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Full Name</div>
          <input
            className={cx('input')}
            style={{
              height: '40px'
            }}
            placeholder='Import'
            type='text'
            // {...register('fullName')}
          ></input>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Title</div>
          <input
            className={cx('input')}
            style={{
              height: '40px'
            }}
            placeholder='Import'
            type='text'
            // {...register('fullName')}
          ></input>
        </div>
        <div className={cx('items')}>
          <textarea
            className={cx('input')}
            style={{
              height: '120px',
              width: '100%'
            }}
            placeholder='Biography'
            type='text'
            // {...register('fullName')}
          ></textarea>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>LIÊN KẾT TRUYỀN THÔNG XÃ HỘI</div>
        </div>
        <div
          className={cx('item')}
          style={{
            marginTop: '10px'
          }}
        >
          <p>LinkedIn URL</p>

          <div
            style={{
              display: 'flex',
              width: '230px',
              height: '33.5px',
              borderRadius: '5px',
              border: '1px solid #7A7A7A',
              color: '#7A7A7A',
              alignItems: 'center',
              marginTop: '3px',
              paddingLeft: '10px'
            }}
          >
            <UrlLinkedin />
            <input
              className={cx('inputsettings_2')}
              style={{
                marginTop: '5px'
              }}
              placeholder='LinkedIn URL'
              type='text'
              // {...register('phoneNumber')}
              // defaultValue={userInfo?.phoneNumber}
            ></input>
          </div>
        </div>
        <div
          className={cx('item')}
          style={{
            marginTop: '10px'
          }}
        >
          <p>Facebook URL</p>

          <div
            style={{
              display: 'flex',
              width: '230px',
              height: '33.5px',
              borderRadius: '5px',
              border: '1px solid #7A7A7A',
              color: '#7A7A7A',
              alignItems: 'center',
              marginTop: '3px',
              paddingLeft: '10px'
            }}
          >
            <UrlFacebook />
            <input
              className={cx('inputsettings_2')}
              style={{
                marginTop: '5px'
              }}
              placeholder='LinkedIn URL'
              type='text'
              // {...register('phoneNumber')}
              // defaultValue={userInfo?.phoneNumber}
            ></input>
          </div>
        </div>
        <div
          className={cx('item')}
          style={{
            marginTop: '10px'
          }}
        >
          <p>Twitter URL</p>

          <div
            style={{
              display: 'flex',
              width: '230px',
              height: '33.5px',
              borderRadius: '5px',
              border: '1px solid #7A7A7A',
              color: '#7A7A7A',
              alignItems: 'center',
              marginTop: '3px',
              paddingLeft: '10px'
            }}
          >
            <UrlTwitter />
            <input
              className={cx('inputsettings_2')}
              style={{
                marginTop: '5px'
              }}
              placeholder='LinkedIn URL'
              type='text'
              // {...register('phoneNumber')}
              // defaultValue={userInfo?.phoneNumber}
            ></input>
          </div>
        </div>
        <button className={cx('button')}>
          <IconAddMember />
          <div>Add member</div>
        </button>
      </form>
    </div>
  )
}

export default Teams

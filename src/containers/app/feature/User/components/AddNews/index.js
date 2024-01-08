/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './AddNews.module.sass'
import { Upload, message } from 'antd'
import { useRef, useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const cx = classNames.bind(styles)

function AddNews({ onClose }) {
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
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const formInput = useRef()
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

  const onSubmit = async (data, e) => {
    e.preventDefault()

    toast.success('Update information successfully!')
  }
  const { register, handleSubmit } = useForm()
  return (
    <div className={cx('details')}>
      <div className={cx('title')}>Add News</div>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('details_2')}>
        <div
          className={cx('items')}
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div className={cx('uploadimg')}>
            <div className={cx('title')}>Upload Image</div>
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
                  {...register('avt')}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Title</div>
          <textarea
            className={cx('input')}
            style={{
              height: '50px',
              width: '100%'
            }}
            placeholder='Title'
            type='text'
            {...register('title_paper')}
          ></textarea>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Content</div>
          <textarea
            className={cx('input')}
            style={{
              height: '50px',
              width: '100%'
            }}
            placeholder='Content '
            type='text'
            {...register('contentpapper')}
          ></textarea>
        </div>

        <div className={cx('footter')}>
          <button className={cx('cancel')} onClick={onClose}>
            Cancel
          </button>
          <button
            onClick={() => {
              formInput.current.click()
            }}
            type='submit'
            className={cx('save')}
          >
            Add News
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNews

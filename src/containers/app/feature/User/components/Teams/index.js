/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Teams.module.sass'
import { useEffect, useRef, useState } from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { UrlLinkedin, UrlTwitter, UrlFacebook, IconAddMember } from '@src/assets/svgs'
import { Link } from 'react-router-dom'
import { useAddMemberMutation, useGetTeamMemberbyIDMutation, userApi } from '../../userService'
import toast from 'react-hot-toast'
import { setTeamMember } from '@src/containers/app/feature/User/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
// import { MemberUser } from '@src/app-configs'

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
  // console.log('member: ', MemberUser)
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const formInput = useRef()
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
  const userInfo = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const [getteammemberbyid, { data: MemberUserbyId }] = useGetTeamMemberbyIDMutation(
    userApi.endpoints.getteammemberbyid
  )
  useEffect(() => {
    getteammemberbyid(userInfo?._id)
  }, [getteammemberbyid, userInfo?._id])
  const [addMember, { isLoading: isUpdating }] = useAddMemberMutation()
  const onSubmit = async (data, e) => {
    const updateResponse = await addMember({
      data,
      username: userInfo?.username,
      fullNameUserTeam: data.fullNameUserTeam,
      position: data.position,
      bio: data.bio,
      linkedinUrl: data.linkedinUrl,
      facebookUrl: data.facebookUrl,
      twitterUrl: data.twitterUrl
    })
    e.preventDefault()
    if (!updateResponse?.error) {
      toast.success('Update information successfully!')
      const response = await getteammemberbyid(userInfo?._id, false)
      if (!response?.error) {
        console.log('response::  ', response)
        dispatch(setTeamMember(response.data[0]))
      }
    } else {
      toast.error('Something went wrong, please try again')
    }
  }
  const { register, handleSubmit } = useForm()

  return (
    <div className={cx('main')}>
      <div className={cx('details')}>
        {MemberUserbyId?.teamMembers.length === 0 && (
          <div className={cx('__info')}>Chưa có thành viên nào, Hãy thêm thành viên</div>
        )}
        {MemberUserbyId?.teamMembers.map((member, index) => (
          <div key={index} className={cx('member')}>
            <div className={cx('box')}>
              <div className={cx('avatar_main')}>
                <div className={cx('avatar')}>
                  {member?.fullNameUserTeam && member?.fullNameUserTeam[0]?.toUpperCase()}
                </div>
              </div>
              <div className={cx('fullname')}>{member?.fullNameUserTeam}</div>
              <div className={cx('position')}>{member?.position}</div>
              <div className={cx('content')}>{member?.bio}</div>
              <div className={cx('url')}>
                <Link target='_blank' to={member?.facebookUrl}>
                  <UrlFacebook />
                </Link>
                <Link target='_blank' to={member?.linkedinUrl}>
                  <UrlLinkedin />
                </Link>
                <Link target='_blank' to={member?.twitterUrl}>
                  <UrlTwitter />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('details_2')}>
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
            {...register('fullNameUserTeam')}
          ></input>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Position</div>
          <input
            className={cx('input')}
            style={{
              height: '40px'
            }}
            placeholder='Import'
            type='text'
            {...register('position')}
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
            {...register('bio')}
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
              {...register('linkedinUrl')}
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
              placeholder='Facebook URL'
              type='text'
              {...register('facebookUrl')}
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
              placeholder='Twitter URL'
              type='text'
              {...register('twitterUrl')}
            ></input>
          </div>
        </div>
        <button
          onClick={() => {
            formInput.current.click()
          }}
          type='submit'
          disabled={isUpdating}
          className={cx('button')}
        >
          <div
            style={{
              marginTop: '2px'
            }}
          >
            <IconAddMember />
          </div>
          <div>Add member</div>
        </button>
      </form>
    </div>
  )
}

export default Teams

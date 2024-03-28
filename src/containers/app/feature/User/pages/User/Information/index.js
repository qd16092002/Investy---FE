import classNames from 'classnames/bind'
import styles from './Information.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useChangeUserInformationMutation } from '../../../userService'
import { useRef, useState } from 'react'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'
import AppModal from '@src/components/AppModal'
import CV from '../../../components/InformationUser/CV'

const cx = classNames.bind(styles)
const TABS = {
  MYINFOR: {
    code: 'MYINFOR'
  },
  CHANGEPASSWORD: {
    code: 'CHANGEPASSWORD'
  },
  SENDCV: {
    code: 'SENDCV'
  }
}
function Information() {
  const onClose = () => {
    closeRef.current.click()
  }
  const closeRef = useRef()
  const [activeTab, setActiveTab] = useState(TABS.MYINFOR)
  const { register, handleSubmit } = useForm()
  const formInput = useRef()
  const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()
  const dispatch = useDispatch()
  const [getProfile] = authApi.endpoints.getLayoutUser.useLazyQuery()
  const userInfo = useSelector((state) => state.auth.user)
  const onSubmit = async (data, e) => {
    const updateResponse = await updateUser(data)
    e.preventDefault()
    if (!updateResponse?.error) {
      toast.success('Update information successfully!')
      const response = await getProfile({}, false)
      if (!response?.error) {
        console.log('response::  ', response)
        dispatch(setUser(response.data[0]))
      }
    } else {
      toast.error('Something went wrong, please try again')
    }
  }
  return (
    <div className={cx('form-wallpaper')}>
      <Toaster position='top-center' />
      <div className={cx('navbar')}>
        <div className={cx('title')}>My Info</div>
        <div className={cx('line')}></div>
        <div className={cx('header__process')}>
          <button
            onClick={() => setActiveTab(TABS.MYINFOR)}
            className={cx('header__title', activeTab.code === TABS.MYINFOR.code ? 'active' : 'inactive')}
          >
            My Info
          </button>
          <button
            onClick={() => setActiveTab(TABS.CHANGEPASSWORD)}
            className={cx('header__title', activeTab.code === TABS.CHANGEPASSWORD.code ? 'active' : 'inactive')}
          >
            Change password
          </button>
          <button
            onClick={() => setActiveTab(TABS.SENDCV)}
            className={cx('header__title', activeTab.code === TABS.SENDCV.code ? 'active' : 'inactive')}
          >
            Sent CVs
          </button>
        </div>
      </div>

      {activeTab.code === TABS.MYINFOR.code && (
        <div className={cx('content')}>
          <div className={cx('title')}>My Info</div>
          <form onSubmit={handleSubmit(onSubmit)} className={cx('box')}>
            <div className={cx('div1')}>
              <div className={cx('avatar')}>{userInfo?.fullName && userInfo?.fullName[0]?.toUpperCase()}</div>
            </div>
            <div className={cx('div2')}>
              <div className={cx('label')}>Full Name</div>
              <input type='text' {...register('fullName')} defaultValue={userInfo?.fullName}></input>
              <div className={cx('note')}>You cannot change your nickname if there is an ongoing transaction.</div>
              <div className={cx('note')}>
                Only Korean/English letters/numbers can be used, and the same string as the email ID cannot be used.
              </div>
              <div className={cx('label')}>Email</div>
              <input
                style={{
                  backgroundColor: '#E8E8E8'
                }}
                type='text'
                {...register('email')}
                defaultValue={userInfo?.email}
                readOnly
              ></input>
              <div className={cx('note')}>To change your email address, please contact customer service.</div>
              <div className={cx('label')}>Phone number</div>
              <input type='number' {...register('phoneNumber')} defaultValue={userInfo?.phoneNumber}></input>
              <div className={cx('note')}>Please complete authentication to use the service smoothly.</div>
              <button
                onClick={() => {
                  formInput.current.click()
                }}
                type='submit'
                disabled={isUpdating}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      {activeTab.code === TABS.CHANGEPASSWORD.code && (
        <div className={cx('content')}>
          <div className={cx('title')}>Change password</div>
          <form onSubmit={handleSubmit(onSubmit)} className={cx('box')}>
            <div className={cx('div1')}>
              <div className={cx('avatar')}>{userInfo?.fullName && userInfo?.fullName[0]?.toUpperCase()}</div>
            </div>
            <div className={cx('div2')}>
              <div className={cx('label')}>Enter your password</div>
              <input type='text' placeholder='Enter your password here' {...register('password')}></input>

              <div className={cx('label')}>New password</div>
              <input type='text' placeholder='Enter your new password here'></input>
              <div className={cx('label')}>Re-enter new password</div>
              <input type='text' placeholder='Re-enter your new password here'></input>
              <button
                onClick={() => {
                  formInput.current.click()
                }}
                type='submit'
                disabled={isUpdating}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      {activeTab.code === TABS.SENDCV.code && (
        <div className={cx('content')}>
          <div className={cx('title')}>Sent CVs</div>
          <div className={cx('box2')}>
            <div className={cx('sentcv_avt')}>
              <div className={cx('avt')}></div>
            </div>
            <div className={cx('sentcv_content')}>
              <div className={cx('sentcv_title')}>
                <div className={cx('sentcv_info')}>
                  <div className={cx('sentcv_name')}>Alicia Thu Trang</div>
                  <div className={cx('sentcv_email')}>alicia@investy.io.vn</div>
                </div>
                <div className={cx('sentcv_button')}>
                  <div className={cx('button')}>COVER LETTER</div>

                  <AppModal
                    triggerBtn={<div className={cx('button')}>CV</div>}
                    contentStyle={{
                      width: '90vw',
                      height: '90vh',
                      backgroundColor: 'white',
                      boxShadow: '4px 4px 10px 0px #00000040',
                      borderRadius: '30px',
                      padding: '20px'
                    }}
                    ref={closeRef}
                  >
                    <CV onClose={onClose} />
                  </AppModal>
                </div>
              </div>
              <div className={cx('sentcv_detail')}>
                “For more than 2 years, I&apos;ve gone through technology startup companies that nurtured my passion for
                becoming afuture entrepreneur. With the ability to adapt quickly, work independently as well as analyze
                & solve problems. I&apos;minterested in empowering startups and innovators and seeking opportunities to
                explore my abilities in those fields.”
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Information

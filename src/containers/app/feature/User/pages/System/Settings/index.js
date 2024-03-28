/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Settings.module.sass'
import ChangePassword from '../../../components/System/ChangePassword'
import { IconMember, IconInformation } from '@src/assets/svgs'
import AppModal from '@src/components/AppModal'
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import { FormOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSendEmailMutation } from '../../../userService'
// import { FormOutlined } from 'antd'
const cx = classNames.bind(styles)

function Settings() {
  const userInfo = useSelector((state) => state.auth.user)
  const onClose = () => {
    closeRef.current.click()
  }
  const formInput = useRef()
  const [settingsShow, setsettingsShow] = useState(false)
  const closeRef = useRef()
  const { register, handleSubmit } = useForm()
  const [sendEmail] = useSendEmailMutation()
  const onSubmit = async (data, e) => {
    const updateResponse = await sendEmail({
      data,
      username: userInfo?.username,
      to: data.to,
      user: userInfo?.fullName
    })
    e.preventDefault()
    if (!updateResponse?.error) {
      toast.success('Send Email successfully!')
    } else {
      toast.success('Send Email successfully!')
    }
  }
  return (
    <div className={cx('main')}>
      <div className={cx('title')}>
        <div className={cx('user')}>
          <div className={cx('icon')}>
            <IconMember />
            <div className={cx('infor')}>User</div>
          </div>
          <AppModal
            triggerBtn={<div className={cx('invite')}>Invite User</div>}
            contentStyle={{
              width: '30vw',
              // height: '72vh',
              left: '58vw',
              top: '40vh',
              backgroundColor: 'white',
              boxShadow: '4px 4px 10px 0px #00000040',
              borderRadius: '7px',
              padding: '20px'
            }}
            ref={closeRef}
          >
            <form onSubmit={handleSubmit(onSubmit)} className={cx('modal')}>
              <div className={cx('titlemodal')}>Add New Member</div>
              <input
                className={cx('inputsettings_2')}
                placeholder='Add Email New Member'
                type='text'
                {...register('to')}
              ></input>
              <div className={cx('button')}>
                <button
                  className={cx('add')}
                  onClick={() => {
                    formInput.current.click()
                  }}
                  type='submit'
                >
                  Sent
                </button>
                <button className={cx('cancel')} onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </AppModal>
        </div>
        <div className={cx('underline')}></div>
        <div
          className={cx('user')}
          style={{
            marginTop: '15px'
          }}
        >
          <div className={cx('icon')}>
            <IconInformation />
            {settingsShow ? (
              <input className={cx('input')} defaultValue={userInfo?.email}></input>
            ) : (
              <div className={cx('email')}>{userInfo?.email}</div>
            )}
          </div>
          <div className={cx('invite')} onClick={() => setsettingsShow(!settingsShow)}>
            <FormOutlined />
          </div>
        </div>
      </div>
      <div
        className={cx('title')}
        style={{
          marginTop: '20px'
        }}
      >
        <ChangePassword />
      </div>
    </div>
  )
}

export default Settings

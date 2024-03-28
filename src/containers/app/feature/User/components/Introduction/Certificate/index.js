/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Certificate.module.sass'
import {
  CertificateIconLink,
  // CertificateIconUpload,
  CloseIcon
} from '@src/assets/svgs'
// import { Button, Upload, message } from 'antd'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useChangeUserInformationMutation } from '../../../userService'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'

const cx = classNames.bind(styles)
// const props = {
//   name: 'file',
//   action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//   headers: {
//     authorization: 'authorization-text'
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList)
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`)
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`)
//     }
//   }
// }
function Certificate({ onClose }) {
  const userInfo = useSelector((state) => state.auth.user)
  const { register, handleSubmit } = useForm()
  const formInput = useRef()
  const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()
  const dispatch = useDispatch()
  const [getProfile] = authApi.endpoints.getLayoutUser.useLazyQuery()

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
    <form onSubmit={handleSubmit(onSubmit)} className={cx('main')}>
      <Toaster position='top-center' />

      <div className={cx('header')}>
        <div className={cx('title_1')}>Certificate</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('title')}>Certificate</div>
      <input
        className={cx('input')}
        placeholder='Name of certificate'
        {...register(`certificate.[0].certificate`)}
        defaultValue={userInfo?.certificate?.[0]?.certificate}
      ></input>
      <div className={cx('title')}>Organization</div>
      <input
        className={cx('input')}
        placeholder='Name of organization'
        {...register(`certificate.[0].organization`)}
        defaultValue={userInfo?.certificate?.[0]?.organization}
      ></input>
      <div className={cx('title')}>Time</div>
      <div className={cx('checkbox')}></div>
      <div className={cx('checktime')}>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Starting time</div>
          <div className={cx('daymonth')}>
            <select
              className={cx('select')}
              {...register(`certificate.[0].startingtimemonth`)}
              defaultValue={userInfo?.certificate?.[0]?.startingtimemonth}
            >
              <option value='' disabled selected hidden>
                Month
              </option>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            <input
              className={cx('select')}
              placeholder='Year'
              min='1980'
              max='2028'
              {...register(`certificate.[0].startingtimeyear`)}
              defaultValue={userInfo?.certificate?.[0]?.startingtimeyear}
            ></input>
          </div>
        </div>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Finishing time</div>
          <div className={cx('daymonth')}>
            <select
              className={cx('select')}
              {...register(`certificate.[0].finishingtimemonth`)}
              defaultValue={userInfo?.certificate?.[0]?.finishingtimemonth}
            >
              <option value='' disabled selected hidden>
                Month
              </option>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            <input
              className={cx('select')}
              placeholder='Year'
              min='1980'
              max='2028'
              {...register(`certificate.[0].finishingtimeyear`)}
              defaultValue={userInfo?.certificate?.[0]?.finishingtimeyear}
            ></input>
          </div>
        </div>
      </div>
      <div className={cx('title')}>Upload your certificate</div>
      <div className={cx('footer')}>
        {/* <Upload {...props}>
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
        </Upload> */}

        <div className={cx('upload1')}>
          <CertificateIconLink />
        </div>
        <input
          placeholder='Insert the link'
          className={cx('upload2')}
          {...register(`certificate.[0].file`)}
          defaultValue={userInfo?.certificate?.[0]?.file}
        ></input>
      </div>
      <button
        className={cx('save')}
        onClick={() => {
          formInput.current.click()
        }}
        type='submit'
        disabled={isUpdating}
      >
        Save
      </button>
    </form>
  )
}

export default Certificate

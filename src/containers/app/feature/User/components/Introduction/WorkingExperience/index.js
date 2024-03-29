/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './WorkingExperience.module.sass'
import { CloseIcon } from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useChangeUserInformationMutation } from '../../../userService'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'
import { useRef } from 'react'

const cx = classNames.bind(styles)

function WorkingExperience({ onClose }) {
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
        <div className={cx('title_1')}>Working experience</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('title')}>Company</div>
      <input
        className={cx('input')}
        placeholder='Name of company'
        {...register(`workingexperience.[0].company`)}
        defaultValue={userInfo?.workingexperience?.[0]?.company}
      ></input>
      <div className={cx('title')}>Position</div>
      <input
        className={cx('input')}
        placeholder='Title'
        {...register(`workingexperience.[0].position`)}
        defaultValue={userInfo?.workingexperience?.[0]?.position}
      ></input>
      <div className={cx('title')}>Time</div>
      <div className={cx('checkbox')}></div>
      <div className={cx('checktime')}>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Starting time</div>
          <div className={cx('daymonth')}>
            <select
              className={cx('select')}
              {...register(`workingexperience.[0].startingtimemonth`)}
              defaultValue={userInfo?.workingexperience?.[0]?.startingtimemonth}
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
              type='number'
              placeholder='Year'
              min='1980'
              max='2028'
              {...register(`workingexperience.[0].startingtimeyear`)}
              defaultValue={userInfo?.workingexperience?.[0]?.startingtimeyear}
            ></input>
          </div>
        </div>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Finishing time</div>
          <div className={cx('daymonth')}>
            <select
              className={cx('select')}
              {...register(`workingexperience.[0].finishingtimemonth`)}
              defaultValue={userInfo?.workingexperience?.[0]?.finishingtimemonth}
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
              type='number'
              className={cx('select')}
              placeholder='Year'
              min='1980'
              max='2028'
              {...register(`workingexperience.[0].finishingtimeyear`)}
              defaultValue={userInfo?.workingexperience?.[0]?.finishingtimeyear}
            ></input>
          </div>
        </div>
      </div>
      <div className={cx('title')}>Description</div>
      <textarea
        className={cx('textarea')}
        placeholder='Write your detailed description of your education'
        {...register(`workingexperience.[0].description`)}
        defaultValue={userInfo?.workingexperience?.[0]?.description}
      ></textarea>
      <button
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

export default WorkingExperience

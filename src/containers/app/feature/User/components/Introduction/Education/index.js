/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Education.module.sass'
import { CloseIcon } from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useChangeUserInformationMutation } from '../../../userService'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'

const cx = classNames.bind(styles)

function Education({ onClose }) {
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
        <div className={cx('title_1')}>Education</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('title')}>University</div>
      <input
        className={cx('input')}
        placeholder='University'
        {...register(`education.[0].university`)}
        defaultValue={userInfo?.education?.[0]?.university}
      ></input>
      <div className={cx('title')}>Major</div>
      <input
        className={cx('input')}
        placeholder='Major'
        {...register(`education.[0].major`)}
        defaultValue={userInfo?.education?.[0]?.major}
      ></input>
      <div className={cx('title')}>Time</div>
      <div className={cx('checkbox')}></div>
      <div className={cx('checktime')}>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Starting time</div>
          <div className={cx('daymonth')}>
            <select
              className={cx('select')}
              {...register(`education.[0].startingtimemonth`)}
              defaultValue={userInfo?.education?.[0]?.startingtimemonth}
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
              {...register(`education.[0].startingtimeyear`)}
              defaultValue={userInfo?.education?.[0]?.startingtimeyear}
            ></input>
          </div>
        </div>
        <div className={cx('time')}>
          <div className={cx('title_2')}>Finishing time</div>
          <div className={cx('daymonth')}>
            <select
              className={cx('select')}
              {...register(`education.[0].finishingtimemonth`)}
              defaultValue={userInfo?.education?.[0]?.finishingtimemonth}
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
              {...register(`education.[0].finishingtimeyear`)}
              defaultValue={userInfo?.education?.[0]?.finishingtimeyear}
            ></input>
          </div>
        </div>
      </div>
      <div className={cx('title')}>Description</div>
      <textarea
        className={cx('textarea')}
        placeholder='Write your detailed description of your education'
        {...register(`education.[0].description`)}
        defaultValue={userInfo?.education?.[0]?.description}
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

export default Education

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Skills.module.sass'
import { Rate } from 'antd'
import { CloseIcon } from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useChangeUserInformationMutation } from '../../../userService'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'

const cx = classNames.bind(styles)

function Skills({ onClose }) {
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
        <div className={cx('title_1')}>Skills</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>

      <div className={cx('title')}>Name of the skill</div>
      <input
        className={cx('input')}
        placeholder='Name of the skill'
        {...register(`skills.[0].name`)}
        defaultValue={userInfo?.skills?.[0]?.name}
      ></input>
      <div className={cx('title')}>Organization</div>
      <input
        className={cx('input')}
        placeholder='Organization'
        {...register(`skills.[0].organization`)}
        defaultValue={userInfo?.skills?.[0]?.organization}
      ></input>
      <div className={cx('title')}>Evaluation</div>
      <div className={cx('rate')}>
        <Rate
          allowHalf
          style={{
            marginRight: '20px',
            fontSize: '30px'
          }}
          {...register(`skills.[0].evaluation`)}
          defaultValue={userInfo?.skills?.[0]?.evaluation}
        />
      </div>

      <div className={cx('title')}>Description</div>
      <textarea
        className={cx('textarea')}
        {...register(`skills.[0].description`)}
        defaultValue={userInfo?.skills?.[0]?.description}
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

export default Skills

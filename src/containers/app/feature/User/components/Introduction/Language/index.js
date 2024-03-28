/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Language.module.sass'
import { CloseIcon } from '@src/assets/svgs'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useChangeUserInformationMutation } from '../../../userService'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'

const cx = classNames.bind(styles)

function Language({ onClose }) {
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
        <div className={cx('title_1')}>Language</div>
        <div className={cx('icon')} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('box')}>
        <div className={cx('right')}>
          <div className={cx('title')}>Language 1</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].language1`)}
            defaultValue={userInfo?.language?.[0]?.language1}
          ></input>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>Proficiency 1</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].detail1`)}
            defaultValue={userInfo?.language?.[0]?.detail1}
          ></input>
        </div>
      </div>
      <div className={cx('box')}>
        <div className={cx('right')}>
          <div className={cx('title')}>Language 2</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].language2`)}
            defaultValue={userInfo?.language?.[0]?.language2}
          ></input>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>Proficiency 2</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].detail2`)}
            defaultValue={userInfo?.language?.[0]?.detail2}
          ></input>
        </div>
      </div>
      <div className={cx('box')}>
        <div className={cx('right')}>
          <div className={cx('title')}>Language 3</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].language3`)}
            defaultValue={userInfo?.language?.[0]?.language3}
          ></input>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>Proficiency 3</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].detail3`)}
            defaultValue={userInfo?.language?.[0]?.detail3}
          ></input>
        </div>
      </div>
      <div className={cx('box')}>
        <div className={cx('right')}>
          <div className={cx('title')}>Language 4</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].language4`)}
            defaultValue={userInfo?.language?.[0]?.language4}
          ></input>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>Proficiency 4</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].detail4`)}
            defaultValue={userInfo?.language?.[0]?.detail4}
          ></input>
        </div>
      </div>
      <div className={cx('box')}>
        <div className={cx('right')}>
          <div className={cx('title')}>Language 5</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].language5`)}
            defaultValue={userInfo?.language?.[0]?.language5}
          ></input>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>Proficiency 5</div>
          <input
            className={cx('input')}
            placeholder='Name of the skill'
            {...register(`language.[0].detail5`)}
            defaultValue={userInfo?.language?.[0]?.detail5}
          ></input>
        </div>
      </div>

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

export default Language

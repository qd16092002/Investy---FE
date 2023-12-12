/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './OverviewUser.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { useChangeUserInformationMutation } from '../../userService'
import { useRef } from 'react'
import { Select } from 'antd'
import { IconMoney, UrlFacebook, UrlLinkedin, UrlTwitter } from '@src/assets/svgs'
import { BusinessType, Producttype } from '@src/app-configs'

const cx = classNames.bind(styles)

function OverviewUser() {
  const userInfo = useSelector((state) => state.auth.user)
  const { register, handleSubmit } = useForm()
  const formInput = useRef()
  const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()

  // const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()
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
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <div className={cx('main')}>
      <Toaster position='top-center' />
      <form onSubmit={handleSubmit(onSubmit)} className={cx('details')}>
        <div className={cx('__info')}>
          <div className={cx('title')}>Company overview</div>
          <div className={cx('item')}>
            <p>Title </p>
            <input
              className={cx('inputsettings')}
              placeholder='Import'
              type='text'
              {...register('fullName')}
              defaultValue={userInfo?.fullName}
            ></input>
          </div>

          <div className={cx('item')}>
            <p>Specific address</p>
            <input
              className={cx('inputsettings')}
              placeholder='Import'
              type='text'
              {...register('address')}
              defaultValue={userInfo?.address}
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Web url</p>
            <input
              className={cx('inputsettings')}
              placeholder='Copy & Import...'
              type='text'
              {...register('phoneNumber')}
              defaultValue={userInfo?.phoneNumber}
            ></input>
          </div>
          <div
            className={cx('title')}
            style={{
              marginTop: '20px'
            }}
          >
            Detail
          </div>
          <div className={cx('detail')}>
            <div className={cx('item_2')}>
              <p>Business type</p>
              <Select
                {...register('interestedField', { required: 'Interested field is required' })}
                mode='multiple'
                id='interestedField'
                style={{
                  width: '230px',
                  borderRadius: '7px',
                  border: '1px solid #7A7A7A',
                  color: '#7A7A7A',
                  alignItems: 'center',
                  marginTop: '3px'
                  // padding: '3px'
                }}
                onChange={handleChange}
                optionLabelProp='label'
                options={BusinessType}
              />
            </div>

            <div className={cx('item_2')}>
              <p>Product type</p>
              <Select
                {...register('interestedField', { required: 'Interested field is required' })}
                mode='multiple'
                id='interestedField'
                style={{
                  width: '230px',
                  borderRadius: '7px',
                  border: '1px solid #7A7A7A',
                  color: '#7A7A7A',
                  alignItems: 'center',
                  marginTop: '3px'
                  // padding: '3px'
                }}
                onChange={handleChange}
                optionLabelProp='label'
                options={Producttype}
              />
            </div>

            <div className={cx('item_2')}>
              <p>Company stage</p>
              <select
                {...register('subject')}
                style={{
                  width: '230px',
                  height: '33.5px',
                  borderRadius: '5px',
                  border: '1px solid #7A7A7A',
                  color: '#7A7A7A',
                  alignItems: 'center',
                  marginTop: '3px',
                  paddingLeft: '5px'
                }}
                placeholder='Chọn'
              >
                <option value='Idea'>Idea</option>
                <option value='Early Growth'>Early Growth</option>
                <option value='Growth'>Growth</option>
                <option value='Seed'>Seed</option>
                <option value='Pre-seed'>Pre-seed</option>
                <option value='Maturity'>Maturity</option>
              </select>
            </div>
          </div>
          <div className={cx('detail')}>
            <div className={cx('item_2')}>
              <p>Annual revenue</p>
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
                <IconMoney />
                <input
                  className={cx('inputsettings_2')}
                  placeholder='Annual revenue'
                  type='text'
                  {...register('phoneNumber')}
                  defaultValue={userInfo?.phoneNumber}
                ></input>
              </div>
            </div>

            <div className={cx('item_2')}>
              <p>MRR</p>
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
                <IconMoney />
                <input
                  className={cx('inputsettings_2')}
                  placeholder='MRR'
                  type='text'
                  {...register('phoneNumber')}
                  defaultValue={userInfo?.phoneNumber}
                ></input>
              </div>
            </div>

            <div className={cx('item_2')}>
              <p>Employees count</p>
              <input
                style={{
                  width: '230px',
                  height: '33.5px',
                  borderRadius: '5px',
                  border: '1px solid #7A7A7A',
                  color: '#7A7A7A',
                  alignItems: 'center',
                  marginTop: '3px',
                  paddingLeft: '5px'
                }}
                placeholder='Import...'
                type='text'
                {...register('phoneNumber')}
                defaultValue={userInfo?.phoneNumber}
              ></input>
            </div>
          </div>
          <div
            className={cx('title')}
            style={{
              marginTop: '30px'
            }}
          >
            Social media links
          </div>
          <div className={cx('detail')}>
            <div className={cx('item_2')}>
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
                  placeholder='LinkedIn URL'
                  type='text'
                  {...register('phoneNumber')}
                  defaultValue={userInfo?.phoneNumber}
                ></input>
              </div>
            </div>

            <div className={cx('item_2')}>
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
                  placeholder='Facebook URL'
                  type='text'
                  {...register('phoneNumber')}
                  defaultValue={userInfo?.phoneNumber}
                ></input>
              </div>
            </div>

            <div className={cx('item_2')}>
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
                  placeholder='Twitter URL'
                  type='text'
                  {...register('phoneNumber')}
                  defaultValue={userInfo?.phoneNumber}
                ></input>
              </div>
            </div>
          </div>
          <div
            className={cx('title')}
            style={{
              marginTop: '30px'
            }}
          >
            Funding round
          </div>
          <div className={cx('detail')}>
            <div className={cx('curentlyraising')}>
              <div className={cx('title')}>CURRENTLY RAISING</div>
              <div className={cx('content')}>The external funding the project needs now.</div>
              <button>Set current round</button>
            </div>
            <div className={cx('previousfinancing')}>
              <div className={cx('title')}>PREVIOUS FINANCING</div>
              <div className={cx('content')}>Preverious external or internal financing of the project.</div>
              <button>Add previous round</button>
            </div>
          </div>
          <div className={cx('footer')}>
            <button
              onClick={() => {
                formInput.current.click()
              }}
              type='submit'
              disabled={isUpdating}
              className={cx('button')}
            >
              Update
            </button>
          </div>
        </div>
      </form>
      <div className={cx('details_2')}>
        <div className={cx('avatar_main')}>
          <div className={cx('avatar')}>{userInfo?.username && userInfo?.username[0]?.toUpperCase()}</div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Name</div>
          <div className={cx('content_name')}>{userInfo?.fullName}</div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Describe</div>
          <div
            className={cx('content')}
            style={{
              width: '70%'
            }}
          >
            This default behavior can lead to fonts with an inconsistent appearance in a PDF document. To make it
            consistent throughout all the PDFs, instead of using the default settings, you can choose a specific font
            for both Add Text and the fallback option in edit text features using the Font Options under the Content
            Editing preferences.
          </div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Web url</div>
          <div className={cx('contenturl')}>Avvtar Neytiri</div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>Specific address</div>
          <div className={cx('content_name')}>{userInfo?.address}</div>
        </div>
      </div>
    </div>
  )
}

export default OverviewUser

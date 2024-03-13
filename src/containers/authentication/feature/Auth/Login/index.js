/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import classNames from 'classnames/bind'
import styles from './Login.module.sass'
import { CheckIcon } from '@heroicons/react/20/solid'
import { EyeClose, EyeShow } from '@src/assets/svgs'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLazyGetLayoutUserQuery, useLoginMutation } from '../authService'
import { login, setUser } from '../authSlice'

const cx = classNames.bind(styles)

function Login() {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    isRememberPassword: false
  })
  const [eyeShow, setEyeshow] = useState(false)
  const [error, setError] = useState(false)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [loginRequest, { isLoading }] = useLoginMutation()
  const [getLayoutUser] = useLazyGetLayoutUserQuery()

  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  const onSubmit = async (data) => {
    setFormData({ ...formData, email: data.email, password: data.password })
    const response = await loginRequest(data).unwrap()

    if (response.error) {
      console.log(response.error)
    } else {
      console.log(response)
      getLayoutUser()
        .then((res) => {
          if (res.error) {
            console.log('error get user info:: ', error)
          } else {
            console.log('res.data[0]', res.data[0])
            dispatch(setUser(res.data[0]))
            dispatch(login())
            navigate('/')
          }
        })
        .catch((error) => console.log('error get user info:: ', error))
    }
  }

  return (
    <div className={cx('login-wrapper')}>
      <div>
        <div className={cx('form-wrapper')}>
          <div className={cx('form')}>
            <div className={cx('text-wrapper')}>
              <h3>Lets Get Started</h3>
              <div
                style={{
                  display: 'flex',
                  marginTop: '10px'
                }}
              >
                <div className={cx('acc')}></div>
                <div className={cx('acc_text')}>Account</div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('form-field')}>
                  <label htmlFor='email-login'>Email</label>
                  <input
                    // onChange={(e) => {
                    //   setFormData({ ...formData, email: e.target.value })
                    // }}
                    className={cx(errors.email ? 'error' : '')}
                    {...register('email', {
                      required: 'Email address is required',
                      onChange: () => setError(false)
                    })}
                    id='email-login'
                    type='text'
                    placeholder='Enter your email'
                  />
                  {errors.email && (
                    <p className={cx('error-text')} role='alert'>
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className={cx('form-field')}>
                  <label htmlFor='password-login'>Password</label>
                  <input
                    className={cx(errors.password ? 'error' : '')}
                    // onChange={(e) => {
                    //   setFormData({ ...formData, password: e.target.value })
                    // }}
                    {...register('password', { required: 'Password is required', onChange: () => setError(false) })}
                    id='password-login'
                    type={eyeShow === true ? 'text' : 'password'}
                    placeholder='Enter your password'
                  />
                  <div className={cx('eye-icon')} onClick={() => setEyeshow(!eyeShow)}>
                    {eyeShow ? <EyeShow /> : <EyeClose />}
                  </div>
                  {errors.password && (
                    <p className={cx('error-text')} role='alert'>
                      {errors.password?.message}
                    </p>
                  )}
                  {/* <div className={cx('error-text')}>*Wrong password</div> */}
                </div>
                {error && (
                  <div style={{ marginBottom: '8px' }} className={cx('error-text')}>
                    Sorry, the email or password you provided is incorrect.
                  </div>
                )}
                <div className={cx('password-check')}>
                  <div className={cx('checkbox')}>
                    <label htmlFor='remember-login'>
                      <div
                        style={
                          formData.isRememberPassword
                            ? { background: '#2B2C2C', border: 'none' }
                            : { background: 'none', border: '1px solid #2B2C2C' }
                        }
                        className={cx('check-icon')}
                      >
                        {formData.isRememberPassword && <CheckIcon />}
                      </div>
                      <div className={cx('text')}>Remember password</div>
                    </label>
                    <input
                      id='remember-login'
                      onChange={(e) => {
                        setFormData({ ...formData, isRememberPassword: e.target.checked })
                      }}
                      type='checkbox'
                    />
                  </div>
                  <button className={cx('button')} type='submit'>
                    {isLoading ? <ReactLoading type='bubbles' height={32} width={32} /> : 'Login'}
                  </button>
                </div>
              </form>
              <div style={{ marginTop: 'auto' }}>
                {/* <div className={cx('or')}>
                  <div className={cx('vecto')}></div>
                  <div>or</div>
                  <div className={cx('vecto')}></div>
                </div> */}
                {/* <Link to='https://www.facebook.com' target='_blank'>
                  <div className={cx('loginwithfacebook')}>
                    <div>
                      <FacebookLogin />
                    </div>

                    <div>
                      <LinkedLogin />
                    </div>
                  </div>
                </Link> */}
                <div className={cx('navigate-guide')}>
                  Don&apos;t have account?{' '}
                  <Link to='/signup' className={cx('signup')}>
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind'
import styles from './Signup.module.sass'
import { Row, Col, Select } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import { CheckIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
// import { FacebookLogo, GoogleLogo } from '@src/assets/svgs'
import { useSignupMutation } from '../authService'
import ReactLoading from 'react-loading'
import { useSelector } from 'react-redux'
import { BackgroundImage, EyeClose, EyeShow, LogoInvesty, Background2 } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function Signup() {
  const [signup, { isLoading }] = useSignupMutation()
  const [setNotAgree] = useState(false)
  const [formData] = useState({
    email: null,
    password: null,
    isAgree: false
  })
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const [eyeShow, setEyeShow] = useState(false)
  const [signupShow, setSignupShow] = useState(false)
  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    if (!formData.isAgree) {
      setNotAgree(true)
    } else {
      try {
        const response = await signup({
          username: data.username,
          email: data.email,
          role: data.role,
          password: data.password
        }).unwrap()

        console.log('response:: ', response)
        if (!response.error) {
          //redirect login page
          navigate('/login')
        }
      } catch (error) {
        if (error.data.detail === 'Username already exists')
          setError('username', { type: 'manual', message: error.data.detail }, { shouldFocus: true })
        else setError('email', { type: 'manual', message: error.data.detail }, { shouldFocus: true })
        console.log('error: ', error)
      }
    }
  }
  const TABS = {
    STARTUP: {
      code: 'STARTUP'
    },
    INVESTOR: {
      code: 'INVESTOR'
    }
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const options = [
    {
      label: 'Medical',
      value: 'Medical'
    },
    {
      label: 'Transportation',
      value: 'Transportation'
    },
    {
      label: 'F&B',
      value: 'F&B'
    },
    {
      label: 'Logistic',
      value: 'Logistic'
    },
    {
      label: 'Crypto, NFT',
      value: 'Crypto, NFT'
    }
  ]

  const [activeTab, setActiveTab] = useState(TABS.STARTUP)
  return (
    <div className={cx('login-wrapper')}>
      <BackgroundImage />
      <div>
        <div className={cx('form-wrapper')}>
          <div className={cx('form')}>
            <div className={cx('img-wrapper')}>
              <Background2 />
            </div>
            <div className={cx('text-wrapper')}>
              <div
                style={{
                  marginTop: '30px'
                }}
              >
                <LogoInvesty />
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {signupShow ? (
                  <div>
                    <div className={cx('header__process')}>
                      <div
                        className={cx('header__title', activeTab.code === TABS.STARTUP.code ? 'active' : 'inactive')}
                        onClick={() => setActiveTab(TABS.STARTUP)}
                      >
                        Start Up
                      </div>
                      <div
                        className={cx('header__title', activeTab.code === TABS.INVESTOR.code ? 'active' : 'inactive')}
                        onClick={() => setActiveTab(TABS.INVESTOR)}
                      >
                        Investor
                      </div>
                    </div>
                    {activeTab.code === TABS.INVESTOR.code && (
                      <Row gutter={24}>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='role'>Curent job</label>
                            <select {...register('curentJob')} className={cx('role')} id='curentJob'>
                              <option className={cx('option')} value='CEO'>
                                CEO
                              </option>
                              <option className={cx('option')} value='CTO'>
                                CTO
                              </option>
                              <option className={cx('option')} value='CMO'>
                                CMO
                              </option>
                            </select>
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='date_of_birth'>Date of birth</label>
                            <input
                              {...register('date_of_birth', { required: 'Date of birth is required' })}
                              id='date_of_birth'
                              type='text'
                              placeholder='Enter your Date of birth'
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field-2')}>
                            <label htmlFor='interestedField'>Interested field</label>
                            <Select
                              {...register('interestedField', { required: 'Interested field is required' })}
                              mode='multiple'
                              id='interestedField'
                              style={{
                                width: '100%',
                                height: '30px',
                                borderRadius: '7px',
                                border: '1px solid #7A7A7A',
                                color: '#7A7A7A',
                                alignItems: 'center',
                                marginTop: '8px'
                                // padding: '3px'
                              }}
                              onChange={handleChange}
                              optionLabelProp='label'
                              options={options}
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='involvedProjects'>Involved projects</label>
                            <input
                              {...register('involvedProjects', { required: 'Involved projects is required' })}
                              id='involvedProjects'
                              type='text'
                              placeholder='Enter your Involved projects'
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='linkedlnLink'>Linkedln Link</label>
                            <input
                              {...register('linkedlnLink', { required: 'Linkedln Link is required' })}
                              id='linkedlnLink'
                              placeholder='Enter your Linkedln Link'
                            />
                          </div>
                        </Col>
                      </Row>
                    )}
                    {activeTab.code === TABS.STARTUP.code && (
                      <Row gutter={24}>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='companyName'>Company name</label>
                            <input
                              {...register('companyName', { required: 'Company name is required' })}
                              id='companyName'
                              type='text'
                              placeholder='Enter your Company name'
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='date_of_birth'>Company establishment date</label>
                            <input
                              {...register('date_of_birth', { required: 'Company establishment date is required' })}
                              id='date_of_birth'
                              type='text'
                              placeholder='Enter your Company establishment date'
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field-2')}>
                            <label htmlFor='interestedField'>Interested field</label>
                            <Select
                              {...register('interestedField', { required: 'Interested field is required' })}
                              mode='multiple'
                              id='interestedField'
                              style={{
                                width: '100%',
                                height: '30px',
                                borderRadius: '7px',
                                border: '1px solid #7A7A7A',
                                color: '#7A7A7A',
                                alignItems: 'center',
                                marginTop: '8px'
                                // padding: '3px'
                              }}
                              onChange={handleChange}
                              optionLabelProp='label'
                              options={options}
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='involvedProjects'>Involved projects</label>
                            <input
                              {...register('involvedProjects', { required: 'Involved projects is required' })}
                              id='involvedProjects'
                              type='text'
                              placeholder='Enter your Involved projects'
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <div className={cx('form-field')}>
                            <label htmlFor='linkedlnLink'>Linkedln Link</label>
                            <input
                              {...register('linkedlnLink', { required: 'Linkedln Link is required' })}
                              id='linkedlnLink'
                              type='text'
                              placeholder='Enter your Linkedln Link'
                            />
                          </div>
                        </Col>
                      </Row>
                    )}

                    <button className={cx('button')} type='submit' disabled={isLoading}>
                      {isLoading ? <ReactLoading type='bubbles' height={32} width={32} /> : 'Sign up'}
                    </button>
                    <div
                      style={{
                        backgroundColor: '#CECECE'
                      }}
                      className={cx('button')}
                      onClick={() => setSignupShow(!signupShow)}
                    >
                      Back Step
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3>Lets Get Started</h3>
                    <Row gutter={24}>
                      <Col xs={24}>
                        <div className={cx('form-field')}>
                          <label htmlFor='username'>Account name</label>
                          <input
                            className={cx(errors.username ? 'error' : '')}
                            {...register('username', { required: 'Username is required' })}
                            id='username'
                            type='text'
                            placeholder='Enter your Account name'
                          />
                          {errors.username && (
                            <p className={cx('error-text')} role='alert'>
                              {errors.username?.message}
                            </p>
                          )}
                        </div>
                      </Col>
                      <Col xs={24}>
                        <div className={cx('form-field')}>
                          <label htmlFor='email-login'>Gmail</label>
                          <input
                            // onChange={(e) => {
                            //   setFormData({ ...formData, email: e.target.value })
                            // }}
                            className={cx(errors.email ? 'error' : '')}
                            {...register('email', { required: 'Email address is required' })}
                            id='email-login'
                            type='email'
                            placeholder='Enter your Gmail'
                          />
                          {errors.email && (
                            <p className={cx('error-text')} role='alert'>
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </Col>
                      <Col xs={24}>
                        <div className={cx('form-field')}>
                          <label htmlFor='password-login'>Password</label>
                          <input
                            className={cx(errors.password ? 'error' : '')}
                            // onChange={(e) => {
                            //   setFormData({ ...formData, password: e.target.value })
                            // }}
                            {...register('password', { required: 'Password is required' })}
                            id='password-login'
                            type={eyeShow ? 'text' : 'password'}
                            placeholder='Enter your password (+8 characters)'
                          />
                          <div className={cx('eye-icon')} onClick={() => setEyeShow(!eyeShow)}>
                            {eyeShow ? <EyeShow /> : <EyeClose />}
                          </div>
                          {errors.password && (
                            <p className={cx('error-text')} role='alert'>
                              {errors.password?.message}
                            </p>
                          )}
                          {/* <div className={cx('error-text')}>*Wrong password</div> */}
                        </div>
                      </Col>
                      <Col xs={24}>
                        <div className={cx('form-field')}>
                          <label htmlFor='phoneNumber'>Phone number</label>
                          <input
                            {...register('phoneNumber', { required: 'Phone number is required' })}
                            id='phoneNumber'
                            type='string'
                            placeholder='Enter your Phone number'
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className={cx('button-tiep')} onClick={() => setSignupShow(!signupShow)}>
                      Next
                    </div>
                    <div className={cx('navigate-guide')}>
                      Already have account?{' '}
                      <Link to='/login' className={cx('signup')}>
                        Login now
                      </Link>
                    </div>
                  </div>
                )}{' '}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

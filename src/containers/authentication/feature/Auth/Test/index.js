/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind'
import styles from './Test.module.sass'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { EyeClose, EyeShow } from '@src/assets/svgs'
import { Col, Row } from 'antd'
import { useForm } from 'react-hook-form'
import recrui from '@src/assets/images/Auth/recrui.png'
import apply from '@src/assets/images/Auth/apply.png'
import toast, { Toaster } from 'react-hot-toast'
const cx = classNames.bind(styles)

function Test() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const [eyeShow, setEyeShow] = useState(false)
  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  const {
    register,

    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })
  const TABS = {
    REC: {
      code: 'REC'
    },
    APP: {
      code: 'APP'
    }
  }
  const handleButtonClick1 = () => {
    setActiveTab(TABS.REC)
    setSignupShow(!signupShow)
  }
  const handleButtonClick2 = () => {
    setActiveTab(TABS.APP)
    setSignupShow(!signupShow)
  }
  const backrecrui = () => {
    setRecShow(!recShow)
  }
  const backappli = () => {
    setAppShow(!appShow)
  }

  const onSubmit = async () => {
    toast.success('Register sucessfull!')
  }
  const [signupShow, setSignupShow] = useState(false)
  const [recShow, setRecShow] = useState(false)
  const [appShow, setAppShow] = useState(false)
  const [activeTab, setActiveTab] = useState(TABS.REC)
  return (
    <div className={cx('login-wrapper')}>
      <Toaster position='top-center' />
      <div>
        <div className={cx('form-wrapper')}>
          <div className={cx('form')}>
            <div className={cx('text-wrapper')}>
              <form>
                {signupShow ? (
                  <div>
                    {activeTab.code === TABS.REC.code && (
                      <div>
                        {recShow ? (
                          <div
                            style={{
                              marginLeft: '5%'
                            }}
                          >
                            <div className={cx('title_register')}>
                              Just check this and your registration is complete!
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                marginTop: '20px'
                              }}
                            >
                              <div className={cx('acc')}></div>
                              <div className={cx('acc_text')}>Recruiter information</div>
                            </div>
                            <div
                              style={{
                                marginTop: '20px'
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '92.5%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Full Name</div>
                                  <input className={cx('input')}></input>
                                </div>
                                <div
                                  style={{
                                    marginLeft: '100px'
                                  }}
                                >
                                  <div className={cx('label')}>Gender</div>
                                  <select className={cx('role')}>
                                    <option className={cx('option')} value='MALE'>
                                      MALE
                                    </option>
                                    <option className={cx('option')} value='FEMALE'>
                                      FEMALE
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Phone number</div>
                                  <input className={cx('input')}></input>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Company</div>
                                  <input className={cx('input')}></input>
                                </div>
                                <div>
                                  <div className={cx('label')}>Position</div>
                                  <input className={cx('input')}></input>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Location</div>
                                  <input className={cx('input')}></input>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                width: '85%'
                              }}
                            >
                              <div className={cx('button')} onClick={backrecrui}>
                                Back
                              </div>
                              <button className={cx('button')} type='submit' onClick={onSubmit}>
                                Submit
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{
                              marginLeft: '5%'
                            }}
                          >
                            <div className={cx('title_register')}>
                              Just check this and your registration is complete!
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                marginTop: '20px'
                              }}
                            >
                              <div className={cx('acc')}></div>
                              <div className={cx('acc_text')}>Account</div>
                            </div>
                            <div
                              style={{
                                marginTop: '20px'
                              }}
                            >
                              <Row gutter={24}>
                                <Col xs={24}>
                                  <div className={cx('form-field')}>
                                    <label htmlFor='email-login'>Email</label>
                                    <input
                                      // onChange={(e) => {
                                      //   setFormData({ ...formData, email: e.target.value })
                                      // }}
                                      className={cx(errors.email ? 'error' : '')}
                                      {...register('email', { required: 'Email address is required' })}
                                      id='email-login'
                                      type='email'
                                      placeholder='Enter your Email'
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
                                    <label htmlFor='password-login'>Re-Password</label>
                                    <input
                                      className={cx(errors.password ? 'error' : '')}
                                      // onChange={(e) => {
                                      //   setFormData({ ...formData, password: e.target.value })
                                      // }}
                                      {...register('password', { required: 'Password is required' })}
                                      id='password-login'
                                      type={eyeShow ? 'text' : 'password'}
                                      placeholder='Re-enter the password'
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
                              </Row>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                width: '85%'
                              }}
                            >
                              <div className={cx('button')} onClick={() => setSignupShow(!signupShow)}>
                                Back
                              </div>
                              <div className={cx('button')} onClick={() => setRecShow(!recShow)}>
                                Next
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {activeTab.code === TABS.APP.code && (
                      <div>
                        {appShow ? (
                          <div
                            style={{
                              marginLeft: '5%'
                            }}
                          >
                            <div className={cx('title_register')}>
                              Just check this and your registration is complete!
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                marginTop: '20px'
                              }}
                            >
                              <div className={cx('acc')}></div>
                              <div className={cx('acc_text')}>Recruiter information</div>
                            </div>
                            <div
                              style={{
                                marginTop: '20px'
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Full Name</div>
                                  <input className={cx('input')}></input>
                                </div>
                                <div
                                  style={{
                                    justifyContent: 'start'
                                  }}
                                >
                                  <div className={cx('label')}>Gender</div>
                                  <select {...register('gender')} className={cx('role')} id='curentJob'>
                                    <option className={cx('option')} value='MALE'>
                                      MALE
                                    </option>
                                    <option className={cx('option')} value='FEMALE'>
                                      FEMALE
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Full Name</div>
                                  <input className={cx('input')}></input>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Full Name</div>
                                  <input className={cx('input')}></input>
                                </div>
                                <div>
                                  <div className={cx('label')}>Gender</div>
                                  <input className={cx('input')}></input>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '85%'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Full Name</div>
                                  <input className={cx('input')}></input>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                width: '85%'
                              }}
                            >
                              <div className={cx('button')} onClick={backappli}>
                                Back
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{
                              marginLeft: '5%'
                            }}
                          >
                            <div className={cx('title_register')}>
                              Just check this and your registration is complete!
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                marginTop: '20px'
                              }}
                            >
                              <div className={cx('acc')}></div>
                              <div className={cx('acc_text')}>Account</div>
                            </div>
                            <div
                              style={{
                                marginTop: '20px'
                              }}
                            >
                              <Row gutter={24}>
                                <Col xs={24}>
                                  <div className={cx('form-field')}>
                                    <label htmlFor='email-login'>Email</label>
                                    <input
                                      // onChange={(e) => {
                                      //   setFormData({ ...formData, email: e.target.value })
                                      // }}
                                      className={cx(errors.email ? 'error' : '')}
                                      {...register('email', { required: 'Email address is required' })}
                                      id='email-login'
                                      type='email'
                                      placeholder='Enter your Email'
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
                                    <label htmlFor='password-login'>Re-Password</label>
                                    <input
                                      className={cx(errors.password ? 'error' : '')}
                                      // onChange={(e) => {
                                      //   setFormData({ ...formData, password: e.target.value })
                                      // }}
                                      {...register('password', { required: 'Password is required' })}
                                      id='password-login'
                                      type={eyeShow ? 'text' : 'password'}
                                      placeholder='Re-enter the password'
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
                              </Row>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                width: '85%'
                              }}
                            >
                              <div className={cx('button')} onClick={() => setSignupShow(!signupShow)}>
                                Back
                              </div>
                              <div className={cx('button')} onClick={() => setAppShow(!appShow)}>
                                Next
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <h3>Please, select your suitable role in Investy!</h3>
                    <h4>Even after signing up as a client, you can still register as an expert.</h4>
                    <div className={cx('rolechoice')}>
                      <div onClick={handleButtonClick1}>
                        <div>
                          <img src={recrui} alt='Recruiter'></img>
                        </div>
                        <div className={cx('buttonrole')}>Recruiter</div>
                      </div>
                      <div onClick={handleButtonClick2}>
                        <div>
                          <img src={apply} alt='Applicant'></img>
                        </div>
                        <div className={cx('buttonrole')}>Applicant</div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test

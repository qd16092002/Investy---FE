/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind'
import styles from './Signup.module.sass'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { EyeClose, EyeShow } from '@src/assets/svgs'
import { Col, Row } from 'antd'
import { useForm } from 'react-hook-form'
import recrui from '@src/assets/images/Auth/recrui.png'
import apply from '@src/assets/images/Auth/apply.png'
import { Toaster } from 'react-hot-toast'
import ReactLoading from 'react-loading'
import { useSignupMutation } from '../authService'
import { CheckIcon } from '@heroicons/react/20/solid'

const cx = classNames.bind(styles)

function Signup() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const [eyeShow, setEyeShow] = useState(false)
  const [notAgree, setNotAgree] = useState(false)
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
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    isAgree: false
  })
  const [signup, { isLoading }] = useSignupMutation()
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
    setSignupShow(!signupShow)
  }

  const [signupShow, setSignupShow] = useState(false)
  const [recShow, setRecShow] = useState(false)
  const [activeTab, setActiveTab] = useState(TABS.REC)

  return (
    <div className={cx('login-wrapper')}>
      <Toaster position='top-center' />
      <div>
        <div className={cx('form-wrapper')}>
          <div className={cx('form')}>
            <div className={cx('text-wrapper')}>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                                  width: '100%',
                                  gap: '40px'
                                }}
                              >
                                <div>
                                  <div className={cx('label')}>Full Name</div>
                                  <input className={cx('input')}></input>
                                </div>
                                <div>
                                  <div className={cx('label')}>Gender</div>
                                  <select className={cx('input')}>
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
                                  gap: '20px'
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
                            <div className={cx('password-check')}>
                              <div className={cx('password-check')}>
                                <div className={cx('checkbox')}>
                                  <label htmlFor='remember-login'>
                                    <div
                                      style={
                                        formData.isAgree
                                          ? { background: '#2B2C2C', border: 'none' }
                                          : { background: 'none', border: '1px solid #2B2C2C' }
                                      }
                                      className={cx('check-icon')}
                                    >
                                      {formData.isAgree && <CheckIcon />}
                                    </div>
                                    <div className={cx('text')}>I agree to TutorNow Terms and Privacy policy</div>
                                  </label>
                                  <input
                                    id='remember-login'
                                    onChange={(e) => {
                                      setNotAgree(false)
                                      setFormData({ ...formData, isAgree: e.target.checked })
                                    }}
                                    type='checkbox'
                                  />
                                </div>
                              </div>
                            </div>
                            {notAgree && <div className={cx('error-message-input')}>You must agree to sign up!</div>}
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

                              <button className={cx('button')} type='submit' disabled={isLoading}>
                                {isLoading ? <ReactLoading type='bubbles' height={32} width={32} /> : 'Sign up'}
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
                        <div
                          style={{
                            marginLeft: '5%'
                          }}
                        >
                          <div className={cx('title_register')}>Just check this and your registration is complete!</div>

                          <div
                            style={{
                              marginTop: '20px'
                            }}
                          >
                            <div
                              style={{
                                width: '95%',
                                marginTop: '25px'
                              }}
                            >
                              <div className={cx('label_appli')}>Full Name</div>
                              <input className={cx('input_appli')} placeholder='Enter your Full Name'></input>
                            </div>

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
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-around',
                              width: '85%',
                              marginTop: '25px'
                            }}
                          >
                            <div className={cx('button')} onClick={backappli}>
                              Back
                            </div>
                            <button className={cx('button')} type='submit' onClick={onSubmit}>
                              Submit
                            </button>
                          </div>
                        </div>
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
                    <Link to='/login'>
                      <div className={cx('haveaccount')}> I have already had the account</div>
                    </Link>
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

export default Signup

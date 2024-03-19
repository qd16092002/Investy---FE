import classNames from 'classnames/bind'
import styles from './Header.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { IconBoxSearch, LogoInvesty, SignOutIcon } from '@src/assets/svgs'

import { logout } from '@src/containers/authentication/feature/Auth/authSlice'
import Cookies from 'universal-cookie'
import { Divider, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import AppLongText from '@src/components/AppLongText'
import AppButton from '@src/components/AppButton'
import { v4 as uuidv4 } from 'uuid'
const cookies = new Cookies()
const cx = classNames.bind(styles)
const menuUser = [
  {
    title: 'About',
    link: '/'
  },
  {
    title: 'Recruitment',
    link: '/recruitment'
  },
  {
    title: 'Freelancer',
    link: '/freelance'
  },
  // {
  //   title: 'CV builder',
  //   link: '/cvbuild'
  // },
  {
    title: 'Company',
    link: '/company'
  },
  {
    title: 'Online course',
    link: '/online-cource'
  },
  {
    title: 'Blog',
    link: '/blog'
  }
]
const menuRecrui = [
  {
    title: 'Information',
    link: '/information'
  },
  {
    title: 'Invite friends',
    link: '/infomation'
  },
  {
    title: 'Recruitment',
    link: '/recruitmentuser'
  }
]
const menuApply = [
  {
    title: 'Profile',
    link: '/profile'
  },
  {
    title: 'Information',
    link: '/information'
  },
  {
    title: 'Invite friends',
    link: '/infomation'
  }
]
function Header() {
  const userInfo = useSelector((state) => state.auth.user)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    cookies.remove('access_token')
    navigate('/')
  }
  const location = useLocation()
  return (
    <div className={cx('header-wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logoandsearch')}>
          <Link to='/' className={cx('logo')}>
            <LogoInvesty />
          </Link>
          <div className={cx('boxsearch')}>
            <input className={cx('input_search')} placeholder='Find'></input>
            <label htmlFor='search' className={cx('icon')}>
              <IconBoxSearch />
            </label>
          </div>
        </div>
        {isLoggedIn ? (
          <div>
            <div
              className={cx('dropdown')}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                width: '300px'
              }}
            >
              <Dropdown
                overlay={
                  <Menu style={{ borderRadius: '20px', padding: '10px', maxWidth: '450px' }}>
                    {userInfo?.role !== 'APPLICANT' && (
                      <ul className={cx('menu')}>
                        {menuRecrui.map((item, index) => {
                          return (
                            <div key={uuidv4(item.link)}>
                              <Menu.Item>
                                <Link to={item.link}>
                                  <div className={cx('header__icon')} key={uuidv4(index)}>
                                    <div
                                      style={{
                                        marginLeft: '3px'
                                      }}
                                    >
                                      {item.title}
                                    </div>
                                  </div>
                                </Link>
                              </Menu.Item>
                              <Divider
                                style={{
                                  margin: '5px 0px 0px 0px'
                                }}
                              />
                            </div>
                          )
                        })}
                      </ul>
                    )}
                    {userInfo?.role === 'APPLICANT' && (
                      <ul className={cx('menu')}>
                        {menuApply.map((item, index) => {
                          return (
                            <div key={uuidv4(item.link)}>
                              <Menu.Item>
                                <Link to={item.link}>
                                  <div className={cx('header__icon')} key={uuidv4(index)}>
                                    <div
                                      style={{
                                        marginLeft: '3px'
                                      }}
                                    >
                                      {item.title}
                                    </div>
                                  </div>
                                </Link>
                              </Menu.Item>
                              <Divider
                                style={{
                                  margin: '5px 0px 0px 0px'
                                }}
                              />
                            </div>
                          )
                        })}
                      </ul>
                    )}

                    <Menu.Item onClick={() => handleLogout(true)}>
                      <div className={cx('header__icon')}>
                        <SignOutIcon />
                        <div
                          style={{
                            marginLeft: '3px'
                          }}
                        >
                          Log out
                        </div>
                      </div>
                    </Menu.Item>
                  </Menu>
                }
                placement='bottom'
                trigger={['click']}
                // arrow={{ pointAtCenter: true }}
              >
                <div
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '100px',
                    width: '180px',
                    height: '50px',
                    justifyContent: 'center',
                    paddingTop: '5px',
                    marginTop: '19px',
                    marginRight: '20px'
                  }}
                >
                  <div className={cx('avatar')}>{userInfo?.fullName && userInfo?.fullName[0]?.toUpperCase()}</div>
                  <div
                    style={{
                      marginLeft: '10px',
                      marginTop: '5px'
                    }}
                  >
                    <div className={cx('name')}>{userInfo?.fullName}</div>
                    <AppLongText
                      styles={{
                        color: '#7A7A7A',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                      text={userInfo?.role}
                    ></AppLongText>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        ) : (
          <div className={cx('auth')}>
            <Link to='/login'>
              <div className={cx('signin')}>Sign In</div>
            </Link>
            <Link to='/signup'>
              <AppButton className={cx('signup')}>Sign Up</AppButton>
            </Link>
          </div>
        )}
      </div>
      <div className={cx('navbar')}>
        <div className={cx('icon')}>
          {menuUser.map((item, index) => {
            return (
              <Link key={uuidv4(item.link)} to={item.link}>
                <div className={cx(location.pathname === item.link ? 'active' : 'inactive')} key={uuidv4(index)}>
                  <p>{item.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header

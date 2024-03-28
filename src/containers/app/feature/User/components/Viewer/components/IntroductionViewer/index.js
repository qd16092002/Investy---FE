/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './IntroductionViewer.module.sass'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { useGetUserbyIdMutation } from '../../../../userService'
import { Rate } from 'antd'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const getUserId = (path) => {
  // Split the path and get the last part
  const pathParts = path.split('/')
  const userId = pathParts[pathParts.length - 1]
  return userId
}

function IntroductionViewer() {
  const { pathname } = useLocation()
  const userId = getUserId(pathname)
  const [getuserid, { data: userbyid }] = useGetUserbyIdMutation({ userId })
  useEffect(() => {
    getuserid(userId)
  }, [getuserid, userId])
  return (
    <div className={cx('main')}>
      <div
        className={cx('box')}
        style={{
          marginTop: '10px'
        }}
      >
        <div className={cx('title')}>Introduction</div>
        <div className={cx('content')}>{userbyid?.introduction}</div>
      </div>
      <div>
        <div className={cx('box')}>
          <div className={cx('title')}>Working Experience</div>
          <div className={cx('titlebold')}>{userbyid?.workingexperience?.[0]?.company}</div>
          <div className={cx('content')}>{userbyid?.workingexperience?.[0]?.company}</div>
          <div className={cx('content')}>{userbyid?.workingexperience?.[0]?.position}</div>
          <div className={cx('date')}>
            <div className={cx('content2')}>
              {userbyid?.workingexperience?.[0]?.startingtimemonth} {userbyid?.workingexperience?.[0]?.startingtimeyear}
            </div>
            <div className={cx('content2')}>-</div>
            <div className={cx('content2')}>
              {userbyid?.workingexperience?.[0]?.finishingtimemonth}{' '}
              {userbyid?.workingexperience?.[0]?.finishingtimeyear}
            </div>
          </div>
          <div className={cx('content')}>{userbyid?.workingexperience?.[0]?.description}</div>
        </div>
        <div className={cx('box')}>
          <div className={cx('title')}>Education</div>
          <div className={cx('titlebold')}>{userbyid?.education?.[0]?.major}</div>
          <div className={cx('content')}>{userbyid?.education?.[0]?.university}</div>
          <div className={cx('date')}>
            <div className={cx('content2')}>
              {userbyid?.education?.[0]?.startingtimemonth} {userbyid?.education?.[0]?.startingtimeyear}
            </div>
            <div className={cx('content2')}>-</div>
            <div className={cx('content2')}>
              {userbyid?.education?.[0]?.finishingtimemonth} {userbyid?.education?.[0]?.finishingtimeyear}
            </div>
          </div>
          <div className={cx('content')}>{userbyid?.education?.[0]?.description}</div>
        </div>
        <div className={cx('box')}>
          <div className={cx('title')}>Skills</div>
          <div className={cx('titlebold')}>{userbyid?.skills?.[0]?.name}</div>
          <div className={cx('content')}>{userbyid?.skills?.[0]?.organization}</div>
          <div className={cx('content')}>
            <Rate
              allowHalf
              style={{
                marginRight: '20px',
                fontSize: '30px'
              }}
              defaultValue={userbyid?.skills?.[0]?.evaluation}
            />
          </div>
          <div className={cx('content')}>{userbyid?.skills?.[0]?.description}</div>
        </div>
        <div className={cx('box')}>
          <div className={cx('title')}>Certificate</div>
          <div className={cx('titlebold')}>{userbyid?.certificate?.[0]?.certificate}</div>
          <div className={cx('content')}>{userbyid?.certificate?.[0]?.organization}</div>
          <div className={cx('date')}>
            <div className={cx('content2')}>
              {userbyid?.certificate?.[0]?.startingtimemonth} {userbyid?.certificate?.[0]?.startingtimeyear}
            </div>
            <div className={cx('content2')}>-</div>
            <div className={cx('content2')}>
              {userbyid?.certificate?.[0]?.finishingtimemonth} {userbyid?.certificate?.[0]?.finishingtimeyear}
            </div>
          </div>
          <Link target='_blank' to={userbyid?.certificate?.[0]?.file}>
            <div className={cx('content3')}>Link Certificate</div>
          </Link>
        </div>
        <div className={cx('box')}>
          <div className={cx('title')}>Extracullar Activities</div>
          <div className={cx('titlebold')}>{userbyid?.extracurricular?.[0]?.organization}</div>
          <div className={cx('content')}>{userbyid?.extracurricular?.[0]?.position}</div>
          <div className={cx('date')}>
            <div className={cx('content2')}>
              {userbyid?.extracurricular?.[0]?.startingtimemonth} {userbyid?.extracurricular?.[0]?.startingtimeyear}
            </div>
            <div className={cx('content2')}>-</div>
            <div className={cx('content2')}>
              {userbyid?.extracurricular?.[0]?.finishingtimemonth} {userbyid?.extracurricular?.[0]?.finishingtimeyear}
            </div>
          </div>
          <div className={cx('content')}>{userbyid?.extracurricular?.[0]?.description}</div>
        </div>
        <div className={cx('box')}>
          <div className={cx('title')}>Language</div>
          <div className={cx('titlebold')}>{userbyid?.language?.[0]?.language1}</div>
          <div className={cx('content')}>{userbyid?.language?.[0]?.detail1}</div>
          <div className={cx('titlebold')}>{userbyid?.language?.[0]?.language2}</div>
          <div className={cx('content')}>{userbyid?.language?.[0]?.detail2}</div>
          <div className={cx('titlebold')}>{userbyid?.language?.[0]?.language3}</div>
          <div className={cx('content')}>{userbyid?.language?.[0]?.detail3}</div>
          <div className={cx('titlebold')}>{userbyid?.language?.[0]?.language4}</div>
          <div className={cx('content')}>{userbyid?.language?.[0]?.detail4}</div>
          <div className={cx('titlebold')}>{userbyid?.language?.[0]?.language5}</div>
          <div className={cx('content')}>{userbyid?.language?.[0]?.detail5}</div>
          <div className={cx('titlebold')}>{userbyid?.language?.[0]?.language6}</div>
          <div className={cx('content')}>{userbyid?.language?.[0]?.detail6}</div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionViewer

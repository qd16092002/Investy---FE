/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Member.module.sass'
import { useGetTeamMemberbyIDMutation, userApi } from '../../userService'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UrlLinkedin, UrlTwitter, UrlFacebook } from '@src/assets/svgs'
import { MemberInvestor } from '@src/app-configs'

const cx = classNames.bind(styles)

function Member() {
  const [getteammemberbyid, { data: MemberUserbyId }] = useGetTeamMemberbyIDMutation(
    userApi.endpoints.getteammemberbyid
  )
  const userInfo = useSelector((state) => state.auth.user)
  useEffect(() => {
    getteammemberbyid(userInfo?._id)
  }, [getteammemberbyid, userInfo?._id])
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>Member</div>
      <div className={cx('content')}>
        <div></div>
        <div className={cx('infor')}>
          <div className={cx('item')}>Mentor</div>
          <div className={cx('boxmember')}>
            {MemberUserbyId?.teamMembers.map((member, index) => (
              <div key={index} className={cx('member')}>
                <div className={cx('box')}>
                  <div className={cx('avatar_main')}>
                    <div className={cx('avatar')}>
                      {member?.fullNameUserTeam && member?.fullNameUserTeam[0]?.toUpperCase()}
                    </div>
                  </div>
                  <div className={cx('fullname')}>{member?.fullNameUserTeam}</div>
                  <div className={cx('position')}>{member?.position}</div>
                  <div className={cx('content')}>{member?.bio}</div>
                  <div className={cx('url')}>
                    <Link target='_blank' to={member?.facebookUrl}>
                      <UrlFacebook />
                    </Link>
                    <Link target='_blank' to={member?.linkedinUrl}>
                      <UrlLinkedin />
                    </Link>
                    <Link target='_blank' to={member?.twitterUrl}>
                      <UrlTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx('infor')}>
          <div className={cx('item')}>Investor</div>
          <div className={cx('boxmember')}>
            {MemberInvestor.map((member, index) => (
              <div key={index} className={cx('member')}>
                <div className={cx('box')}>
                  <div className={cx('avatar_main')}>
                    <div className={cx('avatar')}>
                      {member?.fullNameUserTeam && member?.fullNameUserTeam[0]?.toUpperCase()}
                    </div>
                  </div>
                  <div className={cx('fullname')}>{member?.fullNameUserTeam}</div>
                  <div className={cx('position')}>{member?.position}</div>
                  <div className={cx('content')}>{member?.bio}</div>
                  <div className={cx('url')}>
                    <Link target='_blank' to={member?.facebookUrl}>
                      <UrlFacebook />
                    </Link>
                    <Link target='_blank' to={member?.linkedinUrl}>
                      <UrlLinkedin />
                    </Link>
                    <Link target='_blank' to={member?.twitterUrl}>
                      <UrlTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member

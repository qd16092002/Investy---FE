import classNames from 'classnames/bind'
import styles from './FooterLandingpage.module.sass'
import fb from '@src/assets/svgs/Langdingpage/Footer/fb.png'
import linkedin from '@src/assets/svgs/Langdingpage/Footer/in.png'
import ytb from '@src/assets/svgs/Langdingpage/Footer/ytb.png'
import { Link } from 'react-router-dom'
import { IconEmail, IconSend } from '@src/assets/svgs'
const cx = classNames.bind(styles)

function FooterLandingpage() {
  return (
    <div className={cx('home-wrapper')}>
      <div className={cx('colums')}>
        <div className={cx('title_11')}>Stay tuned!</div>
        <div className={cx('title_12')}>Sign up to receive updates from Investy</div>
        <div className={cx('boxinput')}>
          <div className={cx('email')}>
            <IconEmail />
          </div>
          <input placeholder='Your email'></input>
          <div className={cx('send')}>
            <IconSend />
          </div>
        </div>
      </div>
      <div className={cx('colums2')}>
        <div className={cx('title_21')}>Learn more</div>
        <Link className={cx('title_22')}>About us</Link>
        <Link className={cx('title_22')}>Company</Link>
        <Link className={cx('title_22')}>Online courses</Link>
        <Link className={cx('title_22')}>Bloghub</Link>
        <Link className={cx('title_22')}>Feedbacks</Link>
      </div>
      <div className={cx('colums2')}>
        <div className={cx('title_21')}>Our services</div>
        <Link to='/recruitment' className={cx('title_22')}>
          Recruiting
        </Link>
        <Link to='/freelance' className={cx('title_22')}>
          Freelancing
        </Link>
        <Link className={cx('title_22')}>CV Building</Link>
      </div>
      <div className={cx('colums2')}>
        <div className={cx('title_21')}>Contact us</div>
        <div className={cx('title_22')}>(+84) 333 991 505 (Ms Alicia Thu Trang)</div>
        <div className={cx('title_22')}>H304, Foreign Trade University</div>
        <div className={cx('title_22')}>support@investy.io.vn</div>
      </div>

      <div className={cx('colums2')}>
        <div className={cx('title_21')}>Social media</div>
        <div className={cx('link')}>
          <Link target='_blank' to='https://www.facebook.com/investy.platform'>
            <img src={fb} alt='logo' className={cx('icon')}></img>
          </Link>
          <Link
            target='_blank'
            to='https://www.youtube.com/@Investyplatform'
            style={{
              marginTop: '-6px'
            }}
          >
            <img src={linkedin} alt='logo' className={cx('icon')}></img>
          </Link>
          <Link
            target='_blank'
            to='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHMiejiZ7yFNgAAAY5Q1KFASu75h1zL7oVHYgERI1ASmAXffmVeeotaC1teOY0YbFrQloyU3lsOgvCGtRkYRTYHZgzg6YhDLtXvVr8KPhLD8Zvp4_qA6zZ7eXSamuuSiREZTkQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finvesty-platform%2F'
          >
            <img src={ytb} alt='logo' className={cx('icon')}></img>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterLandingpage

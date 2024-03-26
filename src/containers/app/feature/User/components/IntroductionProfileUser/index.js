/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './IntroductionProfileUser.module.sass'
import AppModal from '@src/components/AppModal'
import Introduction from '../Introduction/Introduction'
import { useRef } from 'react'
import Education from '../Introduction/Education'
import WorkingExperience from '../Introduction/WorkingExperience'
import Certificate from '../Introduction/Certificate'
import Skills from '../Introduction/Skills'
import ExtracurricularActivity from '../Introduction/ExtracurricularActivity'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function IntroductionProfileUser() {
  const onClose = () => {
    closeRef.current.click()
  }
  const closeRef = useRef()
  const userInfo = useSelector((state) => state.auth.user)

  return (
    <div className={cx('main')}>
      <div
        className={cx('box')}
        style={{
          marginTop: '10px'
        }}
      >
        <div className={cx('title')}>Introduction</div>
        <div className={cx('content')}>
          Please update your education here, so that your recruiters can understand about you!
        </div>
        <AppModal
          triggerBtn={<button>ADD MORE +</button>}
          contentStyle={{
            width: '60vw',
            backgroundColor: 'white',
            boxShadow: '4px 4px 10px 0px #00000040',
            borderRadius: '7px',
            padding: '20px'
          }}
          ref={closeRef}
        >
          <Introduction onClose={onClose} />
        </AppModal>
      </div>
      {userInfo?.role === 'APPLICANT' && (
        <div>
          <div className={cx('box')}>
            <div className={cx('title')}>Education</div>
            <div className={cx('content')}>
              Please update your education here, so that your recruiters can understand about you!
            </div>
            <AppModal
              triggerBtn={<button>ADD MORE +</button>}
              contentStyle={{
                width: '60vw',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040',
                borderRadius: '7px',
                padding: '20px'
              }}
              ref={closeRef}
            >
              <Education onClose={onClose} />
            </AppModal>
          </div>
          <div className={cx('box')}>
            <div className={cx('title')}>Working Experience</div>
            <div className={cx('content')}>
              Please update your education here, so that your recruiters can understand about you!
            </div>
            <AppModal
              triggerBtn={<button>ADD MORE +</button>}
              contentStyle={{
                width: '60vw',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040',
                borderRadius: '7px',
                padding: '20px'
              }}
              ref={closeRef}
            >
              <WorkingExperience onClose={onClose} />
            </AppModal>
          </div>
          <div className={cx('box')}>
            <div className={cx('title')}>Skills</div>
            <div className={cx('content')}>
              Please update your education here, so that your recruiters can understand about you!
            </div>
            <AppModal
              triggerBtn={<button>ADD MORE +</button>}
              contentStyle={{
                width: '60vw',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040',
                borderRadius: '7px',
                padding: '20px'
              }}
              ref={closeRef}
            >
              <Skills onClose={onClose} />
            </AppModal>
          </div>
          <div className={cx('box')}>
            <div className={cx('title')}>Certificate</div>
            <div className={cx('content')}>
              Please update your education here, so that your recruiters can understand about you!
            </div>
            <AppModal
              triggerBtn={<button>ADD MORE +</button>}
              contentStyle={{
                width: '60vw',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040',
                borderRadius: '7px',
                padding: '20px'
              }}
              ref={closeRef}
            >
              <Certificate onClose={onClose} />
            </AppModal>
          </div>
          <div className={cx('box')}>
            <div className={cx('title')}>Extracullar Activities</div>
            <div className={cx('content')}>
              Please update your education here, so that your recruiters can understand about you!
            </div>
            <AppModal
              triggerBtn={<button>ADD MORE +</button>}
              contentStyle={{
                width: '60vw',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040',
                borderRadius: '7px',
                padding: '20px'
              }}
              ref={closeRef}
            >
              <ExtracurricularActivity onClose={onClose} />
            </AppModal>
          </div>
        </div>
      )}
    </div>
  )
}

export default IntroductionProfileUser

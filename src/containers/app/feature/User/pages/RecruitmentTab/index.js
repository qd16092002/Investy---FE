/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './RecruitmentTab.module.sass'
import CompanyprofileUser from '../../components/CompanyprofileUser'

const cx = classNames.bind(styles)

function RecruitmentTab() {
  return (
    <div className={cx('form-wallpaper')}>
      <CompanyprofileUser />
    </div>
  )
}

export default RecruitmentTab

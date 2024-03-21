/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Recruitment.module.sass'
import Search_Recruitment from '../../components/Search/Search_Recruitment'
import Companyprofile from '../../components/Companyprofile'

const cx = classNames.bind(styles)

function Recruitment() {
  return (
    <div className={cx('form-wallpaper')}>
      <Search_Recruitment />
      <Companyprofile />
    </div>
  )
}

export default Recruitment

/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './FreeLancer.module.sass'
import Search_FreeLancer from '../../../components/Search/Search_FreeLancer'
import Design_Freelancer from '../../../components/System/Design_Freelancer'

const cx = classNames.bind(styles)

function FreeLancer() {
  return (
    <div className={cx('form-wallpaper')}>
      <Search_FreeLancer />
      <Design_Freelancer />
    </div>
  )
}

export default FreeLancer

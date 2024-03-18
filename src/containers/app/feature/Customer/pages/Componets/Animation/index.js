import classNames from 'classnames/bind'
import styles from './Animation.module.sass'
import RoiNam from '@src/assets/svgs/Langdingpage/Page3/RoiNam.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const cx = classNames.bind(styles)

function Animation() {
  return (
    <div className={cx('home-wrapper')}>
      <div className={cx('conveyor-belt-container')}>
        <div className={cx('conveyor-belt')}>
          <div className='item'>
            <img src={RoiNam} alt='Image1' />
          </div>
          <div className='item'>
            <img src={RoiNam} alt='Image2' />
          </div>
          <div className='item'>
            <img src={RoiNam} alt='Image3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Animation

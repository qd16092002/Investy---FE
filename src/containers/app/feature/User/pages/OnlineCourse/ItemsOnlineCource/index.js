/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ItemsOnlineCource.module.sass'
import { IconHeaderOnlineCource, IconHeaderOnlineCource_2, IconYosenUniversity } from '@src/assets/svgs'
import { Link } from 'react-router-dom'
import logo from '@src/assets/images/FirstStepKorea/logoYosen.png'
import avt from '@src/assets/images/FirstStepKorea/AvtEliot.png'
import lesson1 from '@src/assets/images/FirstStepKorea/lesson1.png'
import lesson2 from '@src/assets/images/FirstStepKorea/lesson2.png'
import lesson3 from '@src/assets/images/FirstStepKorea/lesson3.png'
import lesson4 from '@src/assets/images/FirstStepKorea/lesson4.png'
import lesson5 from '@src/assets/images/FirstStepKorea/lesson5.png'
import { Rate } from 'antd'

const cx = classNames.bind(styles)

function ItemsOnlineCource() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('content')}>
          <Link to='/online-cource'>
            <IconHeaderOnlineCource />
          </Link>
          <div className={cx('icon')}>
            <IconHeaderOnlineCource_2 />
          </div>
          <div className={cx('title')}>Korean</div>
        </div>
        <div className={cx('line')}></div>
      </div>
      <div className={cx('content_2')}>
        <div className={cx('header')}>
          <div className={cx('title')}>
            <img src={logo} alt='logouniver'></img>
            <div className={cx('bio')}>
              <div className={cx('name')}>Yonsei University</div>
              <div className={cx('rate')}>
                <Rate
                  allowHalf
                  defaultValue={5}
                  style={{
                    marginRight: '20px'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={cx('title')}
            style={{
              marginRight: '10%'
            }}
          >
            <img src={avt} alt='logouniver'></img>
            <div className={cx('bio')}>
              <div className={cx('name')}>Lecturer: Mr. Eliot Dongwon Shin </div>
              <div className={cx('name')}>Major: Korean Language</div>
            </div>
          </div>
        </div>
        <div className={cx('detail')}>
          <div className={cx('title')}>First Step Korea</div>
          <div className={cx('product')}>
            <div className={cx('items')}>
              <Link to='https://www.youtube.com/watch?v=spiU0J3Tusw' target='_blank'>
                <img src={lesson1} alt='lesson1'></img>
                <div className={cx('lesson_title')}>Lesson 1: Alphabet</div>
                <div className={cx('univer')}>
                  <IconYosenUniversity />
                  <div className={cx('nameuni')}>Yonsei University</div>
                </div>
              </Link>
            </div>
            <div className={cx('items')}>
              <Link to='/online-cource/firststepkorea'>
                <img src={lesson2} alt='lesson2'></img>
                <div className={cx('lesson_title')}>Lesson 2: Greetings</div>
                <div className={cx('univer')}>
                  <IconYosenUniversity />
                  <div className={cx('nameuni')}>Yonsei University</div>
                </div>
              </Link>
            </div>
            <div className={cx('items')}>
              <Link to='/online-cource/firststepkorea'>
                <img src={lesson3} alt='lesson3'></img>
                <div className={cx('lesson_title')}>Lesson 3: Nationality</div>
                <div className={cx('univer')}>
                  <IconYosenUniversity />
                  <div className={cx('nameuni')}>Yonsei University</div>
                </div>
              </Link>
            </div>
            <div className={cx('items')}>
              <Link to='/online-cource/firststepkorea'>
                <img src={lesson4} alt='lesson4'></img>
                <div className={cx('lesson_title')}>Lesson 4: Place</div>
                <div className={cx('univer')}>
                  <IconYosenUniversity />
                  <div className={cx('nameuni')}>Yonsei University</div>
                </div>
              </Link>
            </div>
            <div className={cx('items')}>
              <Link to='/online-cource/firststepkorea'>
                <img src={lesson5} alt='lesson5'></img>
                <div className={cx('lesson_title')}>Lesson 5: Subject</div>
                <div className={cx('univer')}>
                  <IconYosenUniversity />
                  <div className={cx('nameuni')}>Yonsei University</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsOnlineCource

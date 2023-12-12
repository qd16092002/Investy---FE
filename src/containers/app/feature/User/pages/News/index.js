/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './News.module.sass'
// import { HotNews } from '@src/assets/svgs'
import hotnews from '@src/assets/images/hotnews.png'
import mediumnews from '@src/assets/images/mediumnews.png'
import { MediumNews, SmallNews } from '@src/app-configs'

const cx = classNames.bind(styles)

function News() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>News</div>
      <div className={cx('content')}>
        <div className={cx('bignews')}>
          <div className={cx('hotnews')}>
            <img src={hotnews} alt='HotNews' width='830px' height='280px'></img>
          </div>
          <div className={cx('mediumnews')}>
            {MediumNews.map((medium, index) => (
              <div key={index} className={cx('medium')}>
                <img src={mediumnews} alt='Medium News'></img>
                <div className={cx('titleimg')}>{medium?.title}</div>
                <div className={cx('content-medium')}>{medium?.content}</div>
                <div className={cx('seemore')}>See more</div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx('smallnews')}>
          {SmallNews.map((small, index) => (
            <div key={index}>
              <div className={cx('small')}>
                <img src={mediumnews} alt='Small News' width='100px' height='100px'></img>
                <div className={cx('contentnews')}>
                  <div className={cx('titleimg')}>{small?.title}</div>
                  <div className={cx('contentimg')}>{small?.content}</div>
                </div>
              </div>
              <div className={cx('underline')}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News

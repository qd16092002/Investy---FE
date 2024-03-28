/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Blog.module.sass'
import { IconBoxSearch } from '@src/assets/svgs'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { useLazyGetAllBlogQuery } from '../../../userService'
import { useEffect, useState } from 'react'
import blog1 from '@src/assets/images/User/Blog/blog1.png'
import big from '@src/assets/images/User/Blog/bestresult.png'
import small1 from '@src/assets/images/User/Blog/corevalue.png'
import small2 from '@src/assets/images/User/Blog/investing.png'
import small3 from '@src/assets/images/User/Blog/hr.png'
import small4 from '@src/assets/images/User/Blog/recrui.png'
const cx = classNames.bind(styles)

function Blog() {
  const [getBlog, { data: datablogid }] = useLazyGetAllBlogQuery()
  useEffect(() => {
    getBlog({}, false)
  }, [getBlog])
  const [blogid, setblogid] = useState()
  console.log('abc:  ', blogid)

  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('page1')}>
        <div className={cx('categories')}>
          <div className={cx('title')}>CATEGORIES:</div>
          <div className={cx('detail')}>Startups</div>
          <div className={cx('detail')}>Human resources</div>
          <div className={cx('detail')}>Insight</div>
          <div className={cx('detail')}>Knowledge</div>
          <div className={cx('detail')}>Inspiration</div>
        </div>
        <div className={cx('content')}>
          <div className={cx('boxsearch')}>
            <input className={cx('input_search')} placeholder='Search'></input>
            <label htmlFor='search' className={cx('icon')}>
              <IconBoxSearch />
            </label>
          </div>
          <div className={cx('papper')}>
            {datablogid?.map((index) => {
              return (
                <Link
                  onClick={() => setblogid(index._id)}
                  to={`/blog/${index._id}`}
                  key={uuidv4(index)}
                  className={cx('items')}
                >
                  <img className={cx('image')} src={blog1} alt='Blog1'></img>
                  <div className={cx('title_image')}>{index.title}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className={cx('page2')}>
        <div className={cx('title')}>Investy - Invest in your future</div>
        <div className={cx('ytb')}>
          <Link className={cx('big')} to='https://www.youtube.com/watch?v=dj4kjsKGVCM' target='_blank'>
            <img className={cx('itemsbig')} src={big} alt='Best Results'></img>
          </Link>
          <div className={cx('small')}>
            <Link className={cx('big')} to='https://www.youtube.com/watch?v=RLizduKDq78' target='_blank'>
              <img className={cx('items')} src={small1} alt='Core Value'></img>
            </Link>
            <Link className={cx('big')} to='https://www.youtube.com/watch?v=l6ddZK4AWrs&t=231s' target='_blank'>
              <img className={cx('items')} src={small2} alt='Core Value'></img>
            </Link>
            <Link className={cx('big')} to='https://www.youtube.com/watch?v=l3A9WiwncO4' target='_blank'>
              <img className={cx('items')} src={small3} alt='Core Value'></img>
            </Link>
            <Link className={cx('big')} to='https://www.youtube.com/watch?v=bDwIrjrR8g4' target='_blank'>
              <img className={cx('items')} src={small4} alt='Core Value'></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

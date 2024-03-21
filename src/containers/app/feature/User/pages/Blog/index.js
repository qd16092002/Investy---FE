/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Blog.module.sass'
import { IconBoxSearch } from '@src/assets/svgs'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { useLazyGetAllBlogQuery } from '../../userService'
import { useEffect, useState } from 'react'

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
                  <div className={cx('image')}></div>
                  <div className={cx('title_image')}>{index.title}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

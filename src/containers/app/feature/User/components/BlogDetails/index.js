/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './BlogDetails.module.sass'
import eliot from '@src/assets/images/User/Blog/Eliot.png'
import investy from '@src/assets/images/User/Blog/investy.png'
import { useLocation } from 'react-router'
import { useGetBlogbyIdMutation } from '../../userService'
import { useEffect } from 'react'
const cx = classNames.bind(styles)

const getBlogId = (path) => {
  // Split the path and get the last part
  const pathParts = path.split('/')
  const recruitId = pathParts[pathParts.length - 1]
  return recruitId
}
function BlogDetails() {
  const { pathname } = useLocation()
  const blogId = getBlogId(pathname)
  const [getblogbyid, { data: datablogid }] = useGetBlogbyIdMutation({ blogId })
  console.log(datablogid)
  useEffect(() => {
    getblogbyid(blogId)
  }, [getblogbyid, blogId])
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
          <div className={cx('header')}>{datablogid?.title}</div>
          <div className={cx('written')}>Written by: {datablogid?.author}</div>
          <img src={eliot} alt='papper'></img>
          <div className={cx('detail')}>{datablogid?.content}</div>

          <img src={investy} alt='Investy'></img>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails

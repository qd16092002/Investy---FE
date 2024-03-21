/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './OnlineCourse.module.sass'
import Search_OnlineCourse from '../../components/Search/Search_OnlineCourse'
import { Checkbox, Radio } from 'antd'
import { filter_level, filter_skill, filter_subject } from '@src/app-configs'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { IconYosenUniversity, StartRate } from '@src/assets/svgs'
import { Link } from 'react-router-dom'
import lesson1 from '@src/assets/images/FirstStepKorea/lesson1.png'
import lesson2 from '@src/assets/images/FirstStepKorea/lesson2.png'
import lesson3 from '@src/assets/images/FirstStepKorea/lesson3.png'
import lesson4 from '@src/assets/images/FirstStepKorea/lesson4.png'
import lesson5 from '@src/assets/images/FirstStepKorea/lesson5.png'
import lesson6 from '@src/assets/images/FirstStepKorea/lesson6.png'
import lesson7 from '@src/assets/images/FirstStepKorea/lesson7.png'
import lesson8 from '@src/assets/images/FirstStepKorea/lesson8.png'
const cx = classNames.bind(styles)

function OnlineCourse() {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className={cx('form-wallpaper')}>
      <Search_OnlineCourse />
      <div className={cx('content')}>
        <div className={cx('product')}>
          <div className={cx('filter')}>
            <div className={cx('title')}>Filter by:</div>
            <div className={cx('category')}>
              <div className={cx('title')}>Subject:</div>
              <div className={cx('content_2')}>
                {filter_subject.map((item) => {
                  return (
                    <Checkbox className={cx('items')} key={uuidv4(item)}>
                      {item.label}
                    </Checkbox>
                  )
                })}
              </div>
            </div>
            <div className={cx('category')}>
              <div className={cx('title')}>Skills:</div>
              <div className={cx('content_2')}>
                {filter_skill.map((item) => {
                  return (
                    <Checkbox className={cx('items')} key={uuidv4(item)}>
                      {item.label}
                    </Checkbox>
                  )
                })}
              </div>
            </div>
            <div className={cx('category')}>
              <div className={cx('title')}>Level:</div>
              <div className={cx('content_2')}>
                {filter_level.map((item) => {
                  return (
                    <Checkbox className={cx('items')} key={uuidv4(item)}>
                      {item.label}
                    </Checkbox>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={cx('items')}>
            <div className={cx('title')}>
              <Radio.Group
                style={{
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'space-between'
                }}
                onChange={onChange}
                value={value}
              >
                <div className={cx('sort')}>Sort by</div>
                <Radio className={cx('sort')} value={1}>
                  <div className={cx('sort')}>Relevant</div>
                </Radio>
                <Radio className={cx('sort')} value={2}>
                  <div className={cx('sort')}>Date</div>
                </Radio>
              </Radio.Group>
            </div>
            <div className={cx('product')}>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to='/online-cource/firststepkorea'>
                    <img src={lesson1} alt='lesson1'></img>
                    <div className={cx('title')}>First Step Korean</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson2} alt='lesson2'></img>
                    <div className={cx('title')}>Learn to speak Korean 1</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson3} alt='lesson3'></img>
                    <div className={cx('title')}>A Bridge to the World: Language for Beginners</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson4} alt='lesson4'></img>
                    <div className={cx('title')}>The Korean Economics Development</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson5} alt='lesson5'></img>
                    <div className={cx('title')}>Understanding Korean Politics</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson6} alt='lesson6'></img>
                    <div className={cx('title')}>The Korean alphabet: An Introduction to Hangeul</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson7} alt='lesson7'></img>
                    <div className={cx('title')}>Re-imaged God in Korean culture</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              <div className={cx('boxmember')}>
                <div className={cx('member')}>
                  <Link to=''>
                    <img src={lesson8} alt='lesson8'></img>
                    <div className={cx('title')}>Social contexts in Korea</div>
                    <div className={cx('univer')}>
                      <IconYosenUniversity />
                      <div>Yonsei University</div>
                    </div>
                    <div className={cx('rate')}>
                      <div
                        style={{
                          marginRight: '5px'
                        }}
                      >
                        <StartRate />
                      </div>
                      4,9 (3,460)
                    </div>
                  </Link>
                </div>
              </div>
              {/* <div className={cx('pagination')}>
                <Pagination defaultCurrent={1} total={50} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineCourse

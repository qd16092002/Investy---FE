/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Design_Freelancer.module.sass'
import { MemberMentor } from '@src/app-configs'
import { StartRate } from '@src/assets/svgs'
import { Pagination } from 'antd'
import TopServicesMarket from '../TopServicesMarket'
import image1 from '@src/assets/images/User/Freelance/1.png'
import image2 from '@src/assets/images/User/Freelance/2.png'
import image3 from '@src/assets/images/User/Freelance/3.png'
const cx = classNames.bind(styles)

function Design_Freelancer() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>DESIGN</div>
      <div className={cx('content')}>
        <div className={cx('box_1')}>
          <div className={cx('image')}></div>
          <div>Logo Design</div>
          <div>Image editing</div>
          <div>Video editing</div>
        </div>
        <div className={cx('box_2')}>
          <div className={cx('input_search')}>
            <select>
              <option value='' disabled selected hidden>
                Select category
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <select>
              <option value='' disabled selected hidden>
                Service options
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <select>
              <option value='' disabled selected hidden>
                Budget
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <select>
              <option value='' disabled selected hidden>
                Delivery time
              </option>
              <option value='Idea'>Idea</option>
              <option value='Early Growth'>Early Growth</option>
              <option value='Growth'>Growth</option>
            </select>
            <input placeholder='Tax invoice'></input>
            <input placeholder='MASTER expert'></input>
            <input placeholder='Portfolio'></input>
            <input placeholder='Prime'></input>
            <input placeholder='Quick response'></input>
          </div>
          <div className={cx('button_click')}>
            <div className={cx('button_1')}>Sort by</div>
            <div className={cx('button_checkbox')}>Relevant</div>
            <div className={cx('button_checkbox')}>Date</div>
            <div className={cx('button_checkbox')}>Emergency</div>
          </div>
          <div className={cx('product')}>
            <div className={cx('boxmember')}>
              {MemberMentor.map((member, index) => (
                <div key={index} className={cx('member')}>
                  <div className={cx('image')}></div>
                  <div className={cx('title')}> Golden Prize of “Investy Awards 2023” </div>
                  <div className={cx('price')}> 500,000 VND~</div>
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
                </div>
              ))}
            </div>
            <div className={cx('pagination')}>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('advertisement')}>
        <div className={cx('contents')}>
          <img src={image1} alt='image1' className={cx('items')}></img>
          <img src={image2} alt='image1' className={cx('items')}></img>
          <img src={image3} alt='image1' className={cx('items')}></img>
        </div>
        <div className={cx('pagination')}>
          <Pagination defaultCurrent={3} total={30} />
        </div>
      </div>
      <div className={cx('business')}>There are more than 700 categories in Investy.</div>
      <div className={cx('box_business')}>
        <div className={cx('title')}>Business</div>
        <div className={cx('button_business')}>
          <div className={cx('items')}>Accounting/ Bookkeeping</div>
          <div className={cx('items')}>Tax Consulting</div>
          <div className={cx('items')}>Legal Document/ Contract</div>
          <div className={cx('items')}>Legal Consulting</div>
          <div className={cx('items')}>Start-up business coaching</div>
          <div className={cx('items')}>Market Research</div>
        </div>
      </div>
      <div className={cx('wh')}>
        <div className={cx('work')}>
          <div className={cx('title')}>Work / Job</div>
          <div className={cx('button_business')}>
            <div className={cx('items')}>Design</div>
            <div className={cx('items')}>IT</div>
            <div className={cx('items')}>Videos, Photos, Sound</div>
          </div>
        </div>
        <div className={cx('job')}>
          <div className={cx('title')}>Hobby</div>
          <div className={cx('button_business')}>
            <div className={cx('items')}>Tarot</div>
            <div className={cx('items')}>Psychological consulting</div>
            <div className={cx('items')}>Learning class</div>
            <div className={cx('items')}>Living services</div>
          </div>
        </div>
      </div>
      <TopServicesMarket />
      <div className={cx('experts')}>
        <div className={cx('content')}>
          <div className={cx('title_1')}> All of the experts I need!</div>
          <div className={cx('title_2')}> Meet more than 60,000 experts in all fields!</div>
        </div>
        <div className={cx('image')}></div>
      </div>
      <div className={cx('advantage')}>
        <div className={cx('items')}>
          <div className={cx('title')}>
            <div className={cx('name')}>Swift chat</div>
            <div className={cx('number')}>01</div>
          </div>
          <div className={cx('content')}>You can quickly chat and discuss with expert through Investy online chat</div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>
            <div className={cx('name')}>Investy - Safe payment</div>
            <div className={cx('number')}>02</div>
          </div>
          <div className={cx('content')}>We protect your precious money safely with an escrow payment system.</div>
        </div>
        <div className={cx('items')}>
          <div className={cx('title')}>
            <div className={cx('name')}>Positive results</div>
            <div className={cx('number')}>03</div>
          </div>
          <div className={cx('content')}>Average satisfaction level 0% Almost all members are satisfied.</div>
        </div>
      </div>
      <div className={cx('review')}>
        <div className={cx('title_1')}>Feedbacks & Reviews from Investy users!</div>
        <div className={cx('title_2')}>Average satisfaction level 0% Almost all members are satisfied.</div>
        <div className={cx('content')}>
          <div className={cx('box')}>
            <div className={cx('image')}></div>
            <div className={cx('user')}>
              <div className={cx('name')}>Alica</div>
              <div className={cx('line')}>|</div>
              <div className={cx('role')}>Startup</div>
            </div>
          </div>
          <div className={cx('box')}>
            <div className={cx('image')}></div>
            <div className={cx('user')}>
              <div className={cx('name')}>Alica</div>
              <div className={cx('line')}>|</div>
              <div className={cx('role')}>Startup</div>
            </div>
          </div>
          <div className={cx('box')}>
            <div className={cx('image')}></div>
            <div className={cx('user')}>
              <div className={cx('name')}>Alica</div>
              <div className={cx('line')}>|</div>
              <div className={cx('role')}>Startup</div>
            </div>
          </div>
        </div>
        <div className={cx('title_3')}>More than 60,000 customers have been satisfied with our services!</div>
      </div>
      <div className={cx('use')}>
        <div className={cx('title_1')}>Investy, how to use in a right way?</div>
        <div className={cx('title_2')}>Listen to stories that changed lives thanks to real-life Investy people.</div>
        <div className={cx('content')}>
          <div className={cx('box')}>
            <div className={cx('image')}></div>
            <div className={cx('user')}>N-job is no longer a choice, it’s a necessity</div>
          </div>
          <div className={cx('box')}>
            <div className={cx('image')}></div>
            <div className={cx('user')}>My life changed 180 degrees with Investy</div>
          </div>
          <div className={cx('box')}>
            <div className={cx('image')}></div>
            <div className={cx('user')}>My life changed 180 degrees with Investy</div>
          </div>
        </div>
        <div className={cx('seemore')}>
          <button>SEE MORE</button>
        </div>
      </div>
      <div className={cx('ranking')}>
        <div className={cx('title_1')}>Investy Expert Ranking</div>
        <div className={cx('title_2')}>He is a popular expert who sold the most in the top category.</div>
        <div className={cx('boxcontent')}>
          <div className={cx('content')}>
            <div className={cx('box')}>
              <div
                className={cx('title')}
                style={{
                  paddingTop: '30px'
                }}
              >
                Logo Design
              </div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
            </div>
            <div className={cx('box')}>
              <div className={cx('title')}>Products/ Promotion photos</div>
              <div className={cx('price')}>
                {' '}
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
            </div>
            <div className={cx('box')}>
              <div
                className={cx('title')}
                style={{
                  paddingTop: '30px'
                }}
              >
                Homepage
              </div>
              <div className={cx('price')}>
                {' '}
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
            </div>
          </div>
          <div className={cx('content_2')}>
            <div className={cx('box')}>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
            </div>
            <div className={cx('box')}>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
            </div>
            <div className={cx('box')}>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('price')}>
                <div className={cx('value')}>
                  <div className={cx('company_price')}>1,359,243,120 VND</div>
                  <div className={cx('company_name')}>Investy Company</div>
                </div>
                <div className={cx('avt')}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('ranking')}></div>
    </div>
  )
}

export default Design_Freelancer

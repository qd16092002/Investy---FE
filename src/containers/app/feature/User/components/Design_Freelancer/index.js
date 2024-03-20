/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Design_Freelancer.module.sass'
import { StartRate } from '@src/assets/svgs'
import { Pagination } from 'antd'
import TopServicesMarket from '../TopServicesMarket'
import image1 from '@src/assets/images/User/Freelance/1.png'
import image2 from '@src/assets/images/User/Freelance/2.png'
import image3 from '@src/assets/images/User/Freelance/3.png'
import avt from '@src/assets/images/User/Freelance/Items/1.png'
import AppModal from '@src/components/AppModal'
import { useEffect, useRef, useState } from 'react'
import ItemServices from '../ModalServices/ItemServices'
import { useLazyGetAllServicesQuery } from '../../userService'
import acc from '@src/assets/images/User/Freelance/Business/acc.png'
import consu from '@src/assets/images/User/Freelance/Business/consu.png'
import design from '@src/assets/images/User/Freelance/Business/design.png'
import elastric from '@src/assets/images/User/Freelance/Business/elastric.png'
import house from '@src/assets/images/User/Freelance/Business/house.png'
import it from '@src/assets/images/User/Freelance/Business/it.png'
import legal from '@src/assets/images/User/Freelance/Business/legal.png'
import market from '@src/assets/images/User/Freelance/Business/market.png'
import plumb from '@src/assets/images/User/Freelance/Business/plumb.png'
import repair from '@src/assets/images/User/Freelance/Business/repair.png'
import startup from '@src/assets/images/User/Freelance/Business/startup.png'
import tax from '@src/assets/images/User/Freelance/Business/tax.png'
import video from '@src/assets/images/User/Freelance/Business/video.png'
import meetmore from '@src/assets/images/User/Freelance/meetmore.png'
import app from '@src/assets/images/User/Freelance/Education/app.png'
import care from '@src/assets/images/User/Freelance/Education/care.png'
import game from '@src/assets/images/User/Freelance/Education/game.png'
import influencer from '@src/assets/images/User/Freelance/Education/influencer.png'
import mail from '@src/assets/images/User/Freelance/Education/mail.png'
import marketresearch from '@src/assets/images/User/Freelance/Education/market.png'
import content from '@src/assets/images/User/Freelance/Education/marketing.png'
import review from '@src/assets/images/User/Freelance/Education/review.png'
import sns from '@src/assets/images/User/Freelance/Education/sns.png'
import web from '@src/assets/images/User/Freelance/Education/web.png'

import { Education } from '@src/app-configs/Freelancer'
import { v4 as uuidv4 } from 'uuid'

const cx = classNames.bind(styles)

function Design_Freelancer() {
  const onClose = () => {
    closeRef.current.click()
  }
  const closeRef = useRef()
  const [getServices, { data: servicesif }] = useLazyGetAllServicesQuery()

  useEffect(() => {
    getServices({}, false)
  }, [getServices])
  const [servicesid, setservicesId] = useState()

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
              {servicesif?.map((index) => (
                <AppModal
                  key={index}
                  triggerBtn={
                    <div key={index} className={cx('member')} onClick={() => setservicesId(index._id)}>
                      <img src={avt} alt='items' className={cx('image')}></img>
                      <div className={cx('title')}>{index?.title}</div>
                      <div className={cx('price')}>
                        {' '}
                        {index?.standard?.[0]?.VAT1}
                        {'VND~'}
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
                    </div>
                  }
                  contentStyle={{
                    width: '90vw',
                    height: '90vh',
                    backgroundColor: 'white',
                    boxShadow: '4px 4px 10px 0px #00000040',
                    borderRadius: '7px',
                    padding: '20px',
                    overflowY: 'scroll'
                  }}
                  ref={closeRef}
                >
                  <ItemServices onClose={onClose} id={servicesid} />
                </AppModal>
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
      </div>
      <div className={cx('business')}>There are more than 700 categories in Investy.</div>
      <div className={cx('box_business')}>
        <div className={cx('title')}>Business</div>
        <div className={cx('button_business2')}>
          <div className={cx('items2')}>
            <img src={acc} alt='businessimage'></img>
            <div>Accounting/ Bookkeeping</div>
          </div>
          <div className={cx('items2')}>
            <img src={tax} alt='businessimage'></img>
            <div>Tax Consulting</div>
          </div>
          <div className={cx('items2')}>
            <img src={legal} alt='businessimage'></img>
            <div>Legal Document/ Contract</div>
          </div>
          <div className={cx('items2')}>
            <img src={consu} alt='businessimage'></img>
            <div>Legal Consulting</div>
          </div>
          <div className={cx('items2')}>
            <img src={startup} alt='businessimage'></img>
            <div>Start-up business coaching</div>
          </div>
          <div className={cx('items2')}>
            <img src={market} alt='businessimage'></img>
            <div>Market Research</div>
          </div>
        </div>
      </div>
      <div className={cx('wh')}>
        <div className={cx('work')}>
          <div className={cx('title')}>Work / Job</div>
          <div className={cx('button_business')}>
            <div className={cx('items')}>
              <img src={design} alt='businessimage'></img>
              <div>Design</div>
            </div>
            <div className={cx('items')}>
              <img src={it} alt='businessimage'></img>
              <div>IT</div>
            </div>
            <div className={cx('items')}>
              <img src={video} alt='businessimage'></img>
              <div>Videos, Photos, Sound</div>
            </div>
          </div>
        </div>
        <div className={cx('job')}>
          <div className={cx('title')}>Life services</div>
          <div className={cx('button_business')}>
            <div className={cx('items')}>
              <img src={repair} alt='businessimage'></img>
              <div>Household repair</div>
            </div>
            <div className={cx('items')}>
              <img src={house} alt='businessimage'></img>
              <div>House moving</div>
            </div>
            <div className={cx('items')}>
              <img src={elastric} alt='businessimage'></img>
              <div>Electronics repair</div>
            </div>
            <div className={cx('items')}>
              <img src={plumb} alt='businessimage'></img>
              <div>Plumber repair</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('box_business')}>
        <div className={cx('title')}>Education</div>
        <div className={cx('button_business2')}>
          {Education?.map((index) => {
            return (
              <div key={uuidv4(index)} className={cx('items2')}>
                <img src={index.image} alt='businessimage'></img>
                <div>{index.title}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={cx('box_business')}>
        <div className={cx('title')}>Marketing</div>
        <div className={cx('button_business2')}>
          <div className={cx('items2')}>
            <img src={care} alt='businessimage'></img>
            <div>Customer care</div>
          </div>
          <div className={cx('items2')}>
            <img src={content} alt='businessimage'></img>
            <div>Content marketing</div>
          </div>
          <div className={cx('items2')}>
            <img src={sns} alt='businessimage'></img>
            <div>SNS Marketing</div>
          </div>
          <div className={cx('items2')}>
            <img src={review} alt='businessimage'></img>
            <div>Review marketing</div>
          </div>
          <div className={cx('items2')}>
            <img src={influencer} alt='businessimage'></img>
            <div>Influencer marketing</div>
          </div>
          <div className={cx('items2')}>
            <img src={marketresearch} alt='businessimage'></img>
            <div>Market Research</div>
          </div>
        </div>
      </div>
      <div className={cx('wh')}>
        <div className={cx('work')}>
          <div className={cx('title')}>E-commerce</div>
          <div className={cx('button_business')}>
            <div className={cx('items')}>
              <img src={design} alt='businessimage'></img>
              <div>Online store management</div>
            </div>
            <div className={cx('items')}>
              <img src={it} alt='businessimage'></img>
              <div>Product research</div>
            </div>
            <div className={cx('items')}>
              <img src={video} alt='businessimage'></img>
              <div>Product Upload</div>
            </div>
          </div>
        </div>
        <div className={cx('job')}>
          <div className={cx('title')}>Development</div>
          <div className={cx('button_business')}>
            <div className={cx('items')}>
              <img src={web} alt='businessimage'></img>
              <div>Web development</div>
            </div>
            <div className={cx('items')}>
              <img src={app} alt='businessimage'></img>
              <div>App development</div>
            </div>
            <div className={cx('items')}>
              <img src={game} alt='businessimage'></img>
              <div>Game development</div>
            </div>
            <div className={cx('items')}>
              <img src={mail} alt='businessimage'></img>
              <div>Domain/ Email providing</div>
            </div>
          </div>
        </div>
      </div>
      <TopServicesMarket />
      <div className={cx('experts')}>
        <div className={cx('content')}>
          <div className={cx('title_1')}> All of the experts I need!</div>
          <div className={cx('title_2')}> Meet more than 60,000 experts in all fields!</div>
        </div>
        <img className={cx('image')} src={meetmore} alt='imagefields'></img>
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
    </div>
  )
}

export default Design_Freelancer

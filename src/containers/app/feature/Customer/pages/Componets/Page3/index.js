import classNames from 'classnames/bind'
import styles from './Page3.module.sass'
import { Langdingpage3 } from '@src/app-configs'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import hr from '@src/assets/svgs/Langdingpage/Page3/HR.png'
import network from '@src/assets/svgs/Langdingpage/Page3/network.png'
import formi from '@src/assets/svgs/Langdingpage/Page3/Formi.png'
import Recrui from '@src/assets/svgs/Langdingpage/Page3/Recrui.png'
import Eliot from '@src/assets/svgs/Langdingpage/Page3/Eliot.png'
import RoiNam from '@src/assets/svgs/Langdingpage/Page3/RoiNam.png'
import fb from '@src/assets/svgs/Langdingpage/Page3/fb.png'
import youtube from '@src/assets/svgs/Langdingpage/Page3/youtube.png'
import linkedin from '@src/assets/svgs/Langdingpage/Page3/linkedin.png'
import { LeftButton, RightButton } from '@src/assets/svgs/Langdingpage/Page3'
import { useState } from 'react'
import FooterLandingpage from '../FooterLandingpage'
// import Animation from '../Animation'
const cx = classNames.bind(styles)

function Page3() {
  const [active1, setactive1] = useState(true)
  const [active2, setactive2] = useState(true)
  return (
    <div className={cx('home-wrapper')}>
      <div className={cx('page3')}>
        <div className={cx('title_page3_1')}>
          <div className={cx('title_page3_line')}></div>
          <div className={cx('title_page3_text')}>RECRUITMENT & FREELANCING COMPANY</div>
        </div>
        <div className={cx('boxcontent1')}>
          <div className={cx('left')}>
            <div className={cx('title_page3_2')}>WHERE “GLOBAL TALENTS” MEET OPPORTUNITIES</div>
            <div className={cx('title_page3_3')}>
              We&apos;re revolutionizing the way you connect with businesses and secure your future.
            </div>
            <div className={cx('title_page3_4')}>Tired of the traditional job hunt?</div>
          </div>
          <div className={cx('right')}>
            {Langdingpage3.map((index) => {
              return (
                <div key={uuidv4} className={cx('box')}>
                  <div className={cx('abc')}>
                    <div className={cx('circle')}>
                      <img
                        style={{
                          marginTop: '25px',
                          marginLeft: '21px',
                          height: '100px'
                        }}
                        src={index.image}
                        alt='logo1'
                      ></img>
                    </div>
                    <div className={cx('title')}>{index.title}</div>
                  </div>
                  <div className={cx('content')}>{index.content}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={cx('line')}></div>
        <div
          style={{
            marginTop: '40px'
          }}
          className={cx('boxcontent2')}
        >
          <div className={cx('left')}>
            <div className={cx('title_page3_2')}>WHAT OUR COMPANY PROVIDES</div>
            <div className={cx('title_page3_3')}>
              With a vision to becoming a Global Leading HR Providing Firm, we embark on a mission to provide HR tech
              solution for global entrepreneurs and startups.
            </div>
          </div>
          <div className={cx('right')}>
            <div className={cx('contentline')}>
              <div className={cx('text')}>
                <h1>Connecting Recruiters and Applicants</h1>
                <h2>
                  Our platform empowers individuals to showcase their abilities and career aspirations, while offering
                  businesses efficient access to a diverse pool of top-tier talent.
                </h2>
                <Link to='/recruitment'>
                  <div className={cx('find')}> Find out more {'>'}</div>
                </Link>
              </div>
              <img
                style={{
                  marginLeft: '50px'
                }}
                src={hr}
                alt='hr'
              ></img>
            </div>
            <div className={cx('contentline')}>
              <img
                style={{
                  height: '200px'
                }}
                src={network}
                alt='network'
              ></img>
              <div
                style={{
                  marginLeft: '90px'
                }}
                className={cx('text')}
              >
                <h1>Connecting Services Providers and Companies</h1>
                <h2>
                  We connect companies with a network of qualified service providers, eliminating the hassle of
                  searching and vetting individual contractors.
                </h2>
                <Link to='/freelance'>
                  <div className={cx('find')}> Find out more {'>'}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('line')}></div>
        <div
          style={{
            marginTop: '40px'
          }}
          className={cx('boxcontent2')}
        >
          <div className={cx('left')}>
            <div className={cx('title_page3_2')}>OUR BLOGHUB</div>
            <div className={cx('title_page3_3')}>
              This blog hub is your source for expert insights and practical advice on navigating the dynamic world of
              recruitment and freelancing. We cater to both businesses seeking top-tier talent and skilled individuals
              aiming to thrive in the freelance landscape.
            </div>
            <div className={cx('footer')}>
              <button onClick={() => setactive1(!active1)} className={cx('rlbutton')}>
                <LeftButton />
              </button>
              <button
                onClick={() => setactive1(!active1)}
                style={{
                  marginLeft: '60px'
                }}
                className={cx('rlbutton')}
              >
                <RightButton />
              </button>
            </div>
          </div>
          <div
            className={cx('right')}
            style={{
              marginTop: '40px'
            }}
          >
            {active1 ? (
              <div className={cx('content_image')}>
                <img src={Recrui} alt='formi'></img>
                <Link
                  target='_blank'
                  to='https://traqq.com/blog/recruitment-trends-in-2023-that-a-freelancer-must-know/'
                  className={cx('linkto')}
                >
                  Recruitment Trends in 2024 [That a Freelancer Must Know]
                </Link>
                <div className={cx('bio')}>
                  The ‘workplace’ is no longer what it was five years ago. Technology and innovation inspired by
                  challenges like the coronavirus pandemic have opened up new opportunities and choices for employees in
                  how they want to work.{' '}
                </div>
              </div>
            ) : (
              <div className={cx('content_image')}>
                <img src={formi} alt='formi'></img>
                <Link
                  target='_blank'
                  to='https://www.talentnet.vn/featured-insights/workforce-planning/formidable-rise-freelancers-labor-market'
                  className={cx('linkto')}
                >
                  The Formidable Rise Of Freelancers In The Labor Market{' '}
                </Link>
                <div className={cx('bio')}>
                  Freelancers are getting more professional than ever and take on many important business tasks.
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={cx('line')}></div>
        <div
          style={{
            marginTop: '40px'
          }}
          className={cx('boxcontent2')}
        >
          <div
            className={cx('left')}
            style={{
              width: '70%'
            }}
          >
            <div className={cx('title_page3_2')}>WHAT OUR CUSTOMERS SAY ABOUT US</div>
            <div className={cx('title_page3_3')}>
              We collaborate and provide outstanding international startups such as Airbridge (valued $10M), Colorlover
              Lab ($2M), Byaht. Here are the feedbacks from our customers up until now.
            </div>
            <div className={cx('footer')}>
              <button onClick={() => setactive2(!active2)} className={cx('rlbutton')}>
                <LeftButton />
              </button>
              <button
                onClick={() => setactive2(!active2)}
                style={{
                  marginLeft: '60px'
                }}
                className={cx('rlbutton')}
              >
                <RightButton />
              </button>
            </div>
          </div>
          <div
            className={cx('right')}
            style={{
              marginTop: '20px'
            }}
          >
            {active2 ? (
              <div
                className={cx('content_image')}
                style={{
                  marginLeft: 'calc( 34% - 191px )'
                }}
              >
                <img src={Eliot} alt='Eliot'></img>
                <div className={cx('title_content_image')}>Eliot Dongwon Shin</div>
                <div
                  className={cx('title_content_image')}
                  style={{
                    marginTop: '3px'
                  }}
                >
                  CEO
                </div>
                <div
                  style={{
                    marginTop: '3px'
                  }}
                  className={cx('title_content_image')}
                >
                  Impact Pathway
                </div>
                <div className={cx('bio')}>
                  Outsourcing recruitment has led to a faster hiring process, allowing us to focus on core business.
                  We&apos;ve also gained access to a wider range of qualified candidates. While initial communication
                  and aligning expectations took some time, the agency&apos;s expertise has been valuable.
                </div>
              </div>
            ) : (
              <div
                className={cx('content_image')}
                style={{
                  marginLeft: 'calc( 34% - 191px )'
                }}
              >
                <img src={RoiNam} alt='RoiNam'></img>
                <div className={cx('title_content_image')}>Roi Nam</div>
                <div
                  className={cx('title_content_image')}
                  style={{
                    marginTop: '3px'
                  }}
                >
                  CEO
                </div>
                <div
                  style={{
                    marginTop: '3px'
                  }}
                  className={cx('title_content_image')}
                >
                  AB180
                </div>
                <div className={cx('bio')}>
                  Since outsourcing recruitment, we&apos;ve seen a clear benefit in efficiency. Filling positions takes
                  noticeably less time, freeing up internal resources. The agency&apos;s network has exposed us to a
                  broader and more diverse talent pool.{' '}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            marginTop: '40px'
          }}
          className={cx('line')}
        ></div>
        <div
          style={{
            marginTop: '40px'
          }}
          className={cx('boxcontent2')}
        >
          <div
            className={cx('left')}
            style={{
              width: '70%'
            }}
          >
            <div className={cx('title_page3_2')}>RECRUIT OR FREELANCE?</div>
            <div className={cx('title_page3_3')}>Contact us!</div>
            <div className={cx('contact')}>
              <Link target='_blank' to='https://www.facebook.com/investy.platform' className={cx('icon')}>
                <img
                  style={{
                    height: '80px'
                  }}
                  src={fb}
                  alt='logo'
                ></img>
                <div className={cx('facebook')}>Facebook</div>
              </Link>
              <Link target='_blank' to='https://www.youtube.com/@Investyplatform' className={cx('icon')}>
                <img
                  style={{
                    height: '60px',
                    marginTop: '10px',
                    marginBottom: '10px'
                  }}
                  src={youtube}
                  alt='logo'
                ></img>
                <div className={cx('facebook')}>Investy</div>
              </Link>
              <Link
                target='_blank'
                to='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHMiejiZ7yFNgAAAY5Q1KFASu75h1zL7oVHYgERI1ASmAXffmVeeotaC1teOY0YbFrQloyU3lsOgvCGtRkYRTYHZgzg6YhDLtXvVr8KPhLD8Zvp4_qA6zZ7eXSamuuSiREZTkQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finvesty-platform%2F'
                className={cx('icon')}
              >
                <img
                  style={{
                    height: '70px',
                    marginTop: '6px',
                    marginBottom: '4px'
                  }}
                  src={linkedin}
                  alt='logo'
                ></img>
                <div className={cx('facebook')}>Investy</div>
              </Link>
            </div>
          </div>
          <div
            className={cx('right')}
            style={{
              marginTop: '20px'
            }}
          ></div>
        </div>

        <div
          style={{
            marginTop: '180px'
          }}
          className={cx('footerPage3')}
        >
          {/* <Animation /> */}
          <FooterLandingpage />
        </div>
      </div>
    </div>
  )
}

export default Page3

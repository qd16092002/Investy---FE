import classNames from 'classnames/bind'
import styles from './Home.module.sass'
import logo from '@src/assets/svgs/Langdingpage/Logo.png'
import Air from '@src/assets/svgs/Langdingpage/Air.png'
import Color from '@src/assets/svgs/Langdingpage/Color.png'
import bluef from '@src/assets/svgs/Langdingpage/bluef.png'
import BYAHT from '@src/assets/svgs/Langdingpage/BYAHT.png'
import Jen from '@src/assets/svgs/Langdingpage/Jen.png'
import Sky from '@src/assets/svgs/Langdingpage/Sky.png'
import Langdingpageimage2 from '@src/assets/svgs/Langdingpage/Langdingpageimage2.png'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { LangdingPageCheck } from '@src/assets/svgs/Langdingpage'
import { LangdingpageJob } from '@src/app-configs'
import Page3 from '../Componets/Page3'
const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('home-wrapper')}>
      <div className={cx('page1')}>
        <div className={cx('line_1')}>
          <div className={cx('vector1')}>
            <img src={Air} alt='LogoAir'></img>
            <div className={cx('titlelogoleft')}>$10M valuation</div>
          </div>
          <img src={logo} alt='LogoInvesty'></img>
          <div className={cx('vector1')}>
            <img src={Color} alt='LogoColor'></img>
            <div className={cx('titlelogoright')}>Top 10 application</div>
          </div>
        </div>
        <div className={cx('line_1')}>
          <img
            style={{
              height: '210px',
              marginTop: '35px'
            }}
            src={Sky}
            alt='LogoSky'
          ></img>
          <div>
            <div className={cx('title_1')}>Proven by attracting VC Investment</div>
            <div className={cx('title_2')}>Receive scouting offers from fast-growing international corporations!</div>
          </div>
          <img
            src={BYAHT}
            alt='LogoBYAHT'
            style={{
              height: '40px',
              rotate: '30deg',
              marginTop: '121px'
            }}
          ></img>
        </div>
        <div className={cx('line_1')}>
          <img
            style={{
              height: '150px'
            }}
            src={bluef}
            alt='Logobluef'
          ></img>
          <Link to='/signup'>
            <div className={cx('title_3')}>Sign up in 3 seconds and receive job offers</div>
          </Link>
          <img
            style={{
              height: '160px'
            }}
            src={Jen}
            alt='LogoJen'
          ></img>
        </div>
      </div>
      <div className={cx('page2')}>
        <div className={cx('title1')}>Only accept job offer that fits your desired conditions!</div>
        <div className={cx('box_job')}>
          {LangdingpageJob.map((item) => {
            return (
              <div key={uuidv4(item)} className={cx('box')}>
                <h1>{item.h1}</h1>
                <div>
                  <h2>
                    <LangdingPageCheck />
                    <div
                      style={{
                        marginTop: '5px',
                        marginLeft: '10px'
                      }}
                    >
                      {item.h21}
                    </div>
                  </h2>
                  <h2>
                    <LangdingPageCheck />
                    <div
                      style={{
                        marginTop: '5px',
                        marginLeft: '10px'
                      }}
                    >
                      {item.h22}
                    </div>
                  </h2>
                </div>
                <h3>{item.h3}</h3>
                <h4>{item.h4}</h4>
              </div>
            )
          })}
        </div>
      </div>
      <img
        style={{
          width: '100vw',
          marginTop: '40px'
        }}
        src={Langdingpageimage2}
        alt='Image2'
      ></img>
      <Page3 />
    </div>
  )
}

export default Home

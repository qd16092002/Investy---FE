import classNames from 'classnames/bind'
import styles from './ApplyOnline.module.sass'
import { Button, Checkbox, Radio, Upload, message } from 'antd'
import { CertificateIconLink, CertificateIconUpload } from '@src/assets/svgs'
import { useState } from 'react'
import { BusinessArea, CompanyScale, CompanyType } from '@src/app-configs'
import { v4 as uuidv4 } from 'uuid'

const cx = classNames.bind(styles)

function ApplyOnline() {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  const [activeTab, setActiveTab] = useState()
  const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
  return (
    <div className={cx('form_wallpapper')}>
      <div className={cx('title')}>Recruitment Title</div>
      <div className={cx('star')}>
        * The title must clearly state: [Work location] Company name, Job position, Status of part-time or full-time
        job, year of recruitment.
      </div>
      <div className={cx('note')}>
        Note:
        <div>
          Just the company name is not attractive enough, the field and company size should be included. For example:
          [HN/HCM] Multinational Auditing Company PWC Recruits Part-Time Marketing Interns 2022.
        </div>
      </div>
      <input placeholder='Enter your title here' className={cx('input')}></input>
      <div className={cx('title')}>Name of the company</div>
      <div className={cx('star')}>
        Only write 1 keyword, for example: do not write Investy Company Limited, but only write INVESTY.
      </div>
      <input placeholder='Enter your Name of the company' className={cx('input')}></input>
      <div className={cx('title')}>Logo of the company</div>
      <div className={cx('star')}>
        Photos must be under 200kb and standard size 700x400px. Larger image sizes may slow down or fail to load. Photos
        need to be clear and high resolution to be approved. Supports JPG, PNG, GIF, JPEG image formats. You can go here
        to reduce image size
      </div>
      <div className={cx('uploadcompany')}>
        <Upload {...props}>
          <Button
            style={{
              height: '70.6px',
              padding: '10px 15px'
            }}
            className={cx('upload')}
            icon={<CertificateIconUpload />}
          >
            <div>Upload the file</div>
          </Button>
        </Upload>

        <div className={cx('upload')}>
          <CertificateIconLink />
          <div>Insert the link</div>
        </div>
      </div>
      <div className={cx('title')}>Company Introduction</div>
      <textarea placeholder='Enter text here'></textarea>
      <div className={cx('title')}>Email receiving </div>
      <div className={cx('star')}>
        Please carefully check the email you entered is correct, if you enter it incorrectly you will not receive the
        candidate&apos;s CV
      </div>
      <input placeholder='Enter your email here' className={cx('input')}></input>
      <div className={cx('job')}>
        <div className={cx('jobposition')}>JOB POSITION 1</div>
        <div className={cx('delete')}>DELETE THIS JOB POSITION</div>
        <div className={cx('title_2')}>Name of the job position</div>
        <div className={cx('star_2')}>Ex: Marketing Intern</div>
        <input className={cx('input_2')}></input>
        <div className={cx('boxinput')}>
          <input
            className={cx('input_3')}
            style={{
              marginRight: '40px'
            }}
            placeholder='Job category'
          ></input>
          <input className={cx('input_3')} placeholder='Specialization'></input>
        </div>
        <div className={cx('boxinput')}>
          <input
            className={cx('input_3')}
            style={{
              marginRight: '40px'
            }}
            placeholder='Location'
          ></input>
          <input className={cx('input_3')} placeholder='Salary'></input>
        </div>
        <div className={cx('boxinput')}>
          <input
            className={cx('input_3')}
            style={{
              marginRight: '40px',
              width: 'calc( 50% - 20px )'
            }}
            placeholder='Work experience'
          ></input>
        </div>
        <div
          className={cx('title_2')}
          style={{
            marginTop: '20px'
          }}
        >
          Job description
        </div>
        <textarea placeholder='Enter text here'></textarea>
        <div className={cx('title_2')}>Requirement</div>
        <textarea placeholder='Enter text here'></textarea>
        <div className={cx('title_2')}>Remuneration policy</div>
        <textarea placeholder='Enter text here'></textarea>
        <div className={cx('title_2')}>Language of the recruitment post</div>
        <Radio.Group
          style={{
            display: 'flex',
            width: '40%',
            justifyContent: 'space-between',
            marginTop: '20px',
            marginBottom: '20px',
            color: '#000000'
          }}
          onChange={onChange}
          value={value}
        >
          <Radio className={cx('sort')} value={1}>
            <div className={cx('sort')}>Vietnamese</div>
          </Radio>
          <Radio className={cx('sort')} value={2}>
            <div className={cx('sort')}>English</div>
          </Radio>
          <Radio className={cx('sort')} value={3}>
            <div className={cx('sort')}>Korean</div>
          </Radio>
        </Radio.Group>
        <div className={cx('title_2')}>Recruitment Deadline</div>
        <input className={cx('date')} type='date' id='dealline' name='deadline'></input>
      </div>
      <div className={cx('active')}>
        {/* {activeTab ? (
          <div className={cx('main')}>
            <div className={cx('content')}>
              <div className={cx('star_2')}>
                Please provide more information to make it easier for people to find your article.
              </div>
            </div>
            <div className={cx('abc_2')}>
              <button className={cx('post')}>POST</button>
              <button onClick={() => setActiveTab(!activeTab)} className={cx('back')}>
                BACK
              </button>
            </div>
          </div>
        ) : (
          <div className={cx('abc')}>
            <button onClick={setActiveTab} className={cx('button')}>
              NEXT
            </button>
          </div>
        )} */}
        {activeTab ? (
          <div className={cx('main')}>
            <div className={cx('content')}>
              <div className={cx('star_2')}>
                Please provide more information to make it easier for people to find your article.
              </div>
              <div className={cx('title_active')}>COMPANY TYPE</div>
              <div className={cx('box')}>
                {CompanyType.map((item) => {
                  return (
                    <Checkbox className={cx('items')} key={uuidv4(item)}>
                      {item.label}
                    </Checkbox>
                  )
                })}
              </div>
              <div className={cx('title_active')}>COMPANY SCALE</div>
              <div className={cx('box')}>
                {CompanyScale.map((item) => {
                  return (
                    <Checkbox className={cx('items')} key={uuidv4(item)}>
                      {item.label}
                    </Checkbox>
                  )
                })}
              </div>
              <div className={cx('title_active')}>BUSINESS AREA</div>
              <div className={cx('box')}>
                {BusinessArea.map((item) => {
                  return (
                    <Checkbox className={cx('items')} key={uuidv4(item)}>
                      {item.label}
                    </Checkbox>
                  )
                })}
              </div>
              <div className={cx('title_active')}>FINALLY</div>
              <Radio.Group
                style={{
                  display: 'grid',
                  marginTop: '20px',
                  marginBottom: '20px',
                  color: '#000000'
                }}
                onChange={onChange}
                value={value}
              >
                <Radio className={cx('sort')} value={1}>
                  <div className={cx('sort')}>You are the author of this post</div>
                </Radio>
                <Radio className={cx('sort')} value={2}>
                  <div className={cx('sort')}>
                    You are just a collector of this post because it is useful to everyone
                  </div>
                </Radio>
              </Radio.Group>
              <div className={cx('star_2')}>
                Note (*): If this is a post you collected, please clearly state the author&apos;s name and source of the
                post. If your post violates the autho&apos;s copyright, you will be fully responsible before the law.
                Investy will not bear any responsibility.
              </div>
              <Checkbox className={cx('items_2')}>
                I clearly understand the regulations and will take all responsibility related to my article
              </Checkbox>
            </div>
            <div className={cx('abc_2')}>
              <button className={cx('post')} type='submit'>
                POST
              </button>
              <button onClick={() => setActiveTab(!activeTab)} className={cx('back')}>
                BACK
              </button>
            </div>
          </div>
        ) : (
          <div className={cx('abc')}>
            <button onClick={setActiveTab} className={cx('button')}>
              NEXT
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplyOnline

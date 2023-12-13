/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './SetCurrentRound.module.sass'
import { IconMoney } from '@src/assets/svgs'
import { Checkbox, Col, Row } from 'antd'

const cx = classNames.bind(styles)

function SetCurrentRound({ onClose }) {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }
  return (
    <div className={cx('details')}>
      <div className={cx('title')}>Currently raising</div>
      <div className={cx('item_2')}>
        <p>Company stage</p>
        <select
          // {...register('subject')}
          style={{
            width: '100%',
            height: '33.5px',
            borderRadius: '5px',
            border: '1px solid #7A7A7A',
            color: '#7A7A7A',
            alignItems: 'center',
            marginTop: '3px',
            paddingLeft: '5px'
          }}
          placeholder='Chọn'
        >
          <option value='Idea'>Idea</option>
          <option value='Early Growth'>Early Growth</option>
          <option value='Growth'>Growth</option>
          <option value='Seed'>Seed</option>
          <option value='Pre-seed'>Pre-seed</option>
          <option value='Maturity'>Maturity</option>
        </select>
      </div>
      <div className={cx('item')}>
        <p>Size </p>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '33.5px',
            borderRadius: '5px',
            border: 'none',
            color: '#7A7A7A',
            alignItems: 'center',
            marginTop: '3px',
            paddingLeft: '10px',
            backgroundColor: '#F3F3F3'
          }}
        >
          <IconMoney />
          <input
            className={cx('inputsettings')}
            placeholder='0'
            type='text'
            // {...register('phoneNumber')}
            // defaultValue={userInfo?.phoneNumber}
          ></input>
        </div>
      </div>
      <div className={cx('item')}>
        <p>Already commited </p>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '33.5px',
            borderRadius: '5px',
            border: 'none',
            color: '#7A7A7A',
            alignItems: 'center',
            marginTop: '3px',
            paddingLeft: '10px',
            backgroundColor: '#F3F3F3'
          }}
        >
          <IconMoney />
          <input
            className={cx('inputsettings')}
            placeholder='0'
            type='text'
            // {...register('phoneNumber')}
            // defaultValue={userInfo?.phoneNumber}
          ></input>
        </div>
        <div className={cx('item')}>
          <p>Commited investors </p>
          <input
            className={cx('inputsettings')}
            placeholder='Separate with comma'
            type='text'
            // {...register('fullName')}
            // defaultValue={userInfo?.fullName}
          ></input>
        </div>
        <div className={cx('option')}>
          <div className={cx('title')}>
            <div className={cx('infor')}>Security</div>
            <Checkbox.Group
              style={{
                width: '100%'
              }}
              onChange={onChange}
            >
              <Row>
                <Col span={24}>
                  <Checkbox value='Common shares'>Common shares</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Preferred shares'>Preferred shares</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Convertible debt'>Convertible debt</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Loan'>Loan</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Other'>Other</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className={cx('title')}>
            <div className={cx('infor')}>Source</div>
            <Checkbox.Group
              style={{
                width: '100%'
              }}
              onChange={onChange}
            >
              <Row>
                <Col span={24}>
                  <Checkbox value='Business Angel'>Business Angel</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Accelerator / Incubator'>Accelerator / Incubator</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='VC Fund'>VC Fund</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Corporate'>Corporate</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Public grant'>Public grant</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Crowd'>Crowd</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>
        <div className={cx('button')}>
          <button className={cx('cancel')} onClick={onClose}>
            Cancel
          </button>
          <button className={cx('save')}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default SetCurrentRound

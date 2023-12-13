/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './AddPreviousRound.module.sass'
import { IconMoney } from '@src/assets/svgs'
import { Checkbox, Col, Row } from 'antd'

const cx = classNames.bind(styles)

function AddPreviousRound({ onClose }) {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }
  return (
    <div className={cx('details')}>
      <div className={cx('title')}>Previous round</div>
      <div className={cx('item_2')}>
        <p>Year</p>
        <input
          className={cx('inputsettings')}
          placeholder='Year'
          type='text'
          // {...register('fullName')}
          defaultValue='2023'
        ></input>
      </div>
      <div className={cx('item')}>
        <p>Type </p>
        <input
          className={cx('inputsettings')}
          placeholder='Type'
          type='text'
          // {...register('fullName')}
          // defaultValue={userInfo?.fullName}
        ></input>
      </div>
      <div className={cx('item')}>
        <p>Size</p>
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
          <p>Investos </p>
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
                  <Checkbox value='Founders'>Founders</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='Family & Friends'>Family & Friends</Checkbox>
                </Col>
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

export default AddPreviousRound

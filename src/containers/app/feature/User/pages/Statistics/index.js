/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Statistics.module.sass'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'
// import { useLazyGetPercentageQuery } from '../../userService'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Statistics() {
  // const [{ data: percentage }] = useLazyGetPercentageQuery({})
  const COLORS = ['#1751D0', '#AFECEF', '#0A090B', '#E6E6E6', '#194B7D']
  const [datauser] = useState([
    { role: 'Investor', percentage: 30, count: 300 },
    { role: 'Start-Up', percentage: 70, count: 700 }
  ])
  const [datafield] = useState([
    { role: 'Medicial', percentage: 10, count: 100 },
    { role: 'Transportation', percentage: 20, count: 200 },
    { role: 'F&B', percentage: 30, count: 300 },
    { role: 'Logistic', percentage: 25, count: 250 },
    { role: 'NFT,Crypto', percentage: 15, count: 150 }
  ])
  const downloadDataAsJSON = () => {
    // Thêm trường thời gian với giá trị thời gian hiện tại
    const currentTime = new Date().toLocaleString()
    const dataWithTime = datauser.map((entry) => ({
      ...entry,
      downloadTime: currentTime
    }))
    const jsonData = JSON.stringify(dataWithTime, null, 2)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    // eslint-disable-next-line no-undef
    const a = document.createElement('a')
    a.href = url
    a.download = 'total_role_user.json'
    // eslint-disable-next-line no-undef
    document.body.appendChild(a)
    a.click()
    // eslint-disable-next-line no-undef
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  const downloadDataAsJSON2 = () => {
    // Thêm trường thời gian với giá trị thời gian hiện tại
    const currentTime = new Date().toLocaleString()
    const dataWithTime = datafield.map((entry) => ({
      ...entry,
      downloadTime: currentTime
    }))
    const jsonData = JSON.stringify(dataWithTime, null, 2)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    // eslint-disable-next-line no-undef
    const a = document.createElement('a')
    a.href = url
    a.download = 'total_interested_field.json'
    // eslint-disable-next-line no-undef
    document.body.appendChild(a)
    a.click()
    // eslint-disable-next-line no-undef
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>Statistics</div>
      <div className={cx('content')}>
        <div className={cx('hinh1')}>
          <div className={cx('pie')}>
            <div className={cx('tieude')}>Total Role User</div>
            <PieChart width={400} height={400}>
              <Pie
                data={datauser}
                dataKey='percentage'
                nameKey='role'
                cx='50%'
                cy='26%'
                outerRadius={100}
                fill='#8884d8'
              >
                {datauser.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='#FFFF' strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip formatter={(datauser) => `${datauser}%`} />
            </PieChart>
          </div>
          <div className={cx('title_hinh1')}>
            <div>Note</div>
            <ul
              style={{
                marginTop: '15px'
              }}
            >
              {datauser.map((entry, index) => (
                <div key={`legend-${index}`}>
                  <li>
                    <div
                      style={{
                        display: 'flex'
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                          height: '10px',
                          width: '10px',
                          borderRadius: '100px',
                          marginTop: '10px'
                        }}
                      ></div>
                      <div
                        className={cx('entryname')}
                        style={{
                          marginLeft: '10px',
                          marginTop: '6px'
                        }}
                      >
                        {entry.role}: {entry.count} user
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <button className={cx('button')} onClick={downloadDataAsJSON}>
            Dowload Data Json
          </button>
        </div>
        <div className={cx('hinh1')}>
          <div className={cx('pie')}>
            <div className={cx('tieude')}>Total Interested Field</div>
            <PieChart width={400} height={400}>
              <Pie
                data={datafield}
                dataKey='percentage'
                nameKey='role'
                cx='50%'
                cy='26%'
                outerRadius={100}
                fill='#8884d8'
              >
                {datafield.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='#FFFF' strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip formatter={(datafield) => `${datafield}%`} />
            </PieChart>
          </div>
          <div className={cx('title_hinh1')}>
            <div>Note</div>
            <ul
              style={{
                marginTop: '15px'
              }}
            >
              {datafield.map((entry, index) => (
                <div key={`legend-${index}`}>
                  <li>
                    <div
                      style={{
                        display: 'flex'
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                          height: '10px',
                          width: '10px',
                          borderRadius: '100px',
                          marginTop: '10px'
                        }}
                      ></div>
                      <div
                        className={cx('entryname')}
                        style={{
                          marginLeft: '10px',
                          marginTop: '6px'
                        }}
                      >
                        {entry.role}: {entry.count} user
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <button className={cx('button')} onClick={downloadDataAsJSON2}>
            Dowload Data Json
          </button>
        </div>
      </div>
    </div>
  )
}

export default Statistics

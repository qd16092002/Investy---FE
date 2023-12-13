/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Predict.module.sass'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useAddPredictMutation } from '../../userService'
import toast from 'react-hot-toast'
import { ArrowRightOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)

function Predict() {
  const { register, handleSubmit } = useForm()
  const [addPredict, { isLoading: isUpdating }] = useAddPredictMutation()
  const formInput = useRef()
  // const [getPredict, { data: predict }] = useGetPredictQuery()
  // useEffect(() => {
  //   getPredict({}, false)
  // }, [getPredict])
  const onSubmit = async (data, e) => {
    const updateResponse = await addPredict({
      data
      // description: data.description,
      // estate_type: data.estate_type,
      // square: data.square
    })
    e.preventDefault()
    if (!updateResponse?.error) {
      toast.success('Successfully!')
    } else {
      toast.error('Something went wrong, please try again')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('main')}>
      <div className={cx('titlemain')}>Dự đoán giá bất động sản Hà Nội</div>
      <div className={cx('items')}>
        <div className={cx('title')}>Description</div>
        <textarea
          className={cx('input')}
          style={{
            height: '200px'
          }}
          placeholder='Import Description'
          type='text'
          {...register('description')}
        ></textarea>
      </div>
      <div className={cx('items')}>
        <div className={cx('title')}>Square</div>
        <input
          className={cx('input')}
          style={{
            height: '40px'
          }}
          placeholder='Import Square (m2)'
          type='text'
          {...register('square')}
        ></input>
      </div>
      <div className={cx('items_2')}>
        <div className={cx('title')}>Estate type</div>
        <select
          {...register('estate_type')}
          style={{
            width: '100%',
            height: '33.5px',
            borderRadius: '5px',
            border: 'none',
            color: '#7A7A7A',
            alignItems: 'center',
            marginTop: '3px',
            paddingLeft: '5px'
          }}
          placeholder='Chọn'
        >
          <option value='Biệt thự'>Biệt thự</option>
          <option value='Biệt thự liền kề'>Biệt thự liền kề</option>
          <option value='Chung cư'>Chung cư</option>
          <option value='Các loại khác'>Các loại khác</option>
          <option value='Kho xưởng'>Kho xưởng</option>
          <option value='Mặt bằng'>Mặt bằng</option>
          <option value='Mặt bằng, cửa hàng'>Mặt bằng, cửa hàng</option>
          <option value='Nhà hàng, khách sạn'>Nhà hàng, khách sạn</option>
          <option value='Nhà mặt tiền'>Nhà mặt tiền</option>
          <option value='Nhà ngõ, hẻm'>Nhà ngõ, hẻm</option>
          <option value='Nhà phố'>Nhà phố</option>
          <option value='Nhà riêng'>Nhà riêng</option>
          <option value='Nhà xưởng'>Nhà xưởng</option>
          <option value='Nhà đất'>Nhà đất</option>
          <option value='Phòng trọ, nhà trọ'>Phòng trọ, nhà trọ</option>
          <option value='Phòng trọ, nhà trọ, nhà trọ'>Phòng trọ, nhà trọ, nhà trọ</option>
          <option value='Shop, kiot, quán'>Shop, kiot, quán</option>
          <option value='Trang trại'>Trang trại</option>
          <option value='Trang trại khu nghỉ dưỡng'>Trang trại khu nghỉ dưỡng</option>
          <option value='Văn phòng'>Văn phòng</option>
          <option value='Đất'>Đất</option>
          <option value='Đất nông, lâm nghiệp'>Đất nông, lâm nghiệp</option>
          <option value='Đất nền dự án'>Đất nền dự án</option>
          <option value='Đất nền, phân lô'>Đất nền, phân lô</option>
        </select>
      </div>
      <div className={cx('items')}>
        <div className={cx('title')}>Price</div>
        <div
          style={{
            display: 'flex'
          }}
        >
          <div
            style={{
              display: 'grid'
            }}
          >
            <ArrowRightOutlined />
            <ArrowRightOutlined />
            <ArrowRightOutlined />
          </div>
          <div className={cx('input')}>
            {/* {predict.price} */}
            12904992347.0
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          formInput.current.click()
        }}
        type='submit'
        disabled={isUpdating}
        className={cx('button')}
      >
        Submit
      </button>
    </form>
  )
}

export default Predict

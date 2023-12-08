import { Fragment, useMemo } from 'react'
import ProfileAdmin from '../ProfileAdmin'
import ProfileUser from '../ProfileUser'
import { useSelector } from 'react-redux'

function Information() {
  const userInfo = useSelector((state) => state.auth.user)
  console.log(userInfo)
  const isAdmin = useMemo(() => userInfo?.role === 'ADMIN', [userInfo])
  return (
    <Fragment>
      {/* {isAdmin && <ProfileAdmin />}
      {!isAdmin && <ProfileUser />} */}
      {isAdmin && <ProfileUser />}
      {!isAdmin && <ProfileAdmin />}
    </Fragment>
  )
}

export default Information

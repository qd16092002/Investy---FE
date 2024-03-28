import { Fragment, useMemo } from 'react'
import ProfileAdmin from '../ProfileAdmin'
import ProfileUser from '../../User/ProfileUser'
import { useSelector } from 'react-redux'

function RoleProfile() {
  const userInfo = useSelector((state) => state.auth.user)

  const isAdmin = useMemo(() => userInfo?.role === 'ADMIN', [userInfo])
  return (
    <Fragment>
      {isAdmin && <ProfileAdmin />}
      {!isAdmin && <ProfileUser />}
    </Fragment>
  )
}

export default RoleProfile

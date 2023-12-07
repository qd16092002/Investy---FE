import ProfileLayout from '@src/components/Layouts/ProfileLayout'
import Infomation from './pages/ProfileAdmin'
import ProfileUser from './pages/ProfileUser'
import News from './pages/News'

export const userRouteList = [
  {
    path: '/infomation',
    element: (
      <ProfileLayout>
        <Infomation />
      </ProfileLayout>
    )
  },
  {
    path: '/infomationuser',
    element: (
      <ProfileLayout>
        <ProfileUser />
      </ProfileLayout>
    )
  },
  {
    path: '/member',
    element: <ProfileLayout></ProfileLayout>
  },
  {
    path: '/news',
    element: (
      <ProfileLayout>
        <News />
      </ProfileLayout>
    )
  },
  {
    path: '/messeger',
    element: <ProfileLayout></ProfileLayout>
  },
  {
    path: '/settings',
    element: <ProfileLayout></ProfileLayout>
  },
  {
    path: '/statistics',
    element: <ProfileLayout></ProfileLayout>
  }
]

import ProfileLayout from '@src/components/Layouts/ProfileLayout'
import News from './pages/News'
import Information from './pages/Information'
import Settings from './pages/Settings'
import Predict from './pages/Predict'
import Member from './pages/Member'
import Statistics from './pages/Statistics'

export const userRouteList = [
  {
    path: '/infomation',
    element: (
      <ProfileLayout>
        <Information />
      </ProfileLayout>
    )
  },
  {
    path: '/member',
    element: (
      <ProfileLayout>
        <Member />
      </ProfileLayout>
    )
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
    element: (
      <ProfileLayout>
        <Settings />
      </ProfileLayout>
    )
  },
  {
    path: '/statistics',
    element: (
      <ProfileLayout>
        <Statistics />
      </ProfileLayout>
    )
  },

  {
    path: '/predict',
    element: <Predict />
  }
]

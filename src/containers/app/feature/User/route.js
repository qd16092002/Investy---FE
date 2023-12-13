import ProfileLayout from '@src/components/Layouts/ProfileLayout'
import News from './pages/News'
import Information from './pages/Information'
import Settings from './pages/Settings'
import Predict from './pages/Predict'

export const userRouteList = [
  {
    path: '/infomation',
    element: (
      <ProfileLayout>
        <Information />
      </ProfileLayout>
    )
  },
  // {
  //   path: '/infomationuser',
  //   element: (
  //     <ProfileLayout>
  //       <ProfileUser />
  //     </ProfileLayout>
  //   )
  // },
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
    element: (
      <ProfileLayout>
        <Settings />
      </ProfileLayout>
    )
  },
  {
    path: '/statistics',
    element: <ProfileLayout></ProfileLayout>
  },

  {
    path: '/predict',
    element: <Predict />
  }
]

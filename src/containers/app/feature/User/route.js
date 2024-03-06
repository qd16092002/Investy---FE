import ProfileLayout from '@src/components/Layouts/ProfileLayout'
import RoleProfile from './pages/RoleProfile'
import Settings from './pages/Settings'
import HeaderOnlyLayout from '@src/components/Layouts/HeaderOnlyLayout'
import FreeLancer from './pages/FreeLancer'
import Recruitment from './pages/Recruitment'
import RecruitmentTab from './pages/RecruitmentTab'
import Company from './pages/Company'
import OnlineCourse from './pages/OnlineCourse'
import InviteFriend from './pages/InviteFriend'
import ItemsOnlineCource from './pages/OnlineCourse/ItemsOnlineCource'
import VideoOnlineCource from './pages/OnlineCourse/VideoOnlineCource'
import AddMoreServives from './components/ServicesProfileUser/componets/AddMoreServives'

export const userRouteList = [
  {
    path: '/infomation',
    element: <HeaderOnlyLayout></HeaderOnlyLayout>
  },
  {
    path: '/profile',
    element: (
      <HeaderOnlyLayout>
        <RoleProfile />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/profile/addmoreservices',
    element: (
      <HeaderOnlyLayout>
        <AddMoreServives />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/invite',
    element: (
      <HeaderOnlyLayout>
        <InviteFriend />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/messeger',
    element: <ProfileLayout></ProfileLayout>
  },
  {
    path: '/settings',
    element: (
      <HeaderOnlyLayout>
        <Settings />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/freelance',
    element: (
      <HeaderOnlyLayout>
        <FreeLancer />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/about',
    element: <HeaderOnlyLayout></HeaderOnlyLayout>
  },
  {
    path: '/recruiment',
    element: (
      <HeaderOnlyLayout>
        <Recruitment />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/cvbuild',
    element: <HeaderOnlyLayout></HeaderOnlyLayout>
  },
  {
    path: '/company',
    element: (
      <HeaderOnlyLayout>
        <Company />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/online-cource',
    element: (
      <HeaderOnlyLayout>
        <OnlineCourse />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/recruittab',
    element: (
      <HeaderOnlyLayout>
        <RecruitmentTab />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/online-cource/firststepkorea',
    element: (
      <HeaderOnlyLayout>
        <ItemsOnlineCource />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/online-cource/firststepkorea/lesson1',
    element: (
      <HeaderOnlyLayout>
        <VideoOnlineCource />
      </HeaderOnlyLayout>
    )
  }
]

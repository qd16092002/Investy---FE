import RoleProfile from './pages/System/RoleProfile'
import Settings from './pages/System/Settings'
import HeaderOnlyLayout from '@src/components/Layouts/HeaderOnlyLayout'
import FreeLancer from './pages/System/FreeLancer'
import Recruitment from './pages/System/Recruitment'
import Company from './pages/System/Company'
import OnlineCourse from './pages/OnlineCourse'
import InviteFriend from './pages/System/InviteFriend'
import ItemsOnlineCource from './pages/OnlineCourse/ItemsOnlineCource'
import VideoOnlineCource from './pages/OnlineCourse/VideoOnlineCource'
import AddMoreServives from './components/ServicesProfileUser/componets/AddMoreServives'
import Information from './pages/User/Information'
import RecruitmentUser from './pages/User/RecruimentUser'
import RecruitmentTab from './components/RecruitmentTab'
import Blog from './pages/System/Blog'
import BlogDetails from './components/BlogDetails'
import ProfileViewer from './pages/User/ProfileViewer'

export const userRouteList = [
  {
    path: '/information',
    element: (
      <HeaderOnlyLayout>
        <Information />
      </HeaderOnlyLayout>
    )
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
    path: '/profileviewer/:userId',
    element: (
      <HeaderOnlyLayout>
        <ProfileViewer />
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
    path: '/recruitment',
    element: (
      <HeaderOnlyLayout>
        <Recruitment />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/recruitmentuser',
    element: (
      <HeaderOnlyLayout>
        <RecruitmentUser />
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
    path: '/recruittab/:recruitId',
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
  },
  {
    path: '/blog',
    element: (
      <HeaderOnlyLayout>
        <Blog />
      </HeaderOnlyLayout>
    )
  },
  {
    path: '/blog/:blogId',
    element: (
      <HeaderOnlyLayout>
        <BlogDetails />
      </HeaderOnlyLayout>
    )
  }
]

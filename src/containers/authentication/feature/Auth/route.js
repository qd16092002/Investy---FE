import AuthLayout from '@src/components/Layouts/AuthLayout'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Signup from './Signup'
import VerifyEmail from './VerifyEmail'
import Test from './Test'

export const authRouteList = [
  {
    path: '/login',
    element: <Login />,

    children: []
  },
  {
    path: '/signup',
    element: <Signup />,
    children: []
  },
  {
    path: '/test',
    element: <Test />,
    children: []
  },
  {
    path: '/verify',
    element: <VerifyEmail />,
    children: []
  },
  {
    path: '/authorize',
    element: <ForgotPassword />,
    children: []
  },
  {
    path: '/layout',
    element: <AuthLayout></AuthLayout>
  }
]

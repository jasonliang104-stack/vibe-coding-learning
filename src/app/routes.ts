import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { ResumeSubmit } from './pages/ResumeSubmit';
import { Diagnosis } from './pages/Diagnosis';
import { DiagnosisReport } from './pages/DiagnosisReport';
import { SupplementInfo } from './pages/SupplementInfo';
import { OptimizationProgress } from './pages/OptimizationProgress';
import { OptimizationResult } from './pages/OptimizationResult';
import { FormatAlignment } from './pages/FormatAlignment';
import { ResumeList } from './pages/ResumeList';
import { OriginalResumeView } from './pages/OriginalResumeView';
import { ResumeView } from './pages/ResumeView';
import { Profile } from './pages/Profile';
import { Payment } from './pages/Payment';
import { TaskDetail } from './pages/TaskDetail';
import { Orders } from './pages/Orders';
import { PointsHistory } from './pages/PointsHistory';
import { Feedback } from './pages/Feedback';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/submit',
    Component: ResumeSubmit,
  },
  {
    path: '/diagnosis',
    Component: Diagnosis,
  },
  {
    path: '/report',
    Component: DiagnosisReport,
  },
  {
    path: '/supplement',
    Component: SupplementInfo,
  },
  {
    path: '/optimization-progress',
    Component: OptimizationProgress,
  },
  {
    path: '/result',
    Component: OptimizationResult,
  },
  {
    path: '/format',
    Component: FormatAlignment,
  },
  {
    path: '/resumes',
    Component: ResumeList,
  },
  {
    path: '/resume/original/:id',
    Component: OriginalResumeView,
  },
  {
    path: '/resume/view/:id',
    Component: ResumeView,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/payment',
    Component: Payment,
  },
  {
    path: '/task/:id',
    Component: TaskDetail,
  },
  {
    path: '/orders',
    Component: Orders,
  },
  {
    path: '/points-history',
    Component: PointsHistory,
  },
  {
    path: '/feedback',
    Component: Feedback,
  },
]);

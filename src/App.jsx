import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { AppProvider } from './context/AppContext'
import { ROUTES } from './constants/routes'

import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import ScrollTop from './components/ScrollTop'
import NotFound from './components/NotFound'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Activities = lazy(() => import('./pages/Activities'))
const Events = lazy(() => import('./pages/Events'))
const Faculties = lazy(() => import('./pages/Faculties'))
const Management = lazy(() => import('./pages/Management'))
const Donate = lazy(() => import('./pages/Donate'))

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])
    
    return (
      <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
        <AppProvider>
      <BrowserRouter>
          <Navbar />
          <ScrollTop />
          <Drawer />

          <main className='min-h-screen'>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.ACTIVITIES} element={<Activities />} />
                <Route path={ROUTES.EVENTS} element={<Events />} />
                <Route path={ROUTES.FACULTIES} element={<Faculties />} />
                <Route path={ROUTES.MANAGEMENT} element={<Management />} />
                <Route path={ROUTES.DONATE} element={<Donate />} />
                
                <Route path='/home' element={<Navigate to="/" replace />} />

                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          
      </BrowserRouter>
    </AppProvider>
        </>
      )
    }
      </>
    )
}

export default App

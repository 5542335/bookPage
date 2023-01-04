import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Auth } from './components/auth/Auth'
import { TextPage } from './components/textPage/TextPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<TextPage />} />
        <Route path='auth' element={<Auth />} />
        <Route path='*' element={<p>Страница не найдена</p>} />
      </Route>
    </Routes>
  )
}

export default App

import Main from './pages/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Routes, Route } from 'react-router-dom'
import ItemDetail from './pages/ItemDetail'
import EditItem from './pages/EditItem'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Navigate to='/items' />} />
        <Route path='/items' element={<Main />} />
        <Route path='/items/:id' element={<ItemDetail />} />
        <Route path='/items/:id/edit' element={<EditItem />} />
      </Routes>
    </div>
  )
}

export default App

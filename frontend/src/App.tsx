import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './shared/routes/appRoutes'
import myStore from './shared/redux/store'

function App() {

  return (
    <>
    <Provider store={myStore}>
     <AppRoutes/>
     </Provider>
    </>
  )
}

export default App

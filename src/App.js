import SurveryNavigation from "./components/SurveyNavigation";
import { Provider } from 'react-redux'
import { store } from './redux/store'

// Practic Providerul e componenta principala, de unde porneste state-ul (store)
function App() {
  return (
    <Provider store={store}>
      <SurveryNavigation></SurveryNavigation>
    </Provider>
  );
}

export default App;
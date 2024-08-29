import { useState, useEffect } from 'react';
import { MainLayout, CabinetLayout } from './view/layouts';
import { Login, Register } from './view/pages/auth';
import CabinetBoard from './view/pages/cabinetBoard';
import LoadingWrapper from './view/components/shared/LoadingWrapper';
import { db, auth, doc, getDoc, getDocs, collection, onAuthStateChanged } from './services/firebase/firebase';
import { AuthContextProvider } from './context/AuthContext';
import { ROUTES_CONSTANTS } from './routes';
import { taskStatusModel } from './view/pages/cabinetBoard/constants'; //TODO
import {  
  Route, 
  Navigate,
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';



const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState(taskStatusModel) //TODO
  const [issuesLoading, setIssuesLoading] = useState(false) //TODO
  const updatedTaskStatusModel = taskStatusModel()

  const [userProfileInfo, setUserProfileInfo] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    email: ''
  });

  useEffect(() => {
    setLoading(true);
    
    onAuthStateChanged(auth, (user) => { 
      setLoading(false)

      if (user) {
        setIsAuth(true);
          const { uid } = user;
          const ref = doc(db, 'registerUsers', uid);

          getDoc(ref).then((userData) => {
            if (userData.exists()) {
              setUserProfileInfo(userData.data()) 
            }
          })
      } else {

      }
    })
  }, [])

  
  const handleGetIssues = async () => { //TODO
    setIssuesLoading(true)
    const queryData = await getDocs(collection(db, 'issue'));
    queryData.docs.map(doc => {
        const data = doc.data()
        const { status } = data;
        if(updatedTaskStatusModel[status]) {
            updatedTaskStatusModel[status].items.push(data)
            console.log(updatedTaskStatusModel)
        }
    })
    setColumns({...updatedTaskStatusModel});
    setIssuesLoading(false)
  }
  return (
    <LoadingWrapper loading={loading} fullScreen>
      <AuthContextProvider value={{ isAuth, userProfileInfo, setIsAuth, columns, setColumns, handleGetIssues, issuesLoading}}>
        <RouterProvider router={
          createBrowserRouter(
            createRoutesFromElements(
              <Route path="/" element={<MainLayout />}>
                  <Route 
                    path={ROUTES_CONSTANTS.LOGIN} 
                    element={!isAuth ? <Login /> : <Navigate to={ROUTES_CONSTANTS.CABINET}/>}
                  />
                  <Route 
                    path={ROUTES_CONSTANTS.REGISTER} 
                    element={!isAuth ? <Register /> : <Navigate to={ROUTES_CONSTANTS.REGISTER}/>}
                  />

                  {/* ------ Cabinet Layout Route ------ */}
                  <Route 
                    path={ROUTES_CONSTANTS.CABINET} 
                    element={isAuth ? <CabinetLayout /> : <Navigate to={ROUTES_CONSTANTS.LOGIN}/>} 
                  >
                    <Route path={ROUTES_CONSTANTS.CABINET} element={<CabinetBoard />}/>
                  </Route>
              </Route>
            )
          )
        }/>
      </AuthContextProvider>
    </LoadingWrapper>
  )
};

export default App;




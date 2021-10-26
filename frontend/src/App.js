import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LogoutComponent } from './components/LogoutComponent';
import { HomeScreen } from './screens/HomeScreen'
import { RegisterScreen } from './screens/RegisterScreen'
import { LoginScreen } from './screens/LoginScreen'
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { EnterOtpScreen } from './screens/EnterOtpScreen';
import { ResetPasswordScreen } from './screens/ResetPasswordScreen';
import { ContactScreen } from './screens/ContactScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { MovieScreen } from './screens/MovieScreen'
import { AutomobileScreen } from './screens/AutomobileScreen'
import { CafeScreen } from './screens/CafeScreen'
import { DeviceScreen } from './screens/DeviceScreen'
import { PlaceScreen } from './screens/PlaceScreen'
import { ApplicationScreen } from './screens/ApplicationScreen';
import { ChannelScreen } from './screens/ChannelScreen';
import { WebsiteScreen } from './screens/WebsiteScreen';
import { AddMovieScreen } from './screens/AddMovieScreen'

function App() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin 
  return (
      <Router>
        <Header/>
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/forgot' component={ForgotPasswordScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
        <Route path='/profile' component={ProfileScreen} exact />
        <Route path='/movies' component={MovieScreen} exact />
        <Route path='/addmovie' component={AddMovieScreen} exact />
        <Route path='/automobiles' component={AutomobileScreen} exact />
        <Route path='/cafes' component={CafeScreen} exact />
        <Route path='/devices' component={DeviceScreen} exact />
        <Route path='/places' component={PlaceScreen} exact />
        <Route path='/apps' component={ApplicationScreen} exact />
        <Route path='/channels' component={ChannelScreen} exact />
        <Route path='/websites' component={WebsiteScreen} exact />
        <Route path='/forgot/otp' component={EnterOtpScreen} exact />
        <Route path='/forgot/reset/:id' component={ResetPasswordScreen} exact />
        <Route path='/' component={HomeScreen} exact />
        {userInfo && <LogoutComponent/>}
        <Footer/>
      </Router>
  );
}

export default App;

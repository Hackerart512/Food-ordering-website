
import './App.css';
import Shopping_cart from './components/shopping_cart/Shopping_cart';
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Add_food from './pages/add_food/Add_food';
import View_food from './pages/view_food/View_food';
import Add_type from './pages/add_type/Add_type';
import View_type from './pages/view_type/View_type';
import Update_food from './pages/updatefood/Update_food';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shopping-cart" element={<Shopping_cart/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />

          {/* admin */}

          <Route exact path="/admin" element={<Admin/>} />
          <Route exact path="/admin/dashboard" element={<Dashboard/>} />
          <Route exact path="/admin/dashboard/add-food" element={<Add_food/>} />
          <Route exact path="/admin/dashboard/view-food" element={<View_food/>} />
          <Route exact path="/admin/dashboard/add-type" element={<Add_type/>} />
          <Route exact path="/admin/dashboard/view-type" element={<View_type/>} />
          <Route exact path="/admin/dashboard/updatefood/:id" element={<Update_food/>} />
           
        </Routes>
      </Router>
    </>
  )
}

export default App;

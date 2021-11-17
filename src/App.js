import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import MyBody from './Components/MyBody';
import MyHeader from './Components/MyHeader';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import ShopDetails from './Pages/Shop/ShopDetails';
import ShopPage from './Pages/Shop/ShopPage';
import About from './Pages/About'
import Home from './Pages/Home';
import Basket from './Pages/Basket';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <BrowserRouter>
        <MyHeader darkModeAcikMi={true} feza="yagiz" />
        <Content style={{ padding: '100px' }}>
                    <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/shopdetails">
              <ShopDetails />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </BrowserRouter>

    </Layout>

  );
}

export default App;

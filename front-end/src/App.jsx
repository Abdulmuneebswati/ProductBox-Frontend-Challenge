import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Items from './Pages/Items/Items';
import Cart from './Pages/Cart/Cart';
import Additems from './Pages/Additems/Additems';
import Item from './Pages/Item/Item';

function App() {
  

  // pages to be rendered list
  const renderPages =  [
    {
      id: 1,
      path: "/",
      component:<Home/>,
    },
    {
      id: 2,
      path: "/items",
      component: <Items/>,
    }, {
      id: 3,
      path: "/cart",
      component: <Cart/>,
    },
    {
      id: 4,
      path: "/AddItems",
      component: <Additems/>,
    },
    {
      id: 4,
      path: "/items/:id",
      component:<Item/>,
    },
  ]


// ==============================
      // return
// ==============================
  return ( 
    <div className="">
    <Router>
      <Routes>
        {
          renderPages.map((page)=>{
            return <Route key={page.id} path={page.path} element={page.component}/>
          })
        }
      </Routes>
</Router>
    </div>
  )
}

export default App

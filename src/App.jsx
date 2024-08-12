
import { useContext, useEffect } from 'react'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { AppContext } from './appcontext_Api/AppContext'
import Spinner from './components/spinner/Spinner';
function App() {
  
  const {fetchData,loader,posts}=useContext(AppContext);

  useEffect(()=>{
       fetchData();
  },[])
  return (
    <>
     <div className="app flex flex-col">
         <Header/>
         <div className="mid w-[40rem] mx-auto">
         {
          loader?<Spinner />:<Body posts={posts} />
         }
         </div>
         <Footer/>
     </div>
    </>
  )
}

export default App

import React, { useContext } from 'react'
import Header from '../header/Header'
import Spinner from '../spinner/Spinner'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import { AppContext } from '../../appcontext_Api/AppContext'
import { useEffect } from 'react'

const Home = () => {
    const {fetchData,loader,posts, page, totalPages, pageChange}=useContext(AppContext);
    useEffect(()=>{
        fetchData();
   },[])
  return (
    <div>
      <div className="app flex flex-col">
         <Header/>
         <div className="mid w-[40rem] mx-auto">
         {
          loader?<Spinner />:<Body posts={posts} />
         }
         </div>
         <Footer page={page} totalPages={totalPages} pageChange={pageChange}/>
     </div>
    </div>
  )
}

export default Home

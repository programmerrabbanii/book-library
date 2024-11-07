import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../utility/utility';
import Book from './Book';
import ReadBooks from './ReadBooks';
const ListedBook = () => {
    const allBooks=useLoaderData()
    const [readlist,setreadlist]=useState([])
    useEffect(()=>{
        const storeReadlist=getStoreReadList()
        const storeReadlistInter=storeReadlist.map(id=>parseInt(id));
        const readBookRead=allBooks.filter(book=>storeReadlistInter.includes(book.bookId))
        setreadlist(readBookRead)
    },[])
    return (
        <div className='w-11/12 mx-auto mt-12'>

<Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wisth List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Book i read {readlist.length}</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
       {
        readlist.map((readBook)=> <ReadBooks readbook={readBook}></ReadBooks>)
      }
       </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>my wish list</h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default ListedBook;
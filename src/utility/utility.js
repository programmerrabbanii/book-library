import { toast } from "react-toastify";

const getStoreReadList=()=>{

    const storedListStr=localStorage.getItem('read-list')
    if(storedListStr){
        const storedList=JSON.parse(storedListStr);
        return storedList
    }
    else{
        return[];
    }
}
const addTostoredReadList=(id)=>{
    const storedList=getStoreReadList();
    if(storedList.includes(id)){
        toast.error('already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
        toast.success('read list added successfully')
    }
}
// wish list data



const getStoredWishlist = () => {
    const storedWishlistStr = localStorage.getItem('wishlist'); // 
    if (storedWishlistStr) { 
        const storedWishlist = JSON.parse(storedWishlistStr); // 
        return storedWishlist;
    } else {
        return []; 
    }
};


const addToStoredWishlist = (id) => {
    const storedWishlist = getStoredWishlist(); 

    if (storedWishlist.includes(id)) { 
        console.log(id, 'already exists in the wishlist');
    } else { 
        storedWishlist.push(id); 
        const storedWishlistStr = JSON.stringify(storedWishlist); 
        localStorage.setItem('wishlist', storedWishlistStr); 
    }
};




export {addTostoredReadList, getStoredWishlist,getStoreReadList}
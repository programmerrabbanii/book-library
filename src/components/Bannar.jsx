import bannarImg from '../assets/books.jpg'
const Bannar = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen rounded-xl w-11/12 mx-auto p-8  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannarImg}
      className=" w-6/12 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl mb-3">Books to freshen up your bookshelf</h1>
     
      <button className=" py-2 px-6 bg-[#23BE0A] rounded-lg mt-5 text-white font-semibold">Viwe The List</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Bannar;
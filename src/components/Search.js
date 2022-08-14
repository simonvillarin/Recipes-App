import { React, useState } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const handleClear = () => {
    setInput('');
    navigate('');
  };

  return (
    <>
      <div className="container flex justify-center items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16: lg:pb-20">
        <form onSubmit={handleSubmit} className="relative w-full max-w-[600px]">
          <MdSearch className="absolute top-[50%] translate-y-[-50%] left-3 text-[1.5rem] text-[#009242]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full px-10 py-3 text-4 border-2 border-solid border-[#009242] rounded-md focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input && (
            <MdClose
              className="absolute top-[50%] translate-y-[-50%] right-3 text-[1.5rem] text-[#009242]"
              onClick={handleClear}
            />
          )}
        </form>
      </div>
    </>
  );
}

export default Search;

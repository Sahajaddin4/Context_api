import React from "react";

function Footer() {
  return (
    <div className="sticky bottom-0 border-t-2 shadow-2xl  w-full py-3 bg-white">
      <div className="pagination w-[40rem] mx-auto flex justify-between items-center">
        <div className="pagination-btn gap-2 flex">

        <button className="previous py-2 shadow-md rounded-md border-gray-400 border px-4 hidden ">Previous</button>
        <button className="next py-2 shadow-md rounded-md border border-gray-400 px-4">Next</button>
        </div>
        <div className="page-count">
          <p className="font-semibold">Page 1 of 6</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

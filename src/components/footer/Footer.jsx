import React from "react";

function Footer({ page, totalPages, pageChange }) {
  return (
    <div className="sticky bottom-0 border-t-2 shadow-2xl  w-full py-3 bg-white">
      <div className="pagination w-[40rem] mx-auto flex justify-between items-center">
        <div className="pagination-btn gap-2 flex">
          {page > 1 ? (
            <button
              className="previous py-2 shadow-md rounded-md border-gray-400 border px-4"
              onClick={()=>{pageChange(page - 1)}}
            >
              Previous
            </button>
          ) : ''

          }
          {page < totalPages ? (
            <button
              className="next py-2 shadow-md rounded-md border border-gray-400 px-4"
              onClick={()=>(pageChange(page + 1))}
            >
              Next
            </button>
          ) : 
            ''          
          }
        </div>
        <div className="page-count">
          <p className="font-semibold">
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

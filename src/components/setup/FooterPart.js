import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center text-black" style={{color:'black', backgroundColor:'#E7E6DD', boxShadow:'0px 2px 10px', padding:'20px', position:"absolute", width:'100%'}}>
            Developed With 🧡 By:
            <span className="text-warning font-weight-normal">
              {' '} <a href='https://github.com/sean-code' target='_blank' style={{color:'#D23114 ', textDecoration:'none'}}>John Nganga </a>
            </span> Using  React JS, Redux Js, OMDB
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

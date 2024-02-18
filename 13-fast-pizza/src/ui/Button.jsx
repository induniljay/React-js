/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, disabled, to,type,onClick }) {


  const base = `transition-color text-sm inline-block rounded-full
             bg-yellow-400  font-semibold  uppercase 
             tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 
             focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed
            `
  

  const style = {
    primary : base + ' px-6 py-3 md:px-6 md:py-4',
    small : base +' py-2 px-4 md:px-5 md:py-2 text-xs',
    secondary:`text-sm px-6 py-2 md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-300
            font-semibold  uppercase  hover:text-stone-100
             tracking-wide text-stone-800 duration-300 hover:bg-stone-700 
             focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed
            `,
  round : base +' py-2 px-2.5  md:px-3.5 md:py-2 text-sm'
  }


  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  if(onClick){
    return (
    <button  onClick={onClick} disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;

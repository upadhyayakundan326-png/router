import { useNavigate } from "react-router-dom"

function Navbar({show,setshow}){
    const navigate=useNavigate();
    return(<>
        <button onClick={()=>{navigate("/");
        setshow(!show);}
            
        }>Home</button>
        <button onClick={()=>{navigate("/about");
              setshow(!show);
        }}
        >About</button>
    </>)
}export default Navbar;
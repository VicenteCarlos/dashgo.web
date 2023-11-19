import { configToast } from "../Login/configToast"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
    toast.success("Logado!", configToast)

    return <>
        <ToastContainer />
        <h1>oi</h1>
    </>
}

export { Dashboard }
import './App.css'
import {Toaster} from "react-hot-toast";
import Routes from "./routes";

function App() {

  return (
    <>
        <Routes/>
        <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                style: {
                    backgroundColor: '#141420',
                    color: '#FFFFFFB2',
                },
            }}
        />
    </>
  )
}

export default App

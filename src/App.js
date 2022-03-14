import React, { useState } from "react";
import Posts from "./components/Posts";
import AddPostModal from "./components/AddPostModal";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { ToastContainer } from "react-toastify";
import { useAppContext } from "./context";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

function App() {
  const {
    appState: { isError },
  } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleShow = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-between">
          <h2 className="mr-2">SSE Realtime Newsfeed</h2>
          <MDBBtn onClick={() => toggleShow()}>Add Post</MDBBtn>
        </div>
      </header>
      {!isError && (
        <h2 className="mt-3 mb-3">
          Open this app in a new tab or windows and try to add new post or like
          a post and see the real-time functionality in action.
        </h2>
      )}
      <MDBContainer fluid className="mt-3 mb-3">
        <Posts />
      </MDBContainer>
      <ToastContainer />
      <AddPostModal isOpen={isOpen} toggleShow={toggleShow} />
    </div>
  );
}

export default App;

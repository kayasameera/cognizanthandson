import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const show = true;

  return (
    <div className="container">

      <div className="col">
        <h1>Course Details</h1>
        {show && <CourseDetails />}
      </div>

      <div className="col">
        <h1>Book Details</h1>
        {show && <BookDetails />}
      </div>

      <div className="col">
        <h1>Blog Details</h1>
        {show && <BlogDetails />}
      </div>

    </div>
  );
}

export default App;
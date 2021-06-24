import Hero from "./components/hero"
import RowOne from "./components/row-one"
import RowTwo from "./components/row-two"
import RowThree from "./components/row-three"
import RowFour from "./components/row-four"
import RowFive from "./components/row-five"
import Header from "./components/header"
import Blog from "./components/blog"
import ScrollToTop from "./components/scroll-to-top"

function App() {
    return (
      <>
        <Header />
        <Hero />
        <RowOne />
        <RowTwo />
        <RowThree />
        <RowFour />
        <RowFive />
        <Blog />
        <ScrollToTop />
      </>
    );
}

export default App;

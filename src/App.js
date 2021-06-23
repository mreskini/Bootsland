import Hero from "./components/hero"
import RowOne from "./components/row-one"
import RowTwo from "./components/row-two"
import RowThree from "./components/row-three"
import RowFour from "./components/row-four"
import Header from "./components/header"
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
        <ScrollToTop />
      </>
    );
}

export default App;

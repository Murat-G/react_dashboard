import Header from "./components/Header";
import Footer from "./components/Footer";
import Middle from "./main/middle/Middle";
import User from "./main/bottom/User";
import Progress from "./main/side/Progress";

function App() {
  return (
    <>
      <Header />
      <div style={{ display:'flex',flexDirection:'column'}}>
        <div style={{ display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Middle />
          <Progress />
        </div>
          <User />
      </div>
      <Footer />
    </>
  );
}

export default App;

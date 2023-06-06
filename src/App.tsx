import PrimarySearchAppBar from "./components/header/PrimarySearchAppBar";
import LeftNavigation from "./components/leftMenu/LeftNavigation";

function App() {
    return (
        <>
            <PrimarySearchAppBar/>
            {/*use MUI's grid tags*/}
            <section style={{display: 'flex'}}>
                <LeftNavigation/>
                <h1>DM SCREEN v0.1</h1>
            </section>
        </>
    );
}

export default App;
import "./App.css";
import Card from "./components/Card";
import image1 from "./assets/image_1.png";
import image2 from "./assets/image_2.png";
import image3 from "./assets/image_3.png";

function App() {
    return (
        <main>
            <div className="header">
                <h1 className="header__title">More details</h1>
                <p className="header__copy">&copy;HenriB</p>
            </div>
            <div className="cards__wrapper">
                <Card src={image1} title="Raycast Wallpaper #1" badge="premium">
                    Recreate this wallpaper using AI.
                </Card>
                <Card src={image2} title="Sunset Vista" badge="new">
                    Capture the beauty of sunset with your camera.
                </Card>
                <Card src={image3} title="Mountain Adventure">
                    Explore the highest peaks and enjoy breathtaking views.
                </Card>
            </div>
        </main>
    );
}

export default App;

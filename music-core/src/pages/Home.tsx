import { lazy, Suspense } from "react";

const MusicLibrary = lazy(() => import("musicLibrary/MusicLibrary"));

const Home = () => {
    return (
        <div>
            <h1>Welcome to Music Library</h1>
            <Suspense fallback={<div>Loading Music Library...</div>}>
                <MusicLibrary />
            </Suspense>
        </div>
    );
};

export default Home;

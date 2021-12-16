import { Link } from 'react-router-dom';

export const Home = () => {
    return (
    <>
    <div className="bg-black flex flex-col min-h-screen justify-center items-center">
        <div className="bg-gray-400 flex flex-col w-1/4 my-auto space-y-4 p-4">
            <div className="text-white text-center text-6xl mt-2">
                {"Home"}
            </div>
            <div className="bg-blue-800 text-white text-center text-4xl border-4 border-yellow-200 rounded hover:scale-125 hover:bg-blue-400">
                <Link to="/start">{"Start"}</Link>
            </div>
            <div className="bg-blue-800 text-white text-center text-4xl border-4 border-yellow-200 rounded hover:scale-125 hover:bg-blue-400">
                <Link to="/setting">{"Setting"}</Link>
            </div>
        </div>
    </div>
    </>
    );
}
import { Link } from 'react-router-dom';

export const Start = () => {
    return (
        <div className="bg-black flex min-h-screen justify-center items-center">
            <div className="relative bg-gray-400 flex flex-col lg:w-1/4 sm:w-1/2 my-auto space-y-4 p-4">
                <div className="text-white text-center text-6xl mt-2">
                    {"Private"}
                </div>
                <div className="bg-blue-800 text-white text-center text-4xl border-4 border-yellow-200 rounded hover:scale-125 hover:bg-blue-400">
                    <Link to="/availablerooms">{"Join"}</Link>
                </div>
                <div className="bg-blue-800 text-white text-center text-4xl border-4 border-yellow-200 rounded hover:scale-125 hover:bg-blue-400">
                    <Link to="/myroom">{"Create"}</Link>
                </div>
                <div className="absolute bg-red-600 right-0 top-0 border-2 border-yellow-300 hover:scale-150 hover:bg-red-300 w-10 h-10 p-4 -translate-y-6 translate-x-2 flex justify-center items-center">
                    <Link className='text-white text-center text-2xl' to="/">X</Link>
                </div>
            </div>
        </div>
    );
}

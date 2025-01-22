import './App.css'

function App() {

    return <>
        <div className="text-dark w-full h-full bg-accent bg-opacity-20 flex justify-center">
            <div className="max-w-6xl h-fit w-2/3 bg-secondary bg-opacity-40 p-8 rounded-md shadow-md my-10">
                <h1 className="font-bold text-2xl">Create Objective</h1>
                {/*bg-primary bg-opacity-80*/} {/*just remove shadow and add this*/}
                <div className="mt-2 shadow-md px-4 py-4 rounded-md">
                    <div className=" flex flex-col gap-1.5">
                        <label htmlFor="objective" className="font-medium text-lg">Enter Objective</label>
                        <input type="text" name="objective"
                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 "
                               id="objective"/>
                    </div>
                    <div>
                        <div className="flex justify-between mt-2">
                            <p className="font-medium mt-2 text-lg">Key Results</p>
                            <button
                                className="font-medium mt-2 px-2 py-1 bg-secondary rounded-md text-primary hover:bg-opacity-90 border-2 border-gray-500">Add
                                Key result
                            </button>
                        </div>
                        {/*bg-secondary bg-opacity-20 - just add shadow-sm*/}
                        <div className="flex flex-col gap-3">
                            <div className="mt-3  p-4 rounded-md shadow-md">
                                <div className="flex items-center w-full gap-3">
                                    <label htmlFor="objective" className="font-medium w-fit">Title</label>
                                    <input type="number" name="objective"
                                           className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-full"
                                           id="objective"/>
                                </div>
                                <div className="mt-3 flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 w-1/3">
                                        <label htmlFor="objective" className="font-medium w-2/5">Initial Value</label>
                                        <input type="number" name="objective"
                                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-3/5"
                                               id="objective"/>
                                    </div>
                                    <div className="flex items-center gap-1.5 w-1/3">
                                        <label htmlFor="objective" className="font-medium w-2/5">Current Value</label>
                                        <input type="number" name="objective"
                                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-3/5"
                                               id="objective"/>
                                    </div>
                                    <div className="flex items-center gap-1.5 w-1/3">
                                        <label htmlFor="objective" className="font-medium w-2/5">Target Value</label>
                                        <input type="number" name="objective"
                                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-3/5"
                                               id="objective"/>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center w-full gap-3">
                                    <label htmlFor="objective" className="font-medium w-fit">Metrics</label>
                                    <input type="text" name="objective"
                                           className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-full"
                                           id="objective"/>
                                </div>
                            </div>
                            <div className="mt-3  p-4 rounded-md shadow-md">
                                <div className="flex items-center w-full gap-3">
                                    <label htmlFor="objective" className="font-medium w-fit">Title</label>
                                    <input type="number" name="objective"
                                           className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-full"
                                           id="objective"/>
                                </div>
                                <div className="mt-3 flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 w-1/3">
                                        <label htmlFor="objective" className="font-medium w-2/5">Initial Value</label>
                                        <input type="number" name="objective"
                                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-3/5"
                                               id="objective"/>
                                    </div>
                                    <div className="flex items-center gap-1.5 w-1/3">
                                        <label htmlFor="objective" className="font-medium w-2/5">Current Value</label>
                                        <input type="number" name="objective"
                                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-3/5"
                                               id="objective"/>
                                    </div>
                                    <div className="flex items-center gap-1.5 w-1/3">
                                        <label htmlFor="objective" className="font-medium w-2/5">Target Value</label>
                                        <input type="number" name="objective"
                                               className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-3/5"
                                               id="objective"/>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center w-full gap-3">
                                    <label htmlFor="objective" className="font-medium w-fit">Metrics</label>
                                    <input type="text" name="objective"
                                           className="focus:ring-1 px-3 py-1 outline-0 border-2 rounded-md focus:border-secondary focus:border-opacity-30 w-full"
                                           id="objective"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>
}

export default App

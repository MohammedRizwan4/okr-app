import {MdCancel} from "react-icons/md";
import {KeyResultType, ObjectiveType} from "../types/OKRtypes.ts";
import React, {useState} from "react";
import {initialKeyResult, initialKeyResults} from "../constants/constants.ts";
import {RiAddCircleFill} from "react-icons/ri";
import {Link, useNavigate} from "react-router";
import {v4 as uuidv4} from 'uuid';

const CreateOKRForm = () => {

    const [newObjective, setNewObjective] = useState<string>("");
    const [keyResults, setKeyResults] = useState<KeyResultType[]>(initialKeyResults);

    const navigate = useNavigate();

    const changeHandlerForObjective = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewObjective(e.target.value);
    }

    const changeHandlerForKeyResults = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const {name, value} = e.target;
        const cleanedValue = value.replace(/^0+/, '') || '0';
        const updatedKeyResults = [...keyResults];
        updatedKeyResults[index] = {
            ...updatedKeyResults[index],
            [name]: cleanedValue
        }
        console.log(updatedKeyResults)
        setKeyResults(updatedKeyResults);
    }

    const addNewKeyResult = () => {
        setKeyResults([...keyResults, initialKeyResult])
    }

    const handleDeleteKeyResult = (index: number) => {
        setKeyResults([...keyResults.slice(0, index), ...keyResults.slice(index + 1, keyResults.length)])
    }

    function handleCancelButton() {
        setNewObjective("");
        setKeyResults(initialKeyResults);
        navigate("/view-okrs");
    }

    function addNewObjective() {
        const objectiveToAdd: ObjectiveType = {
            id: uuidv4(),
            title: newObjective,
            keyResults
        }

        const options = {
            method: "POST",
            body: JSON.stringify(objectiveToAdd)
        }

        fetch("http://localhost:3000/objectives", options)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                navigate("/view-okrs");
            });
    }

    // Doubt: remove p-6
    return <div className="p-10 dark:bg-dark w-full h-full flex items-start justify-center">
        <div className=" max-w-3xl w-full mt-10 border dark:border-gray-700 rounded-lg px-6 pt-2 pb-6 dark:text-white">
            <div className="mt-3 mb-5 flex items-center justify-between">
                <h2 className="font-medium text-3xl ">Create Objective</h2>
                <Link to="/view-okrs" className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700"
                >Your OKRs
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor="newObjective">Enter Objective</label>
                <input type="text" value={newObjective} onChange={(e) => changeHandlerForObjective(e)}
                       placeholder="Type your objective here" id="newObjective"
                       name="newObjective"
                       className="px-4 py-2.5 outline-none border rounded-lg focus:ring-2 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-300 dark:border-gray-700  dark:bg-dark focus:transition-all focus:duration-300"/>
            </div>
            <div className="mt-4">
                <h2 className="font-medium text-base mb-4">Key Results</h2>
                {
                    keyResults.length === 0 && <div className="w-full flex items-center justify-center py-5">
                        <div className="flex flex-col cursor-pointer justify-center items-center" onClick={addNewKeyResult}>
                            <RiAddCircleFill className="text-4xl "/>
                            <p className="font-medium">Add Key Result</p>
                        </div>
                    </div>
                }
                {
                    keyResults.map((keyResult, index) => {
                        return (<div key={index} className="flex gap-4 items-center mb-5">
                            <MdCancel className="text-3xl cursor-pointer text-red-500 hover:text-red-700"
                                      onClick={() => handleDeleteKeyResult(index)}/>
                            <div className="grow px-4 py-3 border dark:border-gray-700 rounded-md">
                                <div className="flex flex-col gap-2 mb-3">
                                    <label className="text-base" htmlFor="title">Enter Key Result Title</label>
                                    <input type="text" onChange={(e) => changeHandlerForKeyResults(e, index)}
                                           value={keyResult.title} placeholder="Type your key result here"
                                           id="title" name="title"
                                           className="w-full px-4 py-2.5 outline-none border rounded-lg focus:ring-2 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-300 dark:border-gray-700  dark:bg-dark focus:transition-all focus:duration-300"/>
                                </div>
                                <div className="flex gap-5 mb-3">
                                    <div className="flex flex-col gap-2">
                                        <input type="number" onChange={(e) => changeHandlerForKeyResults(e, index)}
                                               value={keyResult.initialValue} placeholder="initial value"
                                               id="initialValue" name="initialValue"
                                               className="w-full px-4 py-2.5 outline-none border rounded-lg focus:ring-2 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-300 dark:border-gray-700  dark:bg-dark focus:transition-all focus:duration-300"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <input type="number" value={keyResult.currentValue} placeholder="current value"
                                               id="currentValue" name="currentValue"
                                               onChange={(e) => changeHandlerForKeyResults(e, index)}
                                               className="w-full px-4 py-2.5 outline-none border rounded-lg focus:ring-2 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-300 dark:border-gray-700  dark:bg-dark focus:transition-all focus:duration-300"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <input type="number" value={keyResult.targetValue} placeholder="target value"
                                               id="targetValue" name="targetValue"
                                               onChange={(e) => changeHandlerForKeyResults(e, index)}
                                               className="w-full px-4 py-2.5 outline-none border rounded-lg focus:ring-2 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-300 dark:border-gray-700  dark:bg-dark focus:transition-all focus:duration-300"/>
                                    </div>
                                </div>
                                <input type="text" value={keyResult.metric} placeholder="Type Metric here" id="metric"
                                       name="metric"
                                       onChange={(e) => changeHandlerForKeyResults(e, index)}
                                       className="w-full px-4 py-2.5 outline-none border rounded-lg focus:ring-2 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-300 dark:border-gray-700  dark:bg-dark focus:transition-all focus:duration-300"/>
                            </div>
                        </div>)
                    })
                }
            </div>
            {
                keyResults.length !== 0 &&
                <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700"
                        onClick={addNewKeyResult}>Add Key Result
                </button>
            }

            <div className="flex justify-end gap-5 mt-5">
                <button className="px-4 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-300"
                        onClick={handleCancelButton}>Cancel
                </button>
                <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700"
                        onClick={addNewObjective}>Create
                </button>
            </div>

        </div>
    </div>;
};

export default CreateOKRForm;

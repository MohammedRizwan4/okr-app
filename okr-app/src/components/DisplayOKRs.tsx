import {ObjectiveType} from "../types/OKRtypes.ts";
import React, {useEffect} from "react";
import {Link} from "react-router";
import {MdDelete} from "react-icons/md";

type DisplayOKRsPropType = {
    objectives: ObjectiveType[],
    setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[]>>
}

const DisplayOKRs = ({objectives, setObjectives}: DisplayOKRsPropType) => {


    useEffect(() => {
        fetch("http://localhost:3003/objectives")
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setObjectives(data);
            });
    }, [setObjectives])

    function handleDelete(objective: ObjectiveType, index: number) {
        const updatedObjectives = [...objectives];
        updatedObjectives.splice(index, 1);
        const options = {
            method: "DELETE"
        }
        fetch(`http://localhost:3000/objectives/${objective.id}`, options)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                console.log(updatedObjectives)
                setObjectives(updatedObjectives);
            });
    }

    return <div className="p-10 dark:bg-dark w-full h-full flex justify-center items-start">
        <div className="max-w-3xl w-full mt-10 border dark:border-gray-700 rounded-lg px-6 pt-2 pb-6 dark:text-white">
            <div className="mt-3 mb-5 flex items-center justify-between">
                <h2 className="font-medium text-3xl ">Your OKRs</h2>
                <Link to="/create-okr" className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700"
                >Create New OKr
                </Link>
            </div>
            {
                objectives.map((objective, index) => {

                    return (
                        <div key={index} className="rounded-lg overflow-hidden mt-5">
                            <table className="border dark:border-gray-700 w-full rounded-lg overflow-hidden ">
                                <thead className="text-left">
                                <tr>
                                    <th className="p-4 font-medium text-base bg-gray-100 dark:bg-gray-800  "
                                        colSpan={5}>
                                        <div className="flex items-center justify-between">
                                            <span>{objective.title}</span>
                                            <span onClick={() => handleDelete(objective, index)}
                                                  className="text-xl text-red-500 cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-full"><MdDelete/></span>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="border bg-gray-200 dark:bg-gray-900">
                                    <th className="px-4 py-2 text-left border dark:border-gray-700">Key Result Title
                                    </th>
                                    <th className="px-4 py-2 text-left border dark:border-gray-700">Initial Value</th>
                                    <th className="px-4 py-2 text-left border dark:border-gray-700">Current Value</th>
                                    <th className="px-4 py-2 text-left border dark:border-gray-700">Target Value</th>
                                    <th className="px-4 py-2 text-left border dark:border-gray-700">Metric</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    objective.keyResults.map((keyResult, index) => {
                                        return (<tr key={index} className="border-2 dark:border-gray-700 ">
                                            <td className="px-4 py-2 text-left border dark:border-gray-700">{keyResult.title}</td>
                                            <td className="px-4 py-2 text-left border dark:border-gray-700">{keyResult.initialValue}</td>
                                            <td className="px-4 py-2 text-left border dark:border-gray-700">{keyResult.currentValue}</td>
                                            <td className="px-4 py-2 text-left border dark:border-gray-700">{keyResult.targetValue}</td>
                                            <td className="px-4 py-2 text-left border dark:border-gray-700">{keyResult.metric}</td>
                                        </tr>)
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </div>
    </div>;
};

export default DisplayOKRs;

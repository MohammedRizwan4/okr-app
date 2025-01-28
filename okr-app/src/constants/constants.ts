import {KeyResultType, ObjectiveType, ObjectiveWithOutIdType} from "../types/OKRtypes.ts";

export const initialObjective: ObjectiveType = {
    "id": "4d081f6b-d9e3-4142-92ba-fc2c37d73f33",
    "title": "Abcs",
    "keyResults": [
        {
            "title": "sadsad",
            "initialValue": 5,
            "currentValue": 5,
            "targetValue": 35,
            "metric": "saasdsad"
        },
        {
            "title": "weqweqwe",
            "initialValue": 0,
            "currentValue": 32,
            "targetValue": 45,
            "metric": "sadbrtbrtbrt"
        }
    ]
}
//     {
//     id: "Create fron",
//     title: "",
//     keyResults: [
//         {
//             title: "",
//             initialValue: 0,
//             currentValue: 0,
//             targetValue: 0,
//             metric: ""
//         }
//     ]
// }

export const initialObjectiveWithoutId: ObjectiveWithOutIdType = {
    title: "",
    keyResults: [
        {
            title: "",
            initialValue: 0,
            currentValue: 0,
            targetValue: 0,
            metric: ""
        }
    ]
}

export const initialKeyResult: KeyResultType = {
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metric: ""
}

export const initialKeyResults: KeyResultType[] = [{
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metric: ""
}]
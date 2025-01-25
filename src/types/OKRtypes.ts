type ObjectiveType = {
    id: string,
    title: string,
    keyResults: KeyResultType[]
}

type KeyResultType = {
    title: string,
    initialValue: number,
    currentValue: number,
    targetValue: number,
    metric: string
}

type ObjectiveWithOutIdType = Omit<ObjectiveType, "id">

export type {
    ObjectiveWithOutIdType,
    ObjectiveType, KeyResultType
}
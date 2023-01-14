export type Task = {
    id: number
    title: string
    date: string
    completed: boolean
}

export type List = {
    tasks: Task[]
}
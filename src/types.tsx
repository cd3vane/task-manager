export type Task = {
    id: number
    title: string
    date: string
    description: string
    completed: boolean
}

export type List = {
    tasks: Task[]
}
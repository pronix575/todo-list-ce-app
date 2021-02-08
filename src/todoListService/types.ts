export interface TodoItem {
	id: number
	title: string
	text: string
	createdDate: Date
}

export type Todos = TodoItem[]

export interface Store {
	todos: Todos
}

export interface CreateTodoProps {
	title: string
	text: string
}

export interface OperateStatus<T> {
	next: T
	success: boolean
}

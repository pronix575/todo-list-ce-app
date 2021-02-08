import { CreateTodoProps, TodoItem, Todos } from "../types"

export function todoFactory(props: CreateTodoProps, todos: Todos): TodoItem {
	return {
		...props,
		id: (todos[todos.length - 1].id || 0) + 1,
		createdDate: new Date(),
	}
}

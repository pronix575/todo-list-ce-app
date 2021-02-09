import Flux from "@pronix/flux"
import { todoFactory } from "./utils/todoFactory"
import { CreateTodoProps, OperateStatus, Store, Todos } from "./types"

export class TodoListService extends Flux<Store> {
	constructor() {
		super({ todos: [] })
	}

	get todos() {
		return this.data.todos
	}

	set todos(todos: Todos) {
		this.dispatch(state => ({ ...state, todos }))
	}

	private status(status: boolean = true): OperateStatus<TodoListService> {
		return { next: this, success: status }
	}

	public addTodo(createTodoProps: CreateTodoProps) {
		this.todos = [...this.todos, todoFactory(createTodoProps, this.todos)]

		return this.status()
	}

	public removeTodo(id: number) {
		let success = false

		const filteredTodos = this.todos.filter(elem => {
			if (elem.id === id) {
				success = true

				return true
			}

			return false
		})

		this.todos = filteredTodos

		return this.status(success)
	}

	public getTodo(id: number) {
		return this.todos.find(elem => elem.id === id) || null
	}
}

export const TodoList = TodoListService

export function todoListFactory(): TodoListService {
	return new TodoListService()
}

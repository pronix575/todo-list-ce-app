import { Hyper } from "@pronix/hyper-flow/src/hyperFlow/Hyper/Hyper"
import { HyperContext } from "@pronix/hyper-flow/src/hyperFlow/Hyper/HyperContext"
import { TodoList } from "../TodoListService"

export class TodoApp {
	constructor(
		private todoList: TodoList,
		private cli: Hyper,
		private cliContexts: HyperContext[]
	) {}

	public start = this.cli.listen
}

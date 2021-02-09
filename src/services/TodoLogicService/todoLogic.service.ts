import { Hyper, HyperContext } from "@pronix/hyper-flow"
import { TodoListService } from "../TodoListService"
import { TodoLogicContexts } from "./types"

export class TodoLogicService {
	private readonly contexts: TodoLogicContexts = {
		createTodo: new HyperContext([]),
		removeTodo: new HyperContext([]),
		main: new HyperContext([]),
	}

	constructor(
		private readonly cli: Hyper,
		private readonly store: TodoListService
	) {}

	public mount() {}
}

export const TodoLogic = TodoLogicService

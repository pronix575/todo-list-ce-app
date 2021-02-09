import { Hyper, HyperContext } from "@pronix/hyper-flow"
import { TodoListService } from "../TodoListService"
import { TodoLogicService } from "../TodoLogicService"

export class TodoAppService {
	private readonly todoLogic: TodoLogicService = new TodoLogicService(
		this.cliClient,
		this.todoList,
	)

	constructor(
		private readonly todoList: TodoListService = new TodoListService(),
		private readonly cliClient: Hyper = new Hyper(),
		todoLogic?: TodoLogicService
	) {
		if (todoLogic) {
			this.todoLogic = todoLogic
		}
	}

	public start() {
		this.todoLogic.mount()
		this.cliClient.listen()
	}
}

export const TodoApp = TodoAppService

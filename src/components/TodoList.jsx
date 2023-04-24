import { ToDoItem } from "./ToDoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className="list">
			{todos.length === 0 &&
				"You are free today, there is nothing in your schedule!"}
			{todos.map((todo) => {
				return (
					<ToDoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
}

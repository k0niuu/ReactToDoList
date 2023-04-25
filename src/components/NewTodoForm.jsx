import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
	const [newItem, setNewItem] = useState("");

	function handlerSubmit(e) {
		e.preventDefault();
		if (newItem === "") return;

		onSubmit(newItem);

		setNewItem("");
	}

	return (
		<form onSubmit={handlerSubmit} className="new-item-form">
			<label id="title-label" htmlFor="item">
				What you need to do Today?
			</label>
			<div className="form-row">
				<input
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					type="text"
					id="item"
				/>
				<button className="btn">Add</button>
			</div>
		</form>
	);
}

import { Todo } from "../models/Todo";

export interface TodoContextType {
    todos: Todo[];
    addTodo(title: string): void;
    removeTodo(todo: Todo): void;
    toggle(todo: Todo): void;
}
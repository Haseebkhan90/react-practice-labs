// 👇 This defines the shape of a single todo item
export interface Todo {
  id: number;              // Unique ID for each todo
  text: string;            // What the user typed
  completed: boolean;      // Whether it's done
  dueDate: string;         // Optional: deadline or due date
}

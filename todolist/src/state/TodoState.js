export const todoState = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [
          {
              description:
                  "Add a todo, to get started, click to toggle completed status",
              completed: true,
              id: 1
          }
      ];

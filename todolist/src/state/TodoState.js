export const todoState = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [
          {
              description:
                  "To get started, add an item.",
              completed: true,
              id: 1
          }
      ];

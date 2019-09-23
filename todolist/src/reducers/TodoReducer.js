export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            localStorage.setItem(
                "todoData",
                JSON.stringify([
                    ...state,
                    {
                        description: action.payload,
                        id: new Date(),
                        completed: false
                    }
                ])
            );
            return JSON.parse(localStorage.getItem("todoData"));
        }
        case "TOGGLE_COMPLETE": {
            if (localStorage.getItem("todoData")) {
                const toggledArray = JSON.parse(
                    localStorage.getItem("todoData")
                );
                let position = null;

                const target = toggledArray.find((cur, index) => {
                    position = index;
                    return cur.id === action.id;
                });

                target.completed === false
                    ? (target.completed = true)
                    : (target.completed = false);

                toggledArray[position] = target;
                localStorage.setItem("todoData", JSON.stringify(toggledArray));
                return JSON.parse(localStorage.getItem("todoData"));
            } else {
                const toggledArray = [...state];
                let position = null;

                const target = toggledArray.find((cur, index) => {
                    position = index;
                    return cur.id === action.id;
                });

                target.completed === false
                    ? (target.completed = true)
                    : (target.completed = false);

                toggledArray[position] = target;

                return [...toggledArray];
            }
        }
        case "CLEAR_COMPLETED": {
            if (localStorage.getItem("todoData")) {
                const clearedArray = JSON.parse(localStorage.getItem("todoData")).filter(
                    cur => cur.completed === false
                );
                localStorage.setItem('todoData', JSON.stringify(clearedArray))
                return clearedArray
            } else {

            const clearedArray = [...state].filter(
                cur => cur.completed === false
            );
      
            localStorage.setItem('todoData', JSON.stringify(clearedArray))

            return [...clearedArray];

            }
        }
        case "FETCH_LOCAL": {
            return [...action.payload];
        }
        default:
            return [
                ...state,
                { id: 999, description: "souper duper", completed: false }
            ];
    }
};

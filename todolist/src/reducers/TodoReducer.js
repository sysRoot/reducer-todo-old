export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {

            return [...state, {description: action.payload, id: new Date(), completed: false}];
        }
        case "TOGGLE_COMPLETE": {
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
        case "CLEAR_COMPLETED":
        {
            const clearedArray = [...state].filter(cur => cur.completed === false);
            
            return [...clearedArray]
        }
        default: {
            return state;
        }
    }
};

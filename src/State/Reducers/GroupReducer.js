const GroupReducer = (state=GroupsDefaultState,action) => {
    switch (action.type) {
        case "ADD_NEW_GROUP":
            return {
                ...state,
            groups:[...state.groups,action.group,]
            }
  } 
}
    
const GroupsDefaultState = {
    groups: [
        {
            name: "Redux Practical",
            image: "Assets/Moonlight.jpg",
            desc:"This is First Group With Redux"
        },
        {
            name: "Redux Practical",
            image: "Assets/Moonlight.jpg",
            desc:"This is First Group"
        },
        {
            name: "Redux Practical",
            image: "Assets/Moonlight.jpg",
            desc:"This is First Group"
        },
    ]
}
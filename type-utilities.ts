type TODO = {
    title: string
    description: string
    completed: boolean
}

// Readonly

const todo: Readonly<TODO> = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
}

console.log(todo)

//todo.completed = true

function updateTODO(todo: TODO, fieldsToUpdate: Partial<TODO>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: TODO = updateTODO(todo, { completed: true })

console.log(todo2)

// Pick 5 - 1
type TodoPreview = Pick<TODO, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

// Omit 5 - 4
type TodoPreview2 = Omit<TODO, "description">

const todo4: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}



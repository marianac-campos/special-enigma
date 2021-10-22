// Readonly<T>
// Partial<T>
// Pick<T, K 'extends keyof T'>
// Omit<T, K 'extends keyof T'>

type ToDo = {
    title: string;
    description: string;
    completed: boolean;
}

const watch: Readonly<ToDo> = {
    title: "Attack on Titan",
    description: "Maratonar o anime novamente ate a temporada final", 
    completed: false,
};

console.log(watch);
// watch.completed = true;

function updateToDo(toDo: ToDo, fieldsToUpdate: Partial<ToDo>) {
    return {...toDo, ...fieldsToUpdate} // spread operator '...'
}

const doneWatch: ToDo = updateToDo(watch, {completed: true});
console.log(doneWatch);

console.log("===============================================");

type ToDoPreview = Pick<ToDo, "description" | "completed">

const play: ToDoPreview = {
    description: "Terminar a season no Diamond V",
    completed: false,
}

console.log(play);

console.log("===============================================");

type ToDoPreview2 = Omit<ToDo, "description">

const read: ToDoPreview2 = {
    title: "Ler 'A Transcedencia do Ego''",
    completed: true,
}

console.log(read);
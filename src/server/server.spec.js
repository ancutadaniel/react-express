import { addNewTask, updateTask } from "./server";

(async function myFunc() {
    await addNewTask({
            name: "my name",
            id: "123456"
    });

    await updateTask( {
        id: "123456",
        isComplete: false,
        name: "My task UPDATED!!!!"
    });
}) ();

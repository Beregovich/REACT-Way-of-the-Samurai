let state = {
    profilePage: {
        posts: [
            { id: 1, name: "Vasya", message: "I'am Vasya, Hi!" },
            { id: 2, name: "Petya", message: "I'am Petya, Hi!" },
            { id: 3, name: "Kolya", message: "I'am Kolya, Hi!" },
        ],

    },
    dialogsPage: {
        messages: [
            { id: 1, message: "First" },
            { id: 2, message: "Second" },
            { id: 3, message: "Third" },
        ],
        dialogs: [
            { id: 1, name: "Vasya" },
            { id: 2, name: "Petya" },
            { id: 3, name: "Kolya" },
            { id: 4, name: "Serezha" },
        ],
    }
}

export default state;
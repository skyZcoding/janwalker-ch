<script setup>
import { Shell } from '../services/Shell'

const shell = Shell();

const infos = [
    {
        name: 'contact',
        content: [
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Feel free to reach out to me through one of the following channels'
            },
            {
                user: '', desktop: '', directory: '', input: '------------------------------------------------------------------'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Github', directory: '', input: '            <a href="https://github.com/skyZcoding" target="_blank" class="font-mono border-b-2 border-white text-white">skyZcoding</a>'
            },
            {
                user: '', desktop: 'LinkedIn', directory: '', input: '          <a href="https://www.linkedin.com/in/jan-walker-jw/" target="_blank" class="font-mono border-b-2 border-white text-white">jan-walker-jw</a>'
            },
            {
                user: '', desktop: 'Email', directory: '', input: '             <a href="mailto:jan.walker.jw2@gmail.com" target="_blank" class="font-mono border-b-2 border-white text-white">jan.walker.jw2@gmail.com</a>'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
        ]
    },
    {
        name: 'education',
        content: [
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Education'
            },
            {
                user: '', desktop: '', directory: '', input: '------------------------------------------------------------------'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Informatiker Fachrichtung Applikationsentwicklug EFZ', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Gewerblich-industrielles Bildungszentrum Zug'
            },
            {
                user: '', desktop: '', directory: '', input: 'Aug. 2018 - Aug. 2022'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
        ]
    },
    {
        name: 'experience',
        content: [
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Experience'
            },
            {
                user: '', desktop: '', directory: '', input: '------------------------------------------------------------------'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Apprenticeship as a software developer', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'The apprenticeship is a common starting ground in switzerland to start as a software developer. During this period the apprentice will learn the basic to advance knowledge of the topics which are needed to be a software developer.'
            },
            {
                user: '', desktop: '', directory: '@Roche Diagnostics International AG', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Aug. 2018 - Aug. 2022'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Junior software developer', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Worked as a full stack developer on multiple project using mainly .NET. As well managed the user devices through the VMWare Workspace system.'
            },
            {
                user: '', desktop: '', directory: '@Roche Diagnostics International AG', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Aug. 2022 - Aug. 2023'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Teaching an intercompany course for apprentices about Blazor', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Taught the first year apprentices how to develope a web frontend with Blazor as a course instructor.'
            },
            {
                user: '', desktop: '', directory: '@Roche Diagnostics International AG', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Nov. 2022 - Dec. 2022'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Co-Owner', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Turning IT ideas into reality!'
            },
            {
                user: '', desktop: '', directory: '@Codelance GmbH', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Aug. 2023 - Present'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
        ]
    },
    {
        name: 'projects',
        content: [
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Projects'
            },
            {
                user: '', desktop: '', directory: '', input: '------------------------------------------------------------------'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'cobas® mobile solution', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Developed multiple service on the product during the time working at Roche diagnostics.'
            },
            {
                user: '', desktop: '', directory: '', input: '<a href="https://diagnostics.roche.com/global/en/products/instruments/cobas-mobile-solution-ins-6695.html" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Volunteering App', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Created in a team a working prototype app to unite the different volunteering companies with the actual volunteers. This was done at the Hackzurich 2022.'
            },
            {
                user: '', desktop: '', directory: '', input: '<a href="https://old.creatorspace.dev/kennybets/projects/hiFkMYxIClrrVQAj" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Home page', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: 'Created this home page to display the cv in a creative way.'
            },
            {
                user: '', desktop: '', directory: '', input: '<a href="https://github.com/skyZcoding/janwalker-ch" target="_blank" class="font-mono border-b-2 border-white text-white">Github</a>'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
            {
                user: '', desktop: 'Scrapsters', directory: '', input: ''
            },
            {
                user: '', desktop: '------------------------------------------------------------', directory: '', input: ''
            },
            {
                user: '', desktop: '', directory: '', input: "Created in a team a working prototype app to create a way how to teach sustainable shopping to children. This was done at the Hackzurich 2023 and won the 1 place at the Migros challenge."
            },
            {
                user: '', desktop: '', directory: '', input: '<a href="https://devpost.com/software/scrapsters" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>'
            },
            {
                user: '', desktop: '', directory: '', input: ''
            },
        ]
    }
];

const startup = [
    [{
        command: 'Booting...',
        color: '#ffffff'
    }],
    [{
        command: "Mounted: /home/cv/",
        color: '#67e8f9',
    }],
    [{
        command: 'Welcome to the home page of Jan Walker',
        color: '#facc15',
    }],
    [{
        command: '',
        color: '',
    }],
    [{
        command: "       _,    _   _    ,_",
        color: '#ffffff',
    }],
    [{
        command: "  .o888P     Y8o8Y     Y888o.",
        color: '#ffffff',
    }],
    [{
        command: " d88888      88888      88888b",
        color: '#ffffff',
    }],
    [{
        command: "d888888b_  _d88888b_  _d888888b",
        color: '#ffffff',
    }],
    [{
        command: "8888888888888888888888888888888",
        color: '#ffffff',
    }],
    [{
        command: "8888888888888888888888888888888",
        color: '#ffffff',
    }],
    [{
        command: 'YJGS8P"Y888P"Y888P"Y888P"Y8888P',
        color: '#ffffff',
    }],
    [{
        command: " Y888   '8'   Y8P   '8'   888Y",
        color: '#ffffff',
    }],
    [{
        command: "  '8o          V          o8'",
        color: '#ffffff',
    }],
    [{
        command: '    `                     `',
        color: '#ffffff',
    }],
    [{
        command: '',
        color: '',
    }],
    [{
        command: 'The home page serves as the base of the cv.',
        color: '#facc15',
    }],
];

const state = reactive({
    history: [],
    commandHistory: [],
    historyPosition: -1,
    historyPosition: -1,
    cursorPosition: 1,
    input: '',
    inputStart: '',
    inputEnd: '',
    inputCursor: '\xa0',
    directory: 'cv',
    directories: [
        {
            directory: "cv", active: true, subdirectories: [
                {
                    directory: "contact", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
                {
                    directory: "projects", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
                {
                    directory: "education", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
                {
                    directory: "experience", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
            ]
        },
    ]
});

const commandLinePrefix = {
    user: {
        command: 'Jan@', color: '#67e8f9'
    },
    desktop: {
        command: 'home-page:', color: '#67e8f9'
    },
    directory: '/home/'
};

const specialKeys = [
    3, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 33, 34, 35, 36, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 91, 221, 45, 244
];

function initialize() {
    addCommands(startup);
}

function addCommands(commands) {
    commands.forEach(function (command) {
        state.history.push(shell.writeLine(command))
    })
}

function keyDownHandler(e) {
    if (specialKeys.includes(e.keyCode)) {
        console.log(e.keyCode)
    }
    else if (e.keyCode == 8) {
        // Backspace

        if (state.cursorPosition == 1) {

        }
        else if (state.cursorPosition > 2 || state.input.length > 1) {
            state.input = state.input.slice(0, state.cursorPosition - 2) + state.input.slice(state.cursorPosition - 1, state.input.length)
            state.cursorPosition = state.cursorPosition - 1
        }
        else {
            state.input = ''
        }
    }
    else if (e.keyCode == 9) {
        // Tab
        function removeWhitespace(value, index, arr) {
            if (value == '') {
                return false;
            }

            return true;
        }

        let inputs = state.input.split('\xa0').filter(removeWhitespace)
        let lastElementInInput = inputs.length - 1
        let inputText = inputs[lastElementInInput]
        let re = new RegExp(inputText + '$')

        if (lastElementInInput < 2) {
            state.directories.forEach(function (directory) {
                if (directory.active) {
                    directory.subdirectories.every(function (d) {
                        if (d.directory.startsWith(inputText)) {
                            state.input = state.input.replace(re, d.directory) + '\xa0'
                            state.cursorPosition = state.cursorPosition - inputText.length + d.directory.length

                            return false
                        }

                        return true
                    })
                } else {
                    let fileName = 'info.txt'
                    if (fileName.startsWith(inputText)) {
                        state.input = state.input.replace(inputText, fileName) + '\xa0'
                        state.cursorPosition = state.cursorPosition - inputText.length + fileName.length
                    }
                }
            })
        }
    }
    else if (e.keyCode == 13) {
        // Enter
        createHistoryMessage()
        executeCommand()
        state.commandHistory.push(state.input)
        state.input = ''
        state.inputCursor = '\xa0'
        state.inputStart = ''
        state.inputEnd = ''
        state.cursorPosition = 1
        state.historyPosition = -1
    }
    else if (e.keyCode == 40) {
        // Down

        if (state.historyPosition != -1) {
            state.historyPosition = state.historyPosition - 1;
        }
    }
    else if (e.keyCode == 39) {
        // Right

        state.cursorPosition = state.cursorPosition + 1
    }
    else if (e.keyCode == 38) {
        // Up
        if (state.historyPosition != state.commandHistory.length - 1) {
            state.historyPosition = state.historyPosition + 1;
        }
    }
    else if (e.keyCode == 37) {
        // Left

        state.cursorPosition = state.cursorPosition - 1
    }
    else {
        let key = e.key

        if (e.keyCode == 32) {
            key = '\xa0'
        }

        if (state.cursorPosition - 1 == state.input.length) {
            state.input = state.input + key
            state.cursorPosition = state.cursorPosition + 1
        }
        else {
            state.input = state.input.slice(0, state.cursorPosition - 1) + key + state.input.slice(state.cursorPosition - 1, state.input.length)
            state.cursorPosition = state.cursorPosition + 1
        }
    }

    e.preventDefault()
}

function createHistoryMessage() {
    let commands = [
        [
            {
                command: commandLinePrefix.user.command, color: commandLinePrefix.user.color
            },
            {
                command: commandLinePrefix.desktop.command, color: commandLinePrefix.desktop.color
            },
            {
                command: commandLinePrefix.directory + state.directory, color: '#a78bfa'
            },
            {
                command: "$ " + state.input, color: '#ffffff'
            }
        ]
    ]

    addCommands(commands)
}

function executeCommand() {
    if (state.input.toLocaleLowerCase() == "help") {
        helpCommand()
    }
    else if (state.input.toLocaleLowerCase() == "clear") {
        clearCommand()
    }
    else if (state.input.toLocaleLowerCase().startsWith('cat\xa0')) {
        catCommand()
    }
    else if (state.input.toLocaleLowerCase() == "ls") {
        lsCommand()
    }
    else if (state.input.toLocaleLowerCase().startsWith('cd\xa0')) {
        cdCommand()
    }
    else {
        commandNotFound()
    }
}

function lsCommand() {
    let commands = [];
    let directory = shell.getActiveDirectory();

    if (directory.files) {
        directory.files.forEach(function (file) {
            commands.push([{ command: file.name, color: '#00a6ff' }])
        })
    }

    if (directory.subdirectories) {
        directory.subdirectories.forEach(function (directory) {
            commands.push([{ command: directory.name, color: '#a78bfa' }])
        })
    }

    addCommands(commands);
}

function cdCommand() {
    let commands = [];

    let command = state.input.split('\xa0')

    if (command[1] == '..') { 
        shell.moveUp();

        state.directory = shell.getActiveDirectory().name
        return;
    }

    let path = state.directory + '/' + command[1]

    let isSuccessful = shell.setActiveDirectory(path)
    console.log(isSuccessful)

    if (isSuccessful == false) {
        commands.push([{ command: '', color: '' }])
        commands.push([{ command: 'Could not find a directory called ' + "'" + command[1] + "'", color: '#ff0000' }])
        commands.push([{ command: '', color: '' }])
    }
    else {
        state.directory = path
    }

    addCommands(commands)
}

function catCommand() {
    let command = state.input.split('\xa0')
    let content = shell.getFileContent(command[1])

    if (content == null) {
        let commands = []

        commands.push([{ command: '', color: '' }])
        commands.push([{ command: 'Could not find a file called ' + "'" + command[1] + "'", color: '#ff0000' }])
        commands.push([{ command: '', color: '' }])

        addCommands(commands)
    }
    else {
        let commands = []

        content.forEach(function (line) {
            line.forEach(function (part) {
                commands.push([{ command: part.line, color: part.color }])
            })
        })

        addCommands(commands)
    }

}

function clearCommand() {
    state.history = []
    state.cursorPosition = 0
}

function commandNotFound() {
    let commands = [];

    commands.push([{ command: '', color: '' }])
    commands.push([{ command: 'Could not find a command called ' + "'" + state.input + "'", color: '#ff0000' }])
    commands.push([{ command: '', color: '' }]);

    addCommands(commands);
}

function helpCommand() {
    let commands = [];

    commands.push([{ command: '', color: '' }])
    commands.push([{ command: 'Commands:', color: '#00a6ff' }])
    commands.push([{ command: '------------------------------------------------------------------', color: '#00a6ff' }])
    commands.push([
        { command: 'ls', color: '#00a6ff' },
        { command: '     Lists all files and directory from the current directory', color: '#ffffff' }
    ])
    commands.push([
        { command: 'cd', color: '#00a6ff' },
        { command: '     Change the current directory', color: '#ffffff' }
    ])
    commands.push([
        { command: 'cat', color: '#00a6ff' },
        { command: '    Concatenate and display file content', color: '#ffffff' }])
    commands.push([
        { command: 'help', color: '#00a6ff' },
        { command: '   Display this help message', color: '#ffffff' }])
    commands.push([
        { command: 'clear', color: '#00a6ff' },
        { command: '  Clear the terminal screen', color: '#ffffff' }
    ])
    commands.push([{ command: '', color: '' }])

    addCommands(commands);

}

function createHistoryCommand(user, desktop, directory, input) {
    let message = [
        user, desktop, directory, input
    ]

    state.history.push(message)
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

onMounted(() => {
    initialize()
    const targetNode = document.getElementById("scroller");
    const config = { childList: true };
    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
                window.scrollTo(0, document.body.scrollHeight);
            }
        }
    };
    const observer = new MutationObserver(callback);

    observer.observe(targetNode, config);
    window.addEventListener('keydown', keyDownHandler)
});

watch(() => state.input, (value) => {
    if (value == '') {
        state.inputStart = ''
        state.inputCursor = '\xa0'
        state.inputEnd = ''
        state.cursorPosition = 1
    }
})

watch(() => state.historyPosition, (value) => {
    if (value == -1) {
        state.input = ''
    }
    else {
        state.input = state.commandHistory[state.commandHistory.length - value - 1]
        state.cursorPosition = state.input.length + 1
    }
})

watch(() => state.cursorPosition, (value) => {
    if (state.input.length == 0) {
        state.cursorPosition = 1
    }
    else if (value == 0) {
        state.cursorPosition = 1
    }
    else if (value != state.input.length + 1) {
        state.inputStart = state.input.slice(0, value - 1)
        state.inputCursor = state.input.slice(value - 1, value)
        state.inputEnd = state.input.slice(value, state.input.length)
    }
    else {
        state.inputStart = state.input
        state.inputCursor = '\xa0'
    }
})

onUnmounted(() => {
    window.removeEventListener('keydown', keyDownHandler)
});

definePageMeta({
    title: 'Home'
});
</script>


<template>
    <div class="h-screen">
        <div class="min-h-full bg-slate-800 p-2 flex flex-col justify-between overflow-y-visible">
            <main class="flex flex-col" id="scroller">
                <div class="flex flex-row h-fit min-h-[1.5rem]" v-for="(command, index) in state.history"
                    :key="'command' + index" v-html="command">
                </div>

                <div class="flex flex-row h-fit min-h-[1.5rem]">
                    <p class="font-mono" :style="'color: ' + commandLinePrefix.user.color">{{ commandLinePrefix.user.command }}</p>
                    <p class="font-mono" :style="'color: ' + commandLinePrefix.desktop.color">{{ commandLinePrefix.desktop.command }}</p>
                    <p class="font-mono text-violet-400">{{ commandLinePrefix.directory + state.directory }}</p>
                    <p class="font-mono text-white">$&nbsp</p>
                    <p class="font-mono text-white">{{ state.inputStart }}</p>
                    <p class="font-mono text-white animate-pulse bg-violet-500">{{ state.inputCursor }}</p>
                    <p class="font-mono text-white">{{ state.inputEnd }}</p>
                </div>
            </main>
            <footer class="font-mono text-white h-6 m-1 mt-5" id="copyright">
                &#169 By Jan Walker
            </footer>
        </div>

    </div>
</template>
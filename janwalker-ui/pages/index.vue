<script setup>
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
                user: '', desktop: 'Github', directory: '', input: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="https://github.com/skyZcoding" target="_blank" class="font-mono border-b-2 border-white text-white">skyZcoding</a>'
            },
            {
                user: '', desktop: 'LinkedIn', directory: '', input: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="https://www.linkedin.com/in/jan-walker-jw/" target="_blank" class="font-mono border-b-2 border-white text-white">jan-walker-jw</a>'
            },
            {
                user: '', desktop: 'Email', directory: '', input: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="mailto:jan.walker.jw2@gmail.com" target="_blank" class="font-mono border-b-2 border-white text-white">jan.walker.jw2@gmail.com</a>'
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
    {
        command: 'Booting...',
        color: 'text-white'
    },
    {
        command: "Mounted: /home/cv/",
        color: 'text-cyan-300',
    },
    {
        command: 'Welcome to the home page of Jan Walker',
        color: 'text-yellow-400',
    },
    {
        command: '',
        color: '',
    },
    {
        command: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0_,\xa0\xa0\xa0\xa0_\xa0\xa0\xa0_\xa0\xa0\xa0\xa0,_",
        color: 'text-white',
    },
    {
        command: "\xa0\xa0.o888P\xa0\xa0\xa0\xa0\xa0Y8o8Y\xa0\xa0\xa0\xa0\xa0Y888o.",
        color: 'text-white',
    },
    {
        command: "\xa0d88888\xa0\xa0\xa0\xa0\xa0\xa088888\xa0\xa0\xa0\xa0\xa0\xa088888b",
        color: 'text-white',
    },
    {
        command: "d888888b_\xa0\xa0_d88888b_\xa0\xa0_d888888b",
        color: 'text-white',
    },
    {
        command: "8888888888888888888888888888888",
        color: 'text-white',
    },
    {
        command: "8888888888888888888888888888888",
        color: 'text-white',
    },
    {
        command: 'YJGS8P"Y888P"Y888P"Y888P"Y8888P',
        color: 'text-white',
    },
    {
        command: "\xa0Y888\xa0\xa0\xa0'8'\xa0\xa0\xa0Y8P\xa0\xa0\xa0'8'\xa0\xa0\xa0888Y",
        color: 'text-white',
    },
    {
        command: "\xa0\xa0'8o\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0V\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0o8'",
        color: 'text-white',
    },
    {
        command: '\xa0\xa0\xa0\xa0`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`',
        color: 'text-white',
    },
    {
        command: '',
        color: '',
    },
    {
        command: 'The home page serves as the base of the cv.',
        color: 'text-yellow-400',
    },
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
    user: 'Jan@',
    desktop: 'home-page:',
    directory: '/home/'
};


const user = 'Jan@';
const desktop = 'home-page:';
const specialKeys = [
    3, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 33, 34, 35, 36, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 91, 221, 45, 244
];

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
    state.history.push([commandLinePrefix.user, commandLinePrefix.desktop, commandLinePrefix.directory + state.directory, state.input])
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
    state.directories.forEach(function (root) {
        if (root.active) {
            root.subdirectories.forEach(function (directory) {
                createHistoryCommand('', '', directory.directory, '')
            })
        } else {
            root.subdirectories.forEach(function (directory) {
            if (directory.active) {
                directory.files.forEach(function (file) {
                    createHistoryCommand('', '', '', file.name)
                })
                }
            })
        }

    })
}

function cdCommand() {
    let command = state.input.split('\xa0')
    let directoryList = state.directory.split('/')

    if (directoryList.length == 3) {
    if (command[1] == '..') {
        state.directories.forEach(function (directory) {
        directory.active = true
        directory.subdirectories.forEach(function (d) {
            if (d.active) {
            d.active = false
            }
        })
        })
        state.directory = directoryList[0]
    } else {
        createHistoryCommand('', '', '', 'Unable to find the directory.')
    }
    } else {
    if (command[1] == '..') {
        createHistoryCommand('', '', '', 'Unable to find the directory.')
    } else {
        state.directories.forEach(function (directory) {
        directory.subdirectories.forEach(function (d) {
            if (d.directory == command[1]) {
            state.directory = state.directory + '/' + d.directory + '/'
            d.active = true
            directory.active = false
            }
        })
        })
    }
    }
}

function catCommand() {
    let command = state.input.split('\xa0')
    let folders = state.directory.split('/')

    if (folders.length == 3 && command[1] == 'info.txt') {
        infos.forEach(info => {
        if (info.name == folders[1]) {
            info.content.forEach(content => {
                createHistoryCommand(content.user, content.desktop, content.directory, content.input)
                });
            }
        })
    } else {
        createHistoryCommand('', '', '', 'Could not find a file called ' + "'" + command[1] + "'")
    }
}

function clearCommand() {
    state.history = []
    state.cursorPosition = 0
}

function commandNotFound() {
    createHistoryCommand('', '', '', '')
    createHistoryCommand('', '', '', "Could\xa0not\xa0find\xa0any\xa0command\xa0called\xa0'" + state.input + "'.")
    createHistoryCommand('', '', '', "Use\xa0'help'\xa0to\xa0view\xa0all\xa0commands.")
    createHistoryCommand('', '', '', '')
}

function helpCommand() {
    createHistoryCommand('', '', '', '')
    createHistoryCommand('', '', 'HELP', '\xa0\xa0\xa0\xa0\xa0Shows all commands with a short description')
    createHistoryCommand('', '', 'CAT', '\xa0\xa0\xa0\xa0\xa0\xa0Displays the file')
    createHistoryCommand('', '', 'CLEAR', '\xa0\xa0\xa0\xa0Clears the history of the console')
    createHistoryCommand('', '', 'CD', '\xa0\xa0\xa0\xa0\xa0\xa0\xa0Moves in or out of the directory')
    createHistoryCommand('', '', 'LS', '\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows all files and the directories in the directory')
    createHistoryCommand('', '', '', '')
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
</script>


<template>
  <div class="h-screen">
    <div class="min-h-full bg-slate-800 p-2 flex flex-col justify-between overflow-y-visible">
      <main class="flex flex-col" id="scroller">
        <div class="font-mono h-fit min-h-[1.5rem]" :class="message.color" v-for="(message, index) in startup" :key="'message' + index">
          {{ message.command }}
        </div>
        <div class="flex flex-row h-fit min-h-[1.5rem]" v-for="(command, index) in state.history" :key="'command' + index">
          <p class="font-mono text-cyan-300">{{ command[0] }}{{ command[1] }}</p>
          <p class="font-mono text-violet-500">{{ command[2] }}</p>
          <p class="font-mono text-white" v-if="command[0]">$&nbsp</p>
          <p class="font-mono h-fit text-white" v-html="command[3]"></p>
        </div>
        <div class="flex flex-row h-fit min-h-[1.5rem]">
          <p class="font-mono text-cyan-300">{{ commandLinePrefix.user }}{{ commandLinePrefix.desktop }}</p>
          <p class="font-mono text-violet-500">{{ commandLinePrefix.directory + state.directory }}</p>
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
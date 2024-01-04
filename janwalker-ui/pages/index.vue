<template>
  <div class="h-screen">
    <div class="min-h-full bg-slate-800 p-2 flex flex-col justify-between overflow-y-visible">
      <main class="flex flex-col" id="scroller">
        <div class="font-mono h-fit min-h-[1.5rem]" :class="message.color" v-for="(message, index) in startup" :key="'message' + index">
          {{ message.command }}
        </div>
        <div class="flex flex-row h-fit min-h-[1.5rem]" v-for="(command, index) in history" :key="'command' + index">
          <p class="font-mono text-cyan-300">{{ command[0] }}{{ command[1] }}</p>
          <p class="font-mono text-violet-500">{{ command[2] }}</p>
          <p class="font-mono text-white" v-if="command[0]">$&nbsp</p>
          <p class="font-mono h-fit text-white" v-html="command[3]"></p>
        </div>
        <div class="flex flex-row h-fit min-h-[1.5rem]">
          <p class="font-mono text-cyan-300">{{ user }}{{ desktop }}</p>
          <p class="font-mono text-violet-500">{{ directory }}</p>
          <p class="font-mono text-white">$&nbsp</p>
          <p class="font-mono text-white">{{ inputStart }}</p>
          <p class="font-mono text-white animate-pulse bg-violet-500">{{ inputCursor }}</p>
          <p class="font-mono text-white">{{ inputEnd }}</p>
        </div>
      </main>
      <footer class="font-mono text-white h-6 m-1 mt-5" id="copyright">
        &#169 By Jan Walker
      </footer>
    </div>

  </div>
</template>


<script lang="js">
export default {
  name: 'IndexPage',
  data() {
    return {
      infos: [
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
              user: '', desktop: '', directory: '', input: 'Turning it ideas into reality!'
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
      ],
      startup: [
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
          command: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_,'|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_.-''``-...___..--';)",
          color: 'text-cyan-500',
        },
        {
          command: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/_\xa0\'.\xa0\xa0\xa0\xa0\xa0\xa0__..-'\xa0,\xa0\xa0\xa0\xa0\xa0\xa0,--...--'''",
          color: 'text-cyan-500',
        },
        {
          command: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<\ \xa0\xa0\xa0\xa0.`--'''\xa0\xa0\xa0\xa0\xa0\xa0\xa0`\xa0\xa0\xa0\xa0\xa0/'",
          color: 'text-cyan-500',
        },
        {
          command: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`-';'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0;\xa0\xa0\xa0;\xa0;",
          color: 'text-cyan-500',
        },
        {
          command: "\xa0\xa0\xa0\xa0\xa0__...--''\xa0\xa0\xa0\xa0\xa0___...--_..'\xa0\xa0.;.'",
          color: 'text-cyan-500',
        },
        {
          command: "\xa0\xa0\xa0\xa0(,__....----'''\xa0\xa0\xa0\xa0\xa0\xa0\xa0(,..--''",
          color: 'text-cyan-500',
        },
        {
          command: '',
          color: '',
        },
        {
          command: 'The home page serves as the base of the cv.',
          color: 'text-yellow-400',
        },
      ],
      history: [

      ],
      commandHistory: [

      ],
      historyPosition: -1,
      cursorPosition: 1,
      input: '',
      inputStart: '',
      inputEnd: '',
      inputCursor: '\xa0',
      user: 'Jan@',
      desktop: 'home-page:',
      directory: "cv",
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
      ],
      specialKeys: [
        3, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 33, 34, 35, 36, 112, 113, 114, 115,
        116, 117, 118, 119, 120, 121, 122, 123, 91, 221, 45, 244
      ]
    }
  },
  watch: {
    input: function (value) {
      if (value == '') {
        this.inputStart = ''
        this.inputCursor = '\xa0'
        this.inputEnd = ''
        this.cursorPosition = 1
      }
    },
    cursorPosition: function (value) {
      if (this.input.length == 0) {
        this.cursorPosition = 1
      }
      else if (value == 0) {
        this.cursorPosition = 1
      }
      else if (value != this.input.length + 1) {
        this.inputStart = this.input.slice(0, value - 1)
        this.inputCursor = this.input.slice(value - 1, value)
        this.inputEnd = this.input.slice(value, this.input.length)
      }
      else {
        this.inputStart = this.input
        this.inputCursor = '\xa0'
      }
    },
    historyPosition: function (value) {
      if (value == -1) {
        this.input = ''
      }
      else {
        this.input = this.commandHistory[this.commandHistory.length - value - 1]
        this.cursorPosition = this.input.length + 1
      }
    }
  },
  methods: {
    keyDownHandler(e) {
      if (this.specialKeys.includes(e.keyCode)) {
        console.log(e.keyCode)
      }
      else if (e.keyCode == 8) {
        // Backspace

        if (this.cursorPosition == 1) {

        }
        else if (this.cursorPosition > 2 || this.input.length > 1) {
          this.input = this.input.slice(0, this.cursorPosition - 2) + this.input.slice(this.cursorPosition - 1, this.input.length)
          this.cursorPosition = this.cursorPosition - 1
        }
        else {
          this.input = ''
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
        
        let that = this
        let inputs = this.input.split('\xa0').filter(removeWhitespace)
        let lastElementInInput = inputs.length - 1
        let inputText = inputs[lastElementInInput]
        let re = new RegExp(inputText + '$')

        if (lastElementInInput < 2) {
          this.directories.forEach(function (directory) {
            if (directory.active) {
              directory.subdirectories.every(function (d) {
                if (d.directory.startsWith(inputText)) {
                  that.input = that.input.replace(re, d.directory) + '\xa0'
                  that.cursorPosition = that.cursorPosition - inputText.length + d.directory.length

                  return false
                }

                return true
              })
            } else {
              let fileName = 'info.txt'
              if (fileName.startsWith(inputText)) {
                that.input = that.input.replace(inputText, fileName) + '\xa0'
                that.cursorPosition = that.cursorPosition - inputText.length + fileName.length
              }
            }
          })
        }
      }
      else if (e.keyCode == 13) {
        // Enter
        this.createHistoryMessage()
        this.executeCommand()
        this.commandHistory.push(this.input)
        this.input = ''
        this.inputCursor = '\xa0'
        this.inputStart = ''
        this.inputEnd = ''
        this.cursorPosition = 1
        this.historyPosition = -1
      }
      else if (e.keyCode == 40) {
        // Down

        if (this.historyPosition != -1) {
          this.historyPosition = this.historyPosition - 1;
        }
      }
      else if (e.keyCode == 39) {
        // Right

        this.cursorPosition = this.cursorPosition + 1
      }
      else if (e.keyCode == 38) {
        // Up
        if (this.historyPosition != this.commandHistory.length - 1) {
          this.historyPosition = this.historyPosition + 1;
        }
      }
      else if (e.keyCode == 37) {
        // Left

        this.cursorPosition = this.cursorPosition - 1
      }
      else {
        let key = e.key

        if (e.keyCode == 32) {
          key = '\xa0'
        }

        if (this.cursorPosition - 1 == this.input.length) {
          this.input = this.input + key
          this.cursorPosition = this.cursorPosition + 1
        }
        else {
          this.input = this.input.slice(0, this.cursorPosition - 1) + key + this.input.slice(this.cursorPosition - 1, this.input.length)
          this.cursorPosition = this.cursorPosition + 1
        }
      }

      e.preventDefault()
    },
    createHistoryMessage() {
      this.createHistoryCommand(this.user, this.desktop, this.directory, this.input)
    },
    executeCommand() {
      if (this.input.toLocaleLowerCase() == "help") {
        this.helpCommand()
      }
      else if (this.input.toLocaleLowerCase() == "clear") {
        this.clearCommand()
      }
      else if (this.input.toLocaleLowerCase().startsWith('cat\xa0')) {
        this.catCommand()
      }
      else if (this.input.toLocaleLowerCase() == "ls") {
        this.lsCommand()
      }
      else if (this.input.toLocaleLowerCase().startsWith('cd\xa0')) {
        this.cdCommand()
      }
      else {
        this.commandNotFound()
      }
    },
    lsCommand() {
      let that = this

      this.directories.forEach(function (root) {
        if (root.active) {
          root.subdirectories.forEach(function (directory) {
            that.createHistoryCommand('', '', directory.directory, '')
          })
        } else {
          root.subdirectories.forEach(function (directory) {
            if (directory.active) {
              directory.files.forEach(function (file) {
                that.createHistoryCommand('', '', '', file.name)
              })
            }
          })
        }

      })
    },
    cdCommand() {
      let command = this.input.split('\xa0')
      let directoryList = this.directory.split('/')
      let that = this

      if (directoryList.length == 3) {
        if (command[1] == '..') {
          this.directories.forEach(function (directory) {
            directory.active = true
            directory.subdirectories.forEach(function (d) {
              if (d.active) {
                d.active = false
              }
            })
          })
          this.directory = directoryList[0]
        } else {
          that.createHistoryCommand('', '', '', 'Unable to find the directory.')
        }
      } else {
        if (command[1] == '..') {
          that.createHistoryCommand('', '', '', 'Unable to find the directory.')
        } else {
          this.directories.forEach(function (directory) {
            directory.subdirectories.forEach(function (d) {
              if (d.directory == command[1]) {
                that.directory = that.directory + '/' + d.directory + '/'
                d.active = true
                directory.active = false
              }
            })
          })
        }
      }
    },
    catCommand() {
      let command = this.input.split('\xa0')
      let folders = this.directory.split('/')
      let that = this

      if (folders.length == 3 && command[1] == 'info.txt') {
        this.infos.forEach(info => {
          if (info.name == folders[1]) {
            info.content.forEach(content => {
              that.createHistoryCommand(content.user, content.desktop, content.directory, content.input)
            });
          }
        })
      } else {
        this.createHistoryCommand('', '', '', 'Could not find a file called ' + "'" + command[1] + "'")
      }
    },
    clearCommand() {
      this.history = []
      this.cursorPosition = 0
    },
    commandNotFound() {
      this.createHistoryCommand('', '', '', '')
      this.createHistoryCommand('', '', '', "Could\xa0not\xa0find\xa0any\xa0command\xa0called\xa0'" + this.input + "'.")
      this.createHistoryCommand('', '', '', "Use\xa0'help'\xa0to\xa0view\xa0all\xa0commands.")
      this.createHistoryCommand('', '', '', '')
    },
    helpCommand() {
      this.createHistoryCommand('', '', '', '')
      this.createHistoryCommand('', '', 'HELP', '\xa0\xa0\xa0\xa0\xa0Shows all commands with a short description')
      this.createHistoryCommand('', '', 'CAT', '\xa0\xa0\xa0\xa0\xa0\xa0Displays the file')
      this.createHistoryCommand('', '', 'CLEAR', '\xa0\xa0\xa0\xa0Clears the history of the console')
      this.createHistoryCommand('', '', 'CD', '\xa0\xa0\xa0\xa0\xa0\xa0\xa0Moves in or out of the directory')
      this.createHistoryCommand('', '', 'LS', '\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows all files and the directories in the directory')
      this.createHistoryCommand('', '', '', '')
    },
    createHistoryCommand(user, desktop, directory, input) {
      let message = [
        user, desktop, directory, input
      ]

      this.history.push(message)
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
  },
  created() {
    if (process.client) {
      if (this.isMobile()) {
        this.$router.push('/mobile')
      } 
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

      window.addEventListener('keydown', this.keyDownHandler)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('keydown', this.keyDownHandler)
    }
  },
}
</script>
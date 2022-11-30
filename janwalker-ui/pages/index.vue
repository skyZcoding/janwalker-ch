<template>
  <div class="h-screen">
    <div class="min-h-full bg-slate-800 p-2 flex flex-col justify-between">
      <div class="flex flex-col" id="scroller" style="overflow-anchor:none">
        <div class="font-mono" :class="message.color" v-for="(message, index) in startup" :key="'message'+index">
          {{ message.command }}
        </div>
        <div class="flex flex-row h-6" v-for="(command, index) in history" :key="'command' + index">
          <p class="font-mono text-cyan-300">{{command[0]}}{{command[1]}}</p>
          <p class="font-mono text-violet-500">{{command[2]}}</p>
          <p class="font-mono text-white" v-if="command[0]">$&nbsp</p>
          <p class="font-mono text-white">{{command[3]}}</p>
        </div>
        <div class="flex flex-row h-6" id="consoleInput" style="overflow-anchor:auto">
          <p class="font-mono text-cyan-300">{{user}}{{desktop}}</p>
          <p class="font-mono text-violet-500">{{directory}}</p>
          <p class="font-mono text-white">$&nbsp</p>
          <p class="font-mono text-white">{{inputStart}}</p>
          <p class="font-mono text-white animate-pulse bg-violet-500">{{inputCursor}}</p>
          <p class="font-mono text-white">{{inputEnd}}</p>
        </div>
      </div>
      <div class="font-family-mono text-white m-1 mt-5" id="copyright">
        &#169 By Jan Walker
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
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
            ]},
            {
              directory: "projects", active: false, files: [
                { name: "info.txt" }
            ]},
            {
              directory: "education", active: false, files: [
              { name: "info.txt" } 
            ]},
            {
              directory: "experience", active: false, files: [
              { name: "info.txt" }
            ]},
        ]},
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
      if (value == '')
      {
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
        this.inputCursor = this.input.slice(value - 1, value )
        this.inputEnd = this.input.slice(value, this.input.length)
      }
      else {
        this.inputStart = this.input
        this.inputCursor = '\xa0'
      }
    }
  },
  methods: {
    keyDownHandler(e) {
      if (this.specialKeys.includes(e.keyCode))
      {
        console.log(e.keyCode)
      }
      else if (e.keyCode == 8) {
        // Backspace

        if (this.cursorPosition == 1) {
          
        }
        else if (this.cursorPosition > 2 || this.input.length > 1)
        {
          this.input = this.input.slice(0, this.cursorPosition - 2) + this.input.slice(this.cursorPosition - 1, this.input.length)
          this.cursorPosition = this.cursorPosition - 1
        }
        else {
          this.input = ''
        }
      }
      else if (e.keyCode == 13) {
        // Enter
        this.createHistoryMessage()
        this.executeCommand()
        this.input = ''
        this.inputCursor = '\xa0'
        this.inputStart = ''
        this.inputEnd = ''
        this.cursorPosition = 1

        let element = document.getElementById('copyright')
        element.scrollIntoView(false)
      }
      else if (e.keyCode == 40) {
        // Down
      } 
      else if (e.keyCode == 39) {
        // Right

        this.cursorPosition = this.cursorPosition + 1
      }
      else if (e.keyCode == 38) {
        // Up
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
      else if (this.input.toLocaleLowerCase().startsWith('view\xa0')) {
        this.viewCommand()
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

      if (command[1] == '..' && directoryList.length == 3) {
        this.directories.forEach(function (directory) {
          if (directory.directory == directoryList[0]) {
            directory.active = true
            directory.subdirectories.forEach(function (d) {
              if (d.active) {
                d.active = false
              }
            })
          }
        })
        this.directory = directoryList[0]
      } else {
        this.directories.forEach(function (directory) {
          if (directory.directory == directoryList[0]) {
            directory.active = false
            directory.subdirectories.forEach(function (d) {
              if (d.directory == command[1]) {
                that.directory = that.directory + '/' + d.directory + '/'
                d.active = true
              }
            })
          }
        })
      }
    },
    viewCommand() {
      let command = this.input.split('\xa0')
      let folders = this.directory.split('/')

      if (folders.length == 3 && command[1] == 'info.txt') {
        this.$router.push('/' + folders[1])
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
      this.createHistoryCommand('', '', 'VIEW', '\xa0\xa0\xa0\xa0\xa0Displays the page')
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
    }
  },
  created() {
    window.addEventListener('keydown', this.keyDownHandler)
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDownHandler)
  },
}
</script>

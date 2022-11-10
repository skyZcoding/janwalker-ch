<template>
  <div class="h-screen">
    <div class="h-full bg-slate-800 p-2">
      <div class="flex flex-col overflow-x-visible">
        <div class="font-mono h-6" :class="message.color" v-for="(message, index) in startup" :key="index">
          {{ message.command }}
        </div>
        <div class="flex flex-row" v-for="(command, index) in history" :key="index">
          <p class="font-mono text-cyan-300 h-6">{{command[0]}}{{command[1]}}</p>
          <p class="font-mono text-violet-500 h-6">{{command[2]}}</p>
          <p class="font-mono text-white h-6" v-if="command[0]">$&nbsp</p>
          <p class="font-mono text-white h-6">{{command[3]}}</p>
        </div>
        <div class="flex flex-row">
          <p class="font-mono text-cyan-300 h-6">{{user}}{{desktop}}</p>
          <p class="font-mono text-violet-500 h-6">{{directory}}</p>
          <p class="font-mono text-white h-6">$&nbsp</p>
          <p class="font-mono text-white h-6">{{input}}</p>
        </div>
        
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
          command: "Mounted: home-page",
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
      input: '',
      user: 'Jan@',
      desktop: 'home-page:',
      directory: "cv",
      specialKeys: [
        3, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 33, 34, 35, 36, 112, 113, 114, 115,
        116, 117, 118, 119, 120, 121, 122, 123, 91, 221, 45, 244
      ]
    }
  },
  methods: {
    keyDownHandler(e) {
      if (this.specialKeys.includes(e.keyCode))
      {
        console.log(e.keyCode)
      }
      else if (e.keyCode == 8) {
        this.input = this.input.slice(0, -1)
      }
      else if (e.keyCode == 13) {
        this.createHistoryMessage()
        this.excuteCommand()
        this.input = ''
      } 
      else {
        this.input = this.input + e.key
        console.log(e.keyCode)
      }
    },
    createHistoryMessage() {
      let message = [
      ]

      message.push(this.user)
      message.push(this.desktop)
      message.push(this.directory)
      message.push(this.input)
      
      this.history.push(message) 
    },
    excuteCommand() { 
      if (this.input.toLocaleLowerCase() == "help") {
        this.helpCommand()
      }
      else {
        this.commandNotFound()
      }
    },
    commandNotFound() { 
      let message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('')

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push("Could\xa0not\xa0find\xa0any\xa0command\xa0called\xa0'" + this.input + "'.")

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push("Use\xa0'help'\xa0to\xa0view\xa0all\xa0commands.")

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('')

      this.history.push(message)
    },
    helpCommand() {
      let message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('')

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('HELP\xa0\xa0\xa0\xa0\xa0Shows all commands with a short description')

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('VIEW\xa0\xa0\xa0\xa0\xa0Displays the page')

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('CD\xa0\xa0\xa0\xa0\xa0\xa0\xa0Moves in or out of the directory')

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('LS\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows all files and the directories in the directory')

      this.history.push(message)
      message = [
      ]

      message.push('')
      message.push('')
      message.push('')
      message.push('')

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

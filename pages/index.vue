<script setup lang="ts">
import type CommandLine from "#build/services/types/CommandLine";
import type Directory from "#build/services/types/Directory";
import type ShellCommandPart from "#build/services/types/ShellCommandPart";
import { Shell } from "../services/Shell";

const shell: CommandLine = Shell();

const startup: Array<ShellCommandPart[]> = [
  [
    {
      command: "Booting...",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "Mounted: /home/cv/",
      color: "#67e8f9",
    },
  ],
  [
    {
      command: "Welcome to the home page of Jan Walker",
      color: "#facc15",
    },
  ],
  [
    {
      command: "",
      color: "",
    },
  ],
  [
    {
      command: "       _,    _   _    ,_",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "  .o888P     Y8o8Y     Y888o.",
      color: "#ffffff",
    },
  ],
  [
    {
      command: " d88888      88888      88888b",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "d888888b_  _d88888b_  _d888888b",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "8888888888888888888888888888888",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "8888888888888888888888888888888",
      color: "#ffffff",
    },
  ],
  [
    {
      command: 'YJGS8P"Y888P"Y888P"Y888P"Y8888P',
      color: "#ffffff",
    },
  ],
  [
    {
      command: " Y888   '8'   Y8P   '8'   888Y",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "  '8o          V          o8'",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "    `                     `",
      color: "#ffffff",
    },
  ],
  [
    {
      command: "",
      color: "",
    },
  ],
  [
    {
      command: "The home page serves as the base of the cv.",
      color: "#facc15",
    },
  ],
];

const state = reactive({
  history: [],
  commandHistory: [],
  historyPosition: -1,
  cursorPosition: 1,
  input: "",
  inputStart: "",
  inputEnd: "",
  inputCursor: "\xa0",
  directory: "cv",
  directories: [
    {
      directory: "cv",
      active: true,
      subdirectories: [
        {
          directory: "contact",
          active: false,
          files: [{ name: "info.txt" }],
        },
        {
          directory: "projects",
          active: false,
          files: [{ name: "info.txt" }],
        },
        {
          directory: "education",
          active: false,
          files: [{ name: "info.txt" }],
        },
        {
          directory: "experience",
          active: false,
          files: [{ name: "info.txt" }],
        },
      ],
    },
  ],
});

const commandLinePrefix = {
  user: {
    command: "Jan",
    color: "#67e8f9",
  },
  desktop: {
    command: "home-page:",
    color: "#67e8f9",
  },
  directory: "/home/",
};

const specialKeys = [
  3, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34,
  35, 36, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 91, 221,
  45, 244,
];

function initialize(): void {
  addCommands(startup);
}

function addCommands(commands: Array<ShellCommandPart[]>): void {
  commands.forEach(function (command: ShellCommandPart[]): void {
    state.history.push(shell.writeLine(command));
  });
}

function keyDownHandler(e): void {
  if (specialKeys.includes(e.keyCode)) {
    console.log(e.keyCode);
  } else if (e.keyCode == 8) {
    // Backspace

    if (state.cursorPosition == 1) {
      return;
    } else if (state.cursorPosition > 2 || state.input.length > 1) {
      state.input =
        state.input.slice(0, state.cursorPosition - 2) +
        state.input.slice(state.cursorPosition - 1, state.input.length);
      state.cursorPosition = state.cursorPosition - 1;
    } else {
      state.input = "";
    }
  } else if (e.keyCode == 9) {
    // Tab
    function removeWhitespace(value: string): boolean {
      if (value == "") {
        return false;
      }

      return true;
    }

    let inputs = state.input.split("\xa0").filter(removeWhitespace);
    let lastElementInInput = inputs.length - 1;
    let inputText = inputs[lastElementInInput];
    let re = new RegExp(inputText + "$");

    let directory: Directory = shell.getActiveDirectory();

    if (directory.subdirectories) {
      directory.subdirectories.forEach(function (subdirectory) {
        if (subdirectory.name.startsWith(inputText)) {
          state.input = state.input.replace(re, subdirectory.name) + "\xa0";
          state.cursorPosition =
            state.cursorPosition - inputText.length + subdirectory.name.length;

          return;
        }
      });
    }

    if (directory.files) {
      directory.files.forEach(function (file) {
        if (file.name.startsWith(inputText)) {
          state.input = state.input.replace(re, file.name) + "\xa0";
          state.cursorPosition =
            state.cursorPosition - inputText.length + file.name.length;

          return;
        }
      });
    }
  } else if (e.keyCode == 13) {
    // Enter
    createHistoryMessage();
    executeCommand();
    state.commandHistory.push(state.input);
    state.input = "";
    state.inputCursor = "\xa0";
    state.inputStart = "";
    state.inputEnd = "";
    state.cursorPosition = 1;
    state.historyPosition = -1;
  } else if (e.keyCode == 40) {
    // Down

    if (state.historyPosition != -1) {
      state.historyPosition = state.historyPosition - 1;
    }
  } else if (e.keyCode == 39) {
    // Right

    state.cursorPosition = state.cursorPosition + 1;
  } else if (e.keyCode == 38) {
    // Up
    if (state.historyPosition != state.commandHistory.length - 1) {
      state.historyPosition = state.historyPosition + 1;
    }
  } else if (e.keyCode == 37) {
    // Left

    state.cursorPosition = state.cursorPosition - 1;
  } else {
    let key = e.key;

    if (e.keyCode == 32) {
      key = "\xa0";
    }

    if (state.cursorPosition - 1 == state.input.length) {
      state.input = state.input + key;
      state.cursorPosition = state.cursorPosition + 1;
    } else {
      state.input =
        state.input.slice(0, state.cursorPosition - 1) +
        key +
        state.input.slice(state.cursorPosition - 1, state.input.length);
      state.cursorPosition = state.cursorPosition + 1;
    }
  }

  e.preventDefault();
}

function createHistoryMessage(): void {
  let commands: Array<ShellCommandPart[]> = [
    [
      {
        command: commandLinePrefix.user.command + "@",
        color: commandLinePrefix.user.color,
      },
      {
        command: commandLinePrefix.desktop.command,
        color: commandLinePrefix.desktop.color,
      },
      {
        command: commandLinePrefix.directory + state.directory,
        color: "#a78bfa",
      },
      {
        command: "$ " + state.input,
        color: "#ffffff",
      },
    ],
  ];

  addCommands(commands);
}

function executeCommand(): void {
  if (state.input.toLocaleLowerCase() == "help") {
    helpCommand();
  } else if (state.input.toLocaleLowerCase() == "clear") {
    clearCommand();
  } else if (state.input.toLocaleLowerCase().startsWith("cat\xa0")) {
    catCommand();
  } else if (state.input.toLocaleLowerCase() == "ls") {
    lsCommand();
  } else if (state.input.toLocaleLowerCase().startsWith("cd\xa0")) {
    cdCommand();
  } else if (state.input.toLocaleLowerCase().startsWith("mkdir\xa0")) {
    mkdirCommand();
  } else if (state.input.toLocaleLowerCase() == "whoami") {
    whoamiCommand();
  } else if (state.input.toLocaleLowerCase().startsWith("rm\xa0")) {
    rmCommand();
  } else {
    commandNotFound();
  }
}

function rmCommand(): void {
  let commands = [];

  let command = state.input.split("\xa0");

  let path = command[1];

  let isSuccessful = shell.removeDirectory(path);

  if (!isSuccessful) {
    commands.push([{ command: "", color: "" }]);
    commands.push([
      {
        command: "Could not remove a directory called " + "'" + command[1] + "'",
        color: "#ff0000",
      },
    ]);
    commands.push([{ command: "", color: "" }]);
  }

  addCommands(commands);
}

function whoamiCommand(): void {
  let commands: Array<ShellCommandPart[]> = [];

  commands.push([commandLinePrefix.user]);

  addCommands(commands);
}

function mkdirCommand(): void {
  let commands = [];

  let command = state.input.split("\xa0");

  let path = command[1];

  let isSuccessful = shell.createDirectory(path);

  if (isSuccessful == false) {
    commands.push([{ command: "", color: "" }]);
    commands.push([
      {
        command:
          "Could not create a directory called " + "'" + command[1] + "'",
        color: "#ff0000",
      },
    ]);
    commands.push([{ command: "", color: "" }]);
  }

  addCommands(commands);
}

function lsCommand(): void {
  let commands: Array<ShellCommandPart[]> = [];
  let directory: Directory = shell.getActiveDirectory();

  if (directory.files) {
    directory.files.forEach(function (file) {
      commands.push([{ command: file.name, color: "#00a6ff" }]);
    });
  }

  if (directory.subdirectories) {
    directory.subdirectories.forEach(function (directory) {
      commands.push([{ command: directory.name, color: "#a78bfa" }]);
    });
  }

  addCommands(commands);
}

function cdCommand(): void {
  let commands: Array<ShellCommandPart[]> = [];

  let command = state.input.split("\xa0");

  if (command[1] == "..") {
    shell.moveUp();

    let path = shell.getDirectoryFullPath(shell.getActiveDirectory().name);
    state.directory = path.slice(1, path.length);
    return;
  }

  let path = state.directory + "/" + command[1];
  let isSuccessful = shell.setActiveDirectory(path);

  if (isSuccessful == false) {
    commands.push([{ command: "", color: "" }]);
    commands.push([
      {
        command: "Could not find a directory called " + "'" + command[1] + "'",
        color: "#ff0000",
      },
    ]);
    commands.push([{ command: "", color: "" }]);
  } else {
    state.directory = path;
  }

  addCommands(commands);
}

function catCommand(): void {
  let command = state.input.split("\xa0");
  let content = shell.getFileContent(command[1]);

  if (content == null) {
    let commands: Array<ShellCommandPart[]> = [];

    commands.push([{ command: "", color: "" }]);
    commands.push([
      {
        command: "Could not find a file called " + "'" + command[1] + "'",
        color: "#ff0000",
      },
    ]);
    commands.push([{ command: "", color: "" }]);

    addCommands(commands);
  } else {
    let commands: Array<ShellCommandPart[]> = [];

    content.forEach(function (linePart) {
      let command: ShellCommandPart[] = [];
      linePart.forEach(function (part) {
        command.push({ command: part.command, color: part.color });
      });

      commands.push(command);
    });

    addCommands(commands);
  }
}

function clearCommand(): void {
  state.history = [];
  state.cursorPosition = 0;
}

function commandNotFound(): void {
  let commands: Array<ShellCommandPart[]> = [];

  commands.push([{ command: "", color: "" }]);
  commands.push([
    {
      command: "Could not find a command called " + "'" + state.input + "'",
      color: "#ff0000",
    },
  ]);
  commands.push([{ command: "", color: "" }]);

  addCommands(commands);
}

function helpCommand(): void {
  let commands: Array<ShellCommandPart[]> = [];

  commands.push([{ command: "", color: "" }]);
  commands.push([{ command: "Commands:", color: "#00a6ff" }]);
  commands.push([
    {
      command:
        "------------------------------------------------------------------",
      color: "#00a6ff",
    },
  ]);
  commands.push([
    { command: "ls", color: "#00a6ff" },
    {
      command: "     Lists all files and directory from the current directory",
      color: "#ffffff",
    },
  ]);
  commands.push([
    { command: "cd", color: "#00a6ff" },
    { command: "     Change the current directory", color: "#ffffff" },
  ]);
  commands.push([
    { command: "cat", color: "#00a6ff" },
    { command: "    Concatenate and display file content", color: "#ffffff" },
  ]);
  commands.push([
    { command: "help", color: "#00a6ff" },
    { command: "   Display this help message", color: "#ffffff" },
  ]);
  commands.push([
    { command: "clear", color: "#00a6ff" },
    { command: "  Clear the terminal screen", color: "#ffffff" },
  ]);
  commands.push([{ command: "", color: "" }]);

  addCommands(commands);
}

onMounted(() => {
  initialize();
  const targetNode = document.getElementById("scroller");
  const config = { childList: true };
  const callback = function (mutationsList): MutationCallback {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
  };
  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
  window.addEventListener("keydown", keyDownHandler);
});

watch(
  () => state.input,
  (value) => {
    if (value == "") {
      state.inputStart = "";
      state.inputCursor = "\xa0";
      state.inputEnd = "";
      state.cursorPosition = 1;
    }
  },
);

watch(
  () => state.historyPosition,
  (value) => {
    if (value == -1) {
      state.input = "";
    } else {
      state.input =
        state.commandHistory[state.commandHistory.length - value - 1];
      state.cursorPosition = state.input.length + 1;
    }
  },
);

watch(
  () => state.cursorPosition,
  (value) => {
    if (state.input.length == 0) {
      state.cursorPosition = 1;
    } else if (value == 0) {
      state.cursorPosition = 1;
    } else if (value != state.input.length + 1) {
      state.inputStart = state.input.slice(0, value - 1);
      state.inputCursor = state.input.slice(value - 1, value);
      state.inputEnd = state.input.slice(value, state.input.length);
    } else {
      state.inputStart = state.input;
      state.inputCursor = "\xa0";
    }
  },
);

onUnmounted(() => {
  window.removeEventListener("keydown", keyDownHandler);
});

definePageMeta({
  title: "Home",
});
</script>

<template>
  <div class="h-screen">
    <div
      class="min-h-full bg-slate-800 p-2 flex flex-col justify-between overflow-y-visible"
    >
      <main id="scroller" class="flex flex-col">
        <div
          v-for="(command, index) in state.history"
          :key="'command' + index"
          class="flex flex-row h-fit min-h-[1.5rem]"
          v-html="command"
        ></div>

        <div class="flex flex-row h-fit min-h-[1.5rem]">
          <p
            class="font-mono"
            :style="'color: ' + commandLinePrefix.user.color"
          >
            {{ commandLinePrefix.user.command + "@" }}
          </p>
          <p
            class="font-mono"
            :style="'color: ' + commandLinePrefix.desktop.color"
          >
            {{ commandLinePrefix.desktop.command }}
          </p>
          <p class="font-mono text-violet-400">
            {{ commandLinePrefix.directory + state.directory }}
          </p>
          <p class="font-mono text-white">$&nbsp;</p>
          <p class="font-mono text-white">{{ state.inputStart }}</p>
          <p class="font-mono text-white animate-pulse bg-violet-500">
            {{ state.inputCursor }}
          </p>
          <p class="font-mono text-white break-all">{{ state.inputEnd }}</p>
        </div>
      </main>
      <footer id="copyright" class="font-mono text-white h-6 m-1 mt-5">
        &#169; By Jan Walker
      </footer>
    </div>
  </div>
</template>

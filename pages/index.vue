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
});

const commandLinePrefix = {
  user: {
    command: "Jan",
    color: "#67e8f9",
  },
  group: {
    command: "dev",
    color: "#67e8f9",
  },
  desktop: {
    command: "home-page:",
    color: "#67e8f9",
  },
  directory: "/home/",
};

const specialKeys: Array<number> = [
  3, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34,
  35, 36, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 91, 221,
  45, 244,
];

function initialize(): void {
  addCommands(startup);
  let directory: Directory = shell.getActiveDirectory();
  state.directory = shell.getDirectoryFullPath(directory.uid)?.slice(1);
}

function addCommands(commands: Array<ShellCommandPart[]>): void {
  for (let command of commands) {
    state.history.push(shell.writeLine(command));
  }
}

function keyDownHandler(e): void {
  e.preventDefault();

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

    if (state.input.includes("/")) {
      let path = state.directory + "/" + inputs.at(-1);

      let paths = path.split("/");
      inputText = paths.pop();
      path = paths.join("/");

      directory = shell.getDirectoryFromFullPath(path);
    }

    if (directory.subdirectories) {
      for (let subdirectory of directory.subdirectories) {
        if (subdirectory.name.startsWith(inputText)) {
          let paths = state.input.split("/");
          if (paths.length > 1) {
            paths.pop();
            state.input = paths.join("/") + "/" + subdirectory.name + "/";
          } else {
            state.input = state.input.replace(re, subdirectory.name) + "/";
          }

          state.cursorPosition =
            state.cursorPosition -
            inputText.length +
            subdirectory.name.length +
            1;

          return;
        }
      }
    }

    if (directory.files) {
      for (let file of directory.files) {
        if (file.name.startsWith(inputText)) {
          let paths = state.input.split("/");
          if (paths.length > 1) {
            paths.pop();
            state.input = paths.join("/") + "/" + file.name;
          } else {
            state.input = state.input.replace(re, file.name);
          }

          state.cursorPosition =
            state.cursorPosition - inputText.length + file.name.length;

          return;
        }
      }
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
  const input = state.input.toLowerCase();

  if (input === "help") {
    helpCommand();
  } else if (input === "clear") {
    clearCommand();
  } else if (input.startsWith("cat\xa0")) {
    catCommand();
  } else if (input.startsWith("ls")) {
    lsCommand();
  } else if (input.startsWith("cd\xa0")) {
    cdCommand();
  } else if (input.startsWith("mkdir\xa0")) {
    mkdirCommand();
  } else if (input === "whoami") {
    whoamiCommand();
  } else if (input.startsWith("rm\xa0")) {
    rmCommand();
  } else if (input === "shutdown\xa0-r\xa0now") {
    rebootCommand();
  } else if (input.startsWith("touch\xa0")) {
    touchCommand();
  } else if (input.startsWith("echo\xa0")) {
    echoCommand();
  } else {
    commandNotFound();
  }
}

function rebootCommand(): void {
  shell.reset();
  location.reload();
}

function touchCommand(): void {
  let commands = [];

  let command = state.input.split("\xa0");

  let fileName = command[1];

  let isSuccessful = shell.createFile(fileName);

  if (!isSuccessful) {
    commands.push([{ command: "", color: "" }]);
    commands.push([
      {
        command: "Could not create a file called " + "'" + command[1] + "'",
        color: "#ff0000",
      },
    ]);
    commands.push([{ command: "", color: "" }]);
  }
}

function rmCommand(): void {
  let commands = [];

  let command = state.input.split("\xa0");

  if (command[1] == "-r") {
    let isSuccessful = shell.removeDirectory(command[2]);

    if (isSuccessful == false) {
      commands.push([{ command: "", color: "" }]);
      commands.push([
        {
          command:
            "Could not remove a directory called " + "'" + command[2] + "'",
          color: "#ff0000",
        },
      ]);
      commands.push([{ command: "", color: "" }]);
    }
  } else {
    let isSuccessful = shell.removeFile(command[1]);

    if (isSuccessful == false) {
      commands.push([{ command: "", color: "" }]);
      commands.push([
        {
          command: "Could not remove a file called " + "'" + command[1] + "'",
          color: "#ff0000",
        },
      ]);
      commands.push([{ command: "", color: "" }]);
    }
  }

  addCommands(commands);
}

function whoamiCommand(): void {
  let commands: Array<ShellCommandPart[]> = [];

  commands.push([commandLinePrefix.user]);

  addCommands(commands);
}

function echoCommand(): void {
  let command = state.input.split("\xa0");
  let path = state.directory + "/";

  function getString(command: string): string {
    if (command.includes('"')) {
      return command.substring(
        command.indexOf('"') + 1,
        command.lastIndexOf('"'),
      );
    } else if (command.includes("'")) {
      return command.substring(
        command.indexOf("'") + 1,
        command.lastIndexOf("'"),
      );
    } else {
      return command;
    }
  }

  let content = getString(command[1]);
  let fileName = command[3];
  let shellCommand: ShellCommandPart[] = [];
  shellCommand.push({ command: content, color: "#ffffff" });

  if (command[2] == ">>") {
    shell.addLineToFile(path + fileName, shellCommand);
  } else if (command[2] == ">") {
    shell.replaceFileContent(path + fileName, shellCommand);
  } else {
    let commands: Array<ShellCommandPart[]> = [];
    commands.push([{ command: content, color: "" }]);

    addCommands(commands);
  }
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
  let command = state.input.split("\xa0");

  function formatSize(size: string): string {
    if (new String(size).length < 4) {
      let difference = 4 - new String(size).length;

      for (let i = 0; i < difference; i++) {
        size = " " + size;
      }
    }

    return size;
  }

  if (command.length == 1) {
    if (directory.files) {
      for (let file of directory.files) {
        commands.push([{ command: file.name, color: "#00a6ff" }]);
      }
    }

    if (directory.subdirectories) {
      for (let subdirectory of directory.subdirectories) {
        commands.push([{ command: subdirectory.name, color: "#a78bfa" }]);
      }
    }
  } else if (command[1] == "-la") {
    if (directory.files) {
      for (let file of directory.files) {
        commands.push([
          { command: file.permissions + " ", color: "#00a6ff" },
          { command: "0 ", color: "#00a6ff" },
          { command: commandLinePrefix.user.command + " ", color: "#00a6ff" },
          { command: commandLinePrefix.group.command + " ", color: "#00a6ff" },
          {
            command: formatSize(shell.calculateFileSize(file.uid)) + " ",
            color: "#00a6ff",
          },
          { command: formatLsDate(file.modifiedDate) + " ", color: "#00a6ff" },
          { command: file.name + " ", color: "#00a6ff" },
        ]);
      }
    }

    if (directory.subdirectories) {
      for (let subdirectory of directory.subdirectories) {
        commands.push([
          { command: subdirectory.permissions + " ", color: "#a78bfa" },
          { command: "0 ", color: "#a78bfa" },
          { command: commandLinePrefix.user.command + " ", color: "#a78bfa" },
          { command: commandLinePrefix.group.command + " ", color: "#a78bfa" },
          {
            command:
              formatSize(
                shell.calculateDirectorySize(
                  shell.getDirectoryFullPath(subdirectory.uid),
                ),
              ) + " ",
            color: "#a78bfa",
          },
          {
            command: formatLsDate(subdirectory.modifiedDate) + " ",
            color: "#a78bfa",
          },
          { command: subdirectory.name + " ", color: "#a78bfa" },
        ]);
      }
    }
  } else {
    commandNotFound();
    return;
  }

  addCommands(commands);
}

function cdCommand(): void {
  let commands: Array<ShellCommandPart[]> = [];
  let command = state.input.split("\xa0");

  if (command[1] == "") {
    commands.push([{ command: "", color: "" }]);
    commands.push([
      {
        command: "Could not find a directory called " + "'" + command[1] + "'",
        color: "#ff0000",
      },
    ]);
    commands.push([{ command: "", color: "" }]);

    addCommands(commands);
    return;
  }

  if (command[1] == "..") {
    shell.moveUp();

    let path = shell.getDirectoryFullPath(shell.getActiveDirectory().uid);
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
    state.directory = path.slice(0, -1);
  }

  addCommands(commands);
}

function catCommand(): void {
  let command = state.input.split("\xa0");
  let path = state.directory + "/" + command[1];

  let content = shell.getFileContent(path);

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

    for (let linePart of content) {
      let command: ShellCommandPart[] = [];

      for (let part of linePart) {
        command.push({ command: part.command, color: part.color });
      }

      commands.push(command);
    }

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
  commands.push([
    { command: "mkdir", color: "#00a6ff" },
    { command: "  Create a new directory", color: "#ffffff" },
  ]);
  commands.push([
    { command: "whoami", color: "#00a6ff" },
    { command: " Display the current user", color: "#ffffff" },
  ]);
  commands.push([
    { command: "rm", color: "#00a6ff" },
    { command: "     Remove a file or directory", color: "#ffffff" },
  ]);
  commands.push([
    { command: "touch", color: "#00a6ff" },
    { command: "  Create a new file", color: "#ffffff" },
  ]);
  commands.push([
    { command: "echo", color: "#00a6ff" },
    { command: "   Display a line of text", color: "#ffffff" },
  ]);
  commands.push([{ command: "", color: "" }]);

  addCommands(commands);
}

function formatLsDate(date: Date): string {
  const now: Date = new Date();
  const sixMonthsAgo: Date = new Date();
  sixMonthsAgo.setMonth(now.getMonth() - 6);

  const month: string = date.toLocaleString("en-US", { month: "short" });
  const day: string = String(date.getDate()).padStart(2, " ");

  if (date > sixMonthsAgo) {
    const hours: string = String(date.getHours()).padStart(2, "0");
    const minutes: string = String(date.getMinutes()).padStart(2, "0");
    return `${month} ${day} ${hours}:${minutes}`;
  } else {
    const year: number = date.getFullYear();
    return `${month} ${day}  ${year}`;
  }
}

onMounted(() => {
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
  shell.initializeDrive();
  initialize();
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
      class="min-h-full bg-dark-gray p-2 flex flex-col justify-between overflow-y-visible"
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

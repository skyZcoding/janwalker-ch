import type ShellCommandPart from "./types/ShellCommandPart";
import type Directory from "./types/Directory";
import type CommandLine from "./types/CommandLine";
import { uid } from "uid";

export function Shell(): CommandLine {
  const drive: Directory[] = [
    {
      uid: uid(),
      name: "cv",
      active: true,
      subdirectories: [
        {
          uid: uid(),
          name: "contact",
          active: false,
          subdirectories: [],
          files: [
            {
              uid: uid(),
              name: "info.txt",
              content: [
                [{ command: "", color: "#ffffff" }],
                [
                  {
                    command:
                      "Feel free to reach out to me through one of the following channels",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "Github            ",
                    color: "#ffffff",
                  },
                  {
                    command:
                      '<a href="https://github.com/skyZcoding" target="_blank" style="text-decoration-line: underline;" class="font-mono border-b-2 border-white text-white">skyZcoding</a>',
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "LinkedIn          ",
                    color: "#ffffff",
                  },
                  {
                    command:
                      '<a href="https://www.linkedin.com/in/jan-walker-jw/" target="_blank" style="text-decoration-line: underline;" class="font-mono border-b-2 border-white text-white">jan-walker-jw</a>',
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "Email             ",
                    color: "#ffffff",
                  },
                  {
                    command:
                      '<a href="mailto:jan.walker.jw2@gmail.com" target="_blank" style="text-decoration-line: underline;" class="font-mono border-b-2 border-white text-white">jan.walker.jw2@gmail.com</a>',
                    color: "#ffffff",
                  },
                ],
                [{ command: "", color: "#ffffff" }],
              ],
            },
          ],
        },
        {
          uid: uid(),
          name: "projects",
          active: false,
          subdirectories: [],
          files: [
            {
              uid: uid(),
              name: "info.txt",
              content: [
                [{ command: "", color: "#ffffff" }],
                [{ command: "Projects", color: "#ffffff" }],
                [
                  {
                    command:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "cobas® mobile solution",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Developed multiple service on the product during the time working at Roche diagnostics",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      '<a href="https://diagnostics.roche.com/global/en/products/instruments/cobas-mobile-solution-ins-6695.html" target="_blank" style="text-decoration-line: underline;" class="font-mono border-b-2 border-white text-white">Project page</a>',
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
                    command: "Volunteering App",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Created in a team a working prototype app to unite the different volunteering companies with the actual volunteers. This was done at the Hackzurich 2022.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      '<a href="https://old.creatorspace.dev/kennybets/projects/hiFkMYxIClrrVQAj" target="_blank" style="text-decoration-line: underline;" class="font-mono border-b-2 border-white text-white">Project page</a>',
                    color: "#ffffff",
                  },
                ],
                [{ command: "", color: "#ffffff" }],
                [
                  {
                    command: "Home page",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Created this home page to display the cv in a creative way.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      '<a href="https://github.com/skyZcoding/janwalker-ch" target="_blank" style="text-decoration-line: underline;" class="font-mono border-b-2 border-white text-white">Github</a>',
                    color: "#ffffff",
                  },
                ],
                [{ command: "", color: "#ffffff" }],
                [
                  {
                    command: "Scrapsters",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Created in a team a working prototype app to create a way how to teach sustainable shopping to children. This was done at the Hackzurich 2023 and won the 1 place at the Migros challenge.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      '<a href="https://devpost.com/software/scrapsters" style="text-decoration-line: underline;" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>',
                    color: "#ffffff",
                  },
                ],
                [{ command: "", color: "#ffffff" }],
              ],
            },
          ],
        },
        {
          uid: uid(),
          name: "education",
          active: false,
          subdirectories: [],
          files: [
            {
              uid: uid(),
              name: "info.txt",
              content: [
                [{ command: "", color: "#ffffff" }],
                [{ command: "Education", color: "#ffffff" }],
                [
                  {
                    command:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Informatiker Fachrichtung Applikationsentwicklug EFZ",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "Gewerblich-industrielles Bildungszentrum Zug",
                    color: "#ffffff",
                  },
                ],
                [{ command: "Aug. 2018 - Aug. 2022", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
              ],
            },
          ],
        },
        {
          uid: uid(),
          name: "experience",
          active: false,
          subdirectories: [],
          files: [
            {
              uid: uid(),
              name: "info.txt",
              content: [
                [{ command: "", color: "#ffffff" }],
                [{ command: "Experience", color: "#ffffff" }],
                [
                  {
                    command:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [{ command: "", color: "#ffffff" }],
                [
                  {
                    command: "Apprenticeship as a software developer",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "The apprenticeship is a common starting ground in switzerland to start as a software developer. During this period the apprentice will learn the basic to advance knowledge of the topics which are needed to be a software developer.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "@Roche Diagnostics International AG",
                    color: "#ffffff",
                  },
                ],
                [{ command: "Aug. 2018 - Aug. 2022", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
                [{ command: "Junior software developer", color: "#ffffff" }],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Worked as a full stack developer on multiple project using mainly .NET. As well managed the user devices through the VMWare Workspace system.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "@Roche Diagnostics International AG",
                    color: "#ffffff",
                  },
                ],
                [{ command: "Aug. 2022 - Aug. 2023", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
                [
                  {
                    command:
                      "Teaching an intercompany course for apprentices about Blazor",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command:
                      "Taught the first year apprentices how to develope a web frontend with Blazor as a course instructor.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "@Roche Diagnostics International AG",
                    color: "#ffffff",
                  },
                ],
                [{ command: "Nov. 2022 - Dec. 2022", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
                [{ command: "Co-Owner", color: "#ffffff" }],
                [
                  {
                    command:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    command: "Turning IT ideas into reality!",
                    color: "#ffffff",
                  },
                ],
                [{ command: "@Codelance GmbH", color: "#ffffff" }],
                [{ command: "Aug. 2023 - Present", color: "#ffffff" }],
                [{ command: "", color: "#ffffff" }],
              ],
            },
          ],
        },
      ],
      files: [],
    },
  ];

  function getDirectoryFromFullPath(fullPath: string): Directory | null {
    const pathParts = fullPath.split("/").filter((part) => part !== "");

    function findDirectory(
      directories: Directory[],
      parts: string[],
    ): Directory | null {
      if (parts.length === 0) return null;

      const [currentPart, ...remainingParts] = parts;

      for (const dir of directories) {
        if (dir.name === currentPart) {
          if (remainingParts.length === 0) {
            return dir;
          }
          if (dir.subdirectories) {
            return findDirectory(dir.subdirectories, remainingParts);
          }
        }
      }
      return null;
    }

    return findDirectory(drive, pathParts);
  }

  function getDirectoryFullPath(uid: string): string | null {
    function findPath(
      directories: Directory[],
      targetName: string,
      currentPath: string,
    ): string | null {
      for (const dir of directories) {
        const newPath = `${currentPath}/${dir.name}`;
        if (dir.uid === targetName) {
          return newPath;
        }
        if (dir.subdirectories) {
          const result = findPath(dir.subdirectories, targetName, newPath);
          if (result) {
            return result;
          }
        }
      }
      return null;
    }

    return findPath(drive, uid, "") || null;
  }

  function removeFile(fileName: string): boolean {
    const activeDir = getActiveDirectory();
    if (!activeDir || !activeDir.files) return false;

    const index = activeDir.files.findIndex((file) => file.name === fileName);

    if (index === -1) return false; // File not found

    activeDir.files.splice(index, 1);
    return true;
  }

  function setActiveDirectory(fullPath: string): boolean {
    const pathParts = fullPath.split("/").filter((part) => part !== "");

    function setActive(directories: Directory[], parts: string[]): boolean {
      if (parts.length === 0) return false;

      const [currentPart, ...remainingParts] = parts;

      for (const dir of directories) {
        if (dir.name === currentPart) {
          if (remainingParts.length === 0) {
            dir.active = true;
            return true;
          }
          if (
            dir.subdirectories &&
            setActive(dir.subdirectories, remainingParts)
          ) {
            return true;
          }
        }
      }
      return false;
    }

    // Reset all directories to inactive
    function resetActive(directories: Directory[]): void {
      for (const dir of directories) {
        dir.active = false;
        if (dir.subdirectories) {
          resetActive(dir.subdirectories);
        }
      }
    }

    if (directoryExists(fullPath)) {
      resetActive(drive);
      return setActive(drive, pathParts);
    }

    return false;
  }

  function directoryExists(fullPath: string): boolean {
    const pathParts = fullPath.split("/").filter((part) => part !== "");

    function checkExistence(
      directories: Directory[],
      parts: string[],
    ): boolean {
      if (parts.length === 0) return true;

      const [currentPart, ...remainingParts] = parts;

      for (const dir of directories) {
        if (dir.name === currentPart) {
          if (remainingParts.length === 0) {
            return true;
          }
          if (dir.subdirectories) {
            return checkExistence(dir.subdirectories, remainingParts);
          }
        }
      }
      return false;
    }

    return checkExistence(drive, pathParts);
  }

  function getActiveDirectory(): Directory | null {
    function findActive(directories: Directory[]): Directory | null {
      for (const dir of directories) {
        if (dir.active) {
          return dir;
        }
        if (dir.subdirectories) {
          const activeSubdir = findActive(dir.subdirectories);
          if (activeSubdir) {
            return activeSubdir;
          }
        }
      }

      return null;
    }

    return findActive(drive);
  }

  function moveUp(): boolean {
    const activeDir = getActiveDirectory();
    if (!activeDir) return false;

    function findParent(
      directories: Directory[],
      target: Directory,
    ): Directory | null {
      for (const dir of directories) {
        if (dir.subdirectories && dir.subdirectories.includes(target)) {
          return dir;
        }
        if (dir.subdirectories) {
          const parent = findParent(dir.subdirectories, target);
          if (parent) {
            return parent;
          }
        }
      }
      return null;
    }

    const parentDir = findParent(drive, activeDir);
    if (parentDir) {
      const fullPath = getDirectoryFullPath(parentDir.uid) || "";
      setActiveDirectory(fullPath);
      return true;
    }

    return false;
  }

  function getFileContent(fileName: string): Array<ShellCommandPart[]> | null {
    const activeDir = getActiveDirectory();
    if (!activeDir || !activeDir.files) return null;

    for (const file of activeDir.files) {
      if (file.name === fileName) {
        return file.content || null;
      }
    }

    return null;
  }

  function createDirectory(directoryName: string): boolean {
    const activeDir = getActiveDirectory();
    if (!activeDir || !activeDir.subdirectories) return false;

    // Check if directory already exists
    for (const dir of activeDir.subdirectories) {
      if (dir.name === directoryName) {
        return false; // Directory already exists
      }
    }

    // Create new directory
    const newDirectory: Directory = {
      uid: uid(),
      name: directoryName,
      active: false,
      subdirectories: [],
      files: [],
    };

    activeDir.subdirectories.push(newDirectory);
    return true;
  }

  function removeDirectory(directoryName: string): boolean {
    const activeDir = getActiveDirectory();
    if (!activeDir || !activeDir.subdirectories) return false;

    const index = activeDir.subdirectories.findIndex(
      (dir) => dir.name === directoryName,
    );

    if (index === -1) return false; // Directory not found

    activeDir.subdirectories.splice(index, 1);
    return true;
  }

  function createFile(fileName: string): boolean {
    const activeDir = getActiveDirectory();
    if (!activeDir || !activeDir.files) return false;

    // Check if file already exists
    for (const file of activeDir.files) {
      if (file.name === fileName) {
        return false; // File already exists
      }
    }

    // Create new file
    const newFile = {
      name: fileName,
      content: [],
    };

    activeDir.files.push(newFile);
    return true;
  }

  function writeLine(commandParts: ShellCommandPart[]): string {
    let line = "";

    commandParts.forEach(function (part) {
      let command = part.command;

      if (!/<\/?[a-z][\s\S]*>/i.test(command)) {
        command = command.replace(/\s/g, "&nbsp;");
      }

      line += `<p class="font-mono h-fit break-all" style="color:${
        part.color ? part.color : "#ffffff"
      }">${command}</p>`;
    });

    return line;
  }

  return {
    writeLine,
    getDirectoryFromFullPath,
    setActiveDirectory,
    getActiveDirectory,
    moveUp,
    getFileContent,
    createDirectory,
    getDirectoryFullPath,
    removeDirectory,
    createFile,
    removeFile,
  };
}

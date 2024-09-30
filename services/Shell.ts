import type ShellCommandPart from "./types/ShellCommandPart";
import type Directory from "./types/Directory";
import type CommandLine from "./types/Shell";

export function Shell(): CommandLine {
  const drive: Directory[] = [
    {
      name: "cv",
      active: true,
      subdirectories: [
        {
          name: "contact",
          active: false,
          subdirectories: [],
          files: [
            {
              name: "info.txt",
              content: [
                [{ linePart: "", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "Feel free to reach out to me through one of the following channels",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "Github            ",
                    color: "#ffffff",
                  },
                  {
                    linePart:
                      '<a href="https://github.com/skyZcoding" target="_blank" class="font-mono border-b-2 border-white text-white">skyZcoding</a>',
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "LinkedIn          ",
                    color: "#ffffff",
                  },
                  {
                    linePart:
                      '<a href="https://www.linkedin.com/in/jan-walker-jw/" target="_blank" class="font-mono border-b-2 border-white text-white">jan-walker-jw</a>',
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "Email             ",
                    color: "#ffffff",
                  },
                  {
                    linePart:
                      '<a href="mailto:jan.walker.jw2@gmail.com" target="_blank" class="font-mono border-b-2 border-white text-white">jan.walker.jw2@gmail.com</a>',
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "", color: "#ffffff" }],
              ],
            },
          ],
        },
        {
          name: "projects",
          active: false,
          subdirectories: [],
          files: [
            {
              name: "info.txt",
              content: [
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "Projects", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "cobas® mobile solution",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Developed multiple service on the product during the time working at Roche diagnostics",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      '<a href="https://diagnostics.roche.com/global/en/products/instruments/cobas-mobile-solution-ins-6695.html" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>',
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "",
                    color: "",
                  },
                ],
                [
                  {
                    linePart: "Volunteering App",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Created in a team a working prototype app to unite the different volunteering companies with the actual volunteers. This was done at the Hackzurich 2022.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      '<a href="https://old.creatorspace.dev/kennybets/projects/hiFkMYxIClrrVQAj" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>',
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "", color: "#ffffff" }],
                [
                  {
                    linePart: "Home page",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Created this home page to display the cv in a creative way.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      '<a href="https://github.com/skyZcoding/janwalker-ch" target="_blank" class="font-mono border-b-2 border-white text-white">Github</a>',
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "", color: "#ffffff" }],
                [
                  {
                    linePart: "Scrapsters",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Created in a team a working prototype app to create a way how to teach sustainable shopping to children. This was done at the Hackzurich 2023 and won the 1 place at the Migros challenge.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      '<a href="https://devpost.com/software/scrapsters" target="_blank" class="font-mono border-b-2 border-white text-white">Project page</a>',
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "", color: "#ffffff" }],
              ],
            },
          ],
        },
        {
          name: "education",
          active: false,
          subdirectories: [],
          files: [
            {
              name: "info.txt",
              content: [
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "Education", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Informatiker Fachrichtung Applikationsentwicklug EFZ",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "Gewerblich-industrielles Bildungszentrum Zug",
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "Aug. 2018 - Aug. 2022", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
              ],
            },
          ],
        },
        {
          name: "experience",
          active: false,
          subdirectories: [],
          files: [
            {
              name: "info.txt",
              content: [
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "Experience", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "------------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "", color: "#ffffff" }],
                [
                  {
                    linePart: "Apprenticeship as a software developer",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "The apprenticeship is a common starting ground in switzerland to start as a software developer. During this period the apprentice will learn the basic to advance knowledge of the topics which are needed to be a software developer.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "@Roche Diagnostics International AG",
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "Aug. 2018 - Aug. 2022", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "Junior software developer", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Worked as a full stack developer on multiple project using mainly .NET. As well managed the user devices through the VMWare Workspace system.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "@Roche Diagnostics International AG",
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "Aug. 2022 - Aug. 2023", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "Teaching an intercompany course for apprentices about Blazor",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart:
                      "Taught the first year apprentices how to develope a web frontend with Blazor as a course instructor.",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "@Roche Diagnostics International AG",
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "Nov. 2022 - Dec. 2022", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
                [{ linePart: "Co-Owner", color: "#ffffff" }],
                [
                  {
                    linePart:
                      "------------------------------------------------------------",
                    color: "#ffffff",
                  },
                ],
                [
                  {
                    linePart: "Turning IT ideas into reality!",
                    color: "#ffffff",
                  },
                ],
                [{ linePart: "@Codelance GmbH", color: "#ffffff" }],
                [{ linePart: "Aug. 2023 - Present", color: "#ffffff" }],
                [{ linePart: "", color: "#ffffff" }],
              ],
            },
          ],
        },
      ],
      files: [],
    },
  ];

  function getDirectoryFullPath(directoryName: string): string | null {
    function findPath(
      directories: Directory[],
      targetName: string,
      currentPath: string,
    ): string | null {
      for (const dir of directories) {
        const newPath = `${currentPath}/${dir.name}`;
        if (dir.name === targetName) {
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

    return findPath(drive, directoryName, "") || null;
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
      const fullPath = getDirectoryFullPath(parentDir.name) || "";
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
      name: directoryName,
      active: false,
      subdirectories: [],
      files: [],
    };

    activeDir.subdirectories.push(newDirectory);
    return true;
  }

  function writeLine(commandParts: Array<ShellCommandPart>): string {
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
    setActiveDirectory,
    getActiveDirectory,
    moveUp,
    getFileContent,
    createDirectory,
    getDirectoryFullPath,
  };
}

import type ShellCommandPart from "./ShellCommandPart";
import type Directory from "./Directory";

export default interface CommandLine {
  writeLine(commandParts: Array<ShellCommandPart>): string;
  setActiveDirectory(fullPath: string): boolean;
  getActiveDirectory(): Directory | null;
  moveUp(): boolean;
  getFileContent(fileName: string): Array<ShellCommandPart[]> | null;
  createDirectory(directoryName: string): boolean;
  getDirectoryFullPath(directoryName: string): string | null;
}

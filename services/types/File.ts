import type ShellCommandPart from "./ShellCommandPart";

export default interface File {
  name: string;
  content: Array<ShellCommandPart[]>;
}

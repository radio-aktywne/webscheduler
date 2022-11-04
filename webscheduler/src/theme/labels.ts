import { trimString } from "../lib/utils";

const labels = {
  description: "scheduling web ui",
  copy: "Copy",
  copied: "Copied!",
  goBack: "Go back",
  index: {
    title: "webscheduler",
    error: "Error",
  },
  task: {
    title: (name: string) => `${trimString(name, 10)} • webscheduler`,
    error: "Error",
    buttons: {
      enable: "Enable",
      disable: "Disable",
      run: "Run",
      terminate: "Terminate",
    },
  },
  toasts: {
    titles: {
      error: "Error",
      warning: "Warning",
      success: "Success",
    },
  },
};

export type Labels = typeof labels;

export default labels;

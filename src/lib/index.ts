import { writable } from "svelte/store";

export const sidebarOpen = writable(false);

export const Devs = writable([
  {
    name: "Bach",
    role: "Lead Developer",
    avatarUrl: "./PFP/bach.png",
  },
  {
    name: "W0dl",
    role: "Lead Developer",
    avatarUrl: "./PFP/w0dl.png",
  },
]);

export const navItems = writable<any>([
  {
    label: "Introduction",
    href: "/",
    isActive: true,
  },
  {
    label: "Kill MSG",
    isOpen: false,
    children: [
      {
        label: "Exports",
        href: "/scripts/kill-msg/exports",
      },
      {
        label: "Config",
        href: "/scripts/kill-msg/config",
      },
    ],
  },
]);

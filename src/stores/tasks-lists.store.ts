import { writable } from 'svelte/store';
import type { TaskList, TaskListGroup } from '../interfaces'

const specialLists: TaskList[] = [
  {
    id: "1",
    title: "My Day",
    tasks: [{
      id: '1-1',
      title: 'Task 1'
    }]
  },
  {
    id: "2",
    title: "Planned",
    tasks: []
  },
  {
    id: "3",
    title: "Tasks",
    tasks: [{
      id: '3-1',
      title: '3-1'
    }]
  },
];

const taskLists: (TaskList | TaskListGroup)[] = [
  {
    id: "01",
    title: "Getting Started",
    tasks: []
  },
  {
    id: "02",
    title: "Groceries",
    tasks: []
  },
  {
    id: "GROUP__01",
    title: "Untitled Group",
    lists: [
      {
        id: "list--01",
        title: "Untitled List",
        tasks: []
      },
      {
        id: "list--02",
        title: 'Another list',
        tasks: []
      }
    ],
  },
  {
    id: "03",
    title: 'Another list',
    tasks: []
  },
  {
    id: 'group-1',
    title: 'Another Group',
    lists: [{
      id: 'group-1-1',
      title: 'A list',
      tasks: []
    }]
  },
  {
    id: 'group2',
    title: 'Group 3?',
    lists: [{
      id: 'g23',
      title: 'Yo',
      tasks: []
    }]
  }
];

const useTaskLists = () => {
  const { subscribe } = writable({
    specialLists,
    taskLists
  })

  return {
    subscribe
  }
}

export const listStore = useTaskLists()
export interface Entity {
  id: string
}

export interface Task extends Entity {
  title: string
}

export interface TaskList extends Entity {
  title: string
  tasks: Task[]
}

export interface TaskListGroup extends Entity {
  title: string
  lists: TaskList[]
}
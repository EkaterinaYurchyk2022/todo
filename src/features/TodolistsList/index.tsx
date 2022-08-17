import * as tasksActions from './tasks-actions'
import * as todolistsAsynkActions from './todolists-actions'
import {slice} from './todolists-reducer'

const todolistsActions = {
    ...todolistsAsynkActions,
    ...slice.actions
}

export {
    tasksActions,
    todolistsActions
}
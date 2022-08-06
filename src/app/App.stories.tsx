import React from 'react'
import {action} from '@storybook/addon-actions'
import App from './App'
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from '../stories/decorators/ReduxStoreProviderDecorator'
import StoryRouter from 'storybook-react-router';

export default {
    title: 'App Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
}

export const AppBaseExample = (props: any) => {
    return (<App demo={true} />)
}

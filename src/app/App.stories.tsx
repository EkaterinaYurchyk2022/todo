import React from 'react'
// @ts-ignore
import {ComponentMeta, ComponentStory} from '@storybook/react';
import App from './App'
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from '../stories/decorators/ReduxStoreProviderDecorator';

export default {
    title: 'App Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} as ComponentMeta<typeof  App>

const Template: ComponentStory<typeof App> = () => <App demo={true}/>;

export const AppBaseExample = Template.bind({});

AppBaseExample.args = {
    demo: true
};

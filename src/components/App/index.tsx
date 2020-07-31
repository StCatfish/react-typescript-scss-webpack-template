import * as React from 'react';
import * as styles from './App.scss';

export default class App extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <p className={styles.appText}>Hello, world!</p>
        );
    }
}

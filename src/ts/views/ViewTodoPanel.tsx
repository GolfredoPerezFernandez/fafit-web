/**
* ViewTodoPanel.tsx
* Copyright: Microsoft 2017
*
* The Todo item edit view.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import { FontSizes } from '../app/Styles';
import { Todo } from '../models/TodoModels';
import TodosStore from '../stores/TodosStore';

export interface ViewTodoPanelProps extends RX.CommonProps {
    todoId: string;
}

interface ViewTodoPanelState {
    todo: Todo;
}

const _styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        margin: 16,
    }),
    todoText: RX.Styles.createTextStyle({
        margin: 8,
        fontSize: FontSizes.size16,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
    }),
    buttonContainer: RX.Styles.createViewStyle({
        margin: 8,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),
};


export default class ViewTodoPanel extends ComponentBase<ViewTodoPanelProps, ViewTodoPanelState> {
    protected _buildState(props: ViewTodoPanelProps, initState: boolean): Partial<ViewTodoPanelState> {
        const newState: Partial<ViewTodoPanelState> = {
            todo: props.todoId === 'videoNFT' || props.todoId === 'audioNFT' || props.todoId === 'objectNFT' || props.todoId === 'imageNFT' || props.todoId === 'swap' ? TodosStore.getTodo2ById(props.todoId) : TodosStore.getTodoById(props.todoId),
        };

        return newState;
    }

    render() {
        return (
            <RX.View useSafeInsets={true} style={_styles.container}>
                <RX.View style={{ flex: 35 }}>
                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? this.state.todo.text : ''}
                    </RX.Text>

                    <RX.View style={_styles.buttonContainer}>
                    </RX.View>

                </RX.View>

            </RX.View>
        );
    }

}

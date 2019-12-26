import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import todoPropTypes from './todoPropTypes';
import filtersPropTypes from './filtersPropTypes';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

let basename = '';
// eslint-disable-next-line
if (process.env.NODE_ENV === 'production') {
  basename = '/redux-rest-actions-todo-example';
}

function TodosComponent(props) {
  return (
    <Box m="1em">
      <Router basename={basename}>
        <Switch>
          <Route exact path="/">
            <TodoList
              getTodos={props.getTodos}
              addTodo={props.addTodo}
              error={props.listError}
              updateTodo={props.updateTodo}
              deleteTodo={props.deleteTodo}
              todos={props.todos}
              pending={props.pending}
              updatePending={props.updatePending}
              visibilityFilter={props.visibilityFilter}
              searchFilter={props.searchFilter}
              updateFilters={props.updateFilters}
              filters={props.filters}
            />
          </Route>
          <Route exact path="/edit/:id">
            <EditTodo
              getTodo={props.getTodo}
              updateTodo={props.updateTodo}
              updateError={props.updateError}
              updatePending={props.updatePending}
              todo={props.todo}
              cancelUpdate={props.cancelUpdate}
            />
          </Route>
          <Route exact path="/delete/:id">
            <DeleteTodo
              getTodo={props.getTodo}
              deleteTodo={props.deleteTodo}
              updateError={props.updateError}
              updatePending={props.updatePending}
              todo={props.todo}
              cancelUpdate={props.cancelUpdate}
            />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

TodosComponent.propTypes = {
  getTodos: PropTypes.func,
  getTodo: PropTypes.func,
  addTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  cancelUpdate: PropTypes.func,
  todos: PropTypes.arrayOf(todoPropTypes),
  todo: todoPropTypes,
  visibilityFilter: PropTypes.string,
  searchFilter: PropTypes.string,
  pending: PropTypes.bool,
  updatePending: PropTypes.bool,
  updateFilters: PropTypes.func,
  listError: PropTypes.object, // eslint-disable-line
  updateError: PropTypes.object, // eslint-disable-line
  filters: filtersPropTypes
};

export default TodosComponent;

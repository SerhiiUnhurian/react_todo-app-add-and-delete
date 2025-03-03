import classNames from 'classnames';
import { Todo } from '../types/Todo';
import React from 'react';

type Props = {
  filter: string;
  setFilter: (arg: string) => void;
  completedTodos: Todo[] | [];
  notCompletedTodos: Todo[] | [];
  clearCompletedTodos: () => void;
};

const FILTER_METHOD = {
  all: 'all',
  active: 'active',
  completed: 'completed',
};

export const Footer: React.FC<Props> = ({
  filter,
  setFilter,
  completedTodos,
  notCompletedTodos,
  clearCompletedTodos,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {notCompletedTodos.length} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === 'all',
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter(FILTER_METHOD.all)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filter === 'active',
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter(FILTER_METHOD.active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filter === 'completed',
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter(FILTER_METHOD.completed)}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!completedTodos.length}
        onClick={() => clearCompletedTodos()}
      >
        Clear completed
      </button>
    </footer>
  );
};

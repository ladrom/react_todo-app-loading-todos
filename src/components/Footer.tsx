import classNames from 'classnames';
import { Sort } from '../utils/Sort';

type Props = {
  itemsLeftToComplete: number,
  isAnyCompletedTodo: boolean,
  sortType: Sort,
  setSortType: (type: Sort) => void,
};

export const Footer: React.FC<Props> = ({
  itemsLeftToComplete,
  isAnyCompletedTodo,
  sortType,
  setSortType,
}) => {
  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${itemsLeftToComplete} items left`}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={classNames(
            'filter__link', { selected: sortType === Sort.All },
          )}
          onClick={(event) => {
            event.preventDefault();
            setSortType(Sort.All);
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames(
            'filter__link', { selected: sortType === Sort.Active },
          )}
          onClick={(event) => {
            event.preventDefault();
            setSortType(Sort.Active);
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames(
            'filter__link', { selected: sortType === Sort.Completed },
          )}
          onClick={(event) => {
            event.preventDefault();
            setSortType(Sort.Completed);
          }}
        >
          Completed
        </a>
      </nav>

      {isAnyCompletedTodo && (
        <button type="button" className="todoapp__clear-completed">
          Clear completed
        </button>
      )}

    </footer>
  );
};
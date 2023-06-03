# React js Boilerplate

React js boilerpate is pre configured with eslint, pre-commmit hook and lint-staged. Axios instance is also created for apis call. It is pre configured with Lighting Design System (https://react.lightningdesignsystem.com/) library.

## Installation

- Pre-requisites
    > It requires React v16.14.0+ to run.

    > It requires Lightning Design System v2.15.9 to run.
		
		

	Clone the project by copying below mentioned command into your directory :-

    ```sh
    git clone https://gitlab.com/skisme4u/reactjs-boilerplate.git
    ```

    Change directory to ems by typing below mentioned command :-

    ```sh
    cd reactjs-boilerplate
    ```

    Now run below mentioned command to install neccessary dependencies into your project :-

    ```sh
    npm install
    ```

	## Executing the app

	```
	npm start
	```

## Makefile Commands

1) Display linting for all files

    ```sh
    make all
    ```

2) Autofix fixable errors for linting for all files

    ```sh
    make all_fix
    ```

3) Display linting for staged files

    ```sh
    make lint
    ```

4) Autofix fixable errors for linting in staged files

    ```sh
    make lint_fix
    ```
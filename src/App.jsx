import './App.css'
import { TaskDop1 } from './tasks/task-dop-1'
import { TaskDop2 } from './tasks/task-dop-2'
import { Task1 } from './tasks/task1'
import { Task2 } from './tasks/task2'
import { Task3 } from './tasks/task3'
import { Task4 } from './tasks/task4'

function App() {
	return (
		<>
			<Task1 />
			<Task2 />
			<Task3 />
			<Task4 />

			<h2>Dop Tasks</h2>

			<TaskDop1 />
			<TaskDop2 />
		</>
	)
}

export default App

import { Queue } from "../queue";

type Student = `${number} ${string}`;

/**
 * @see {@link https://informatics.msk.ru/mod/statements/view.php?chapterid=111647#1}
 */
export function sortByClasses(students: Student[]) {
  const queue = new Queue<Student>(students);

  const classes: Record<string, Student[]> = {}

  while (queue.size() > 0) {
    const [grade, name] = (queue.dequeue()?.split(' ') ?? []) as [number, string];

    if (grade) {
      if (!classes[grade]) {
        classes[grade] = [];
      }

      classes[grade].unshift(`${grade} ${name}`);
    }
  }

  Object.values(classes).reverse().forEach((students) => {
    for (const student of students.reverse()) {
      queue.enqueue(student);
    }
  })

  return queue;
} 
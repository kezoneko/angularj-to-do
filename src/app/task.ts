export interface Task {
    id: number; // идентификатор
    title: string; // заголовок
    date: string; // срок сдачи, дата и время 
    description: string; // описание
    status: boolean; // статус выполненности
}

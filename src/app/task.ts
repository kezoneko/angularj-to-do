export interface Task {
    id: number; // идентификатор
    title: string; // заголовок
    datetime: Date; // срок сдачи, дата и время 
    description: string; // описание
    status: boolean; // статус выполненности
}

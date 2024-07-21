import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository

    constructor() {
        // 서비스가 자체적인 의존성을 생성하고 있다.
        this.messagesRepo = new MessagesRepository() // MessagesRepository는 이 서비스의 의존성이므로, 레포지토리가 없으면 서비스는 제대로 동작하지 않는다.
        // Nest.js는 사실 이렇게 구현하지 않고 -> 의존성 주입 시스템을 사용한다.
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }

}
import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

// 이 class를 DI Container에 등록한다.
@Injectable()
export class MessagesService {
    // messagesRepo: MessagesRepository

    // 1-1 constructor(messagesRepo: MessagesRepository) {
    //     this.messagesRepo = messagesRepo;
    // }

    // 1-2 TypeScript Syntax Sugar
    constructor(public messagesRepo: MessagesRepository){}


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
import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {CreateMessageDto} from "./dtos/create-message.dto";
import {MessagesService} from "./messages.service";

// Class decorator
@Controller('messages')
export class MessagesController {
    messagesService: MessagesService

    constructor() {
        this.messagesService = new MessagesService()
    }


    // Method decorator
    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(
        // Arguments decorator
        @Body() body: CreateMessageDto
    ) {
        return this.messagesService.create(body.content);
    }

    @Get("/:id")
    getMessages(@Param("id") id: string) {
        return this.messagesService.findOne(id)
    }

}

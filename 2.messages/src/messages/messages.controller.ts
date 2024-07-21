import {Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
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
    async getMessages(@Param("id") id: string) {
        const messages = await this.messagesService.findOne(id)

        if(!messages) {
            throw new NotFoundException('message not found')
        }

        return messages;
    }

}

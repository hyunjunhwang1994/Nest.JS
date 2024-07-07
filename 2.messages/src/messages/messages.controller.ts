import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {CreateMessageDto} from "./dtos/create-message.dto";

// Class decorator
@Controller('messages')
export class MessagesController {

    // Method decorator
    @Get()
    listMessages() {

    }

    @Post()
    createMessages(
        // Arguments decorator
        @Body() body: CreateMessageDto
    ) {
        console.log(body)
    }

    @Get("/:id")
    getMessages(@Param("id") id: string) {
        console.log(id);
    }

}

import {Controller, Get, Post, Body, Param} from '@nestjs/common';

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
        @Body() body: any
    ) {
        console.log(body)
    }

    @Get("/:id")
    getMessages(@Param("id") id: string) {
        console.log(id);
    }

}

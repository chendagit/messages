import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return [{ id: 1, text: 'Hello World' }];
    }

    @Post()
    createMessage(@Body() body: any) {
        console.log(body);
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
       console.log(id);
    }
}

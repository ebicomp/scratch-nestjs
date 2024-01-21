import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    GetRootRoute(){
        return 'hi there'
    }
}

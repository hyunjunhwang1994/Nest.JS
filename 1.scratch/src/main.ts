import { Controller, Module, Get } from "@nestjs/common";
import {NestFactory} from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute(){
        return 'Hi there!'
    }
}

// 애플리케이션이 시작될 때마다 Nest는 이 AppModule을 확인하고 나열된 컨트롤러를 찾아 인스턴스를 자동으로 생성한다.
@Module({
    controllers: [AppController]
})
class AppModule {}


// 시작할 진입점을 만들어준다.
async function bootstrap() {
    // Nest 인스턴스가 생성한다.
    const app = await NestFactory.create(AppModule)

    // app을 컴퓨터 특정 포트로 유입되는 트래픽을 리스닝하게 만들어준다.
    await app.listen(3000)
}

// 마지막으로 진입점 함수를 호출한다.
bootstrap()
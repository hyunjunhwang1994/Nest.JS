import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

// 시작할 진입점을 만들어준다.
async function bootstrap() {
    // Nest 인스턴스가 생성한다.
    const app = await NestFactory.create(AppModule)

    // app을 컴퓨터 특정 포트로 유입되는 트래픽을 리스닝하게 만들어준다.
    await app.listen(3000)
}

// 마지막으로 진입점 함수를 호출한다.
bootstrap()
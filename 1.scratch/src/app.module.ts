import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";

// 애플리케이션이 시작될 때마다 Nest는 이 AppModule을 확인하고 나열된 컨트롤러를 찾아 인스턴스를 자동으로 생성한다.
@Module({
    controllers: [AppController]
})
export class AppModule {}
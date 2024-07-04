## 초기 설정
```shell
npm init -y
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

### @nestjs/common
- Nest 애플리케이션을 만들기 위해 사용할 대부분의 함수, 클래스들을 포함.

### @nestjs/core
- Nest js core 라이브러리로 직접 사용할 일은 거의 없다.

### nestjs/platform-express
- 내부적으로 Nest 자체는 유입되는 요청을 처리하지 않는다.
- Nest는 어떠한 구현체에 의존해서 HTTP 요청을 대신 처리하도록 하는데 이 구현체 역할을 Express로 사용한다는 뜻이다. (Fastify를 사용할 수도 있다.)
- Express와 Nest간의 어댑터라고 보면 된다.
- 기본값은 Express이다.

### reflect-metadata
- 데코레이터 관련 라이브러리이다.

### typescript
- 타입스크립트이다.


<br/>

tsconfig.json 파일을 만들고 설정해보자.
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2017",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### main.ts에 구현하기

src 디렉터리 생성 후, main.ts 파일을 생성한다. main.ts는 모든 nest 프로젝트에서 맨 처음 실행되는 파일이 된다.
일반적으로 모듈과 컨트롤러는 각각의 파일로 작성하지만 이번에는 main.ts에 모두 구현해보자. main.ts 파일을 다 구현한 후, 아래의 커맨드를 실행해 앱을 실행시켜 보자.

```shell
npx ts-node-dev src/main.ts
[INFO] 22:29:08 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.4.2)
[Nest] 20869   - 07/04/2024, 10:29:09 PM   [NestFactory] Starting Nest application...
[Nest] 20869   - 07/04/2024, 10:29:09 PM   [InstanceLoader] AppModule dependencies initialized +39ms
[Nest] 20869   - 07/04/2024, 10:29:09 PM   [RoutesResolver] AppController {}: +2ms
[Nest] 20869   - 07/04/2024, 10:29:09 PM   [RouterExplorer] Mapped {, GET} route +1ms
[Nest] 20869   - 07/04/2024, 10:29:09 PM   [NestApplication] Nest application successfully started +1ms
```

localhost:3000/으로 접근해보자.


# Nestjs CLI

- 네스트 cli 설치
```shell
sudo npm install -g @nestjs/cli
```

<br/>

- 네스트 프로젝트 생성
```shell
nest new messages
```

<br/>

npm, yarn 등 패키지매니저 선택지가 나오면 npm으로 선택하면 프로젝트 초기 필요한 의존성들을 알아서 설치해 준다.


- package.json
start:dev로 프로젝트를 실행하면 프로젝트의 변경사항이 생길 때마다 자동 재실행이 된다.
```json
    "start:dev": "nest start --watch",
```

<br/>

프로젝트를 dev 모드로 실행해 보자.
```shell
npm run start:dev
```

<br/>

- Nest는 기본값으로 ESLint를 사용한다. ESLint는 명령줄 도구로서 자동으로 프로젝트의 코드를 확인하고 발생가능한 오류나 이슈를 하이라이팅 해준다.
- .eslintrc.js
- ESLint는 호불호가 갈리지만 일단은 비활성화 해놓자. (주석처리)

```js
module.exports = {
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: 'tsconfig.json',
  //   tsconfigRootDir: __dirname,
  //   sourceType: 'module',
  // },
  // plugins: ['@typescript-eslint/eslint-plugin'],
  // extends: [
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:prettier/recommended',
  // ],
  // root: true,
  // env: {
  //   node: true,
  //   jest: true,
  // },
  // ignorePatterns: ['.eslintrc.js'],
  // rules: {
  //   '@typescript-eslint/interface-name-prefix': 'off',
  //   '@typescript-eslint/explicit-function-return-type': 'off',
  //   '@typescript-eslint/explicit-module-boundary-types': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off',
  // },
};
```

<br/>

그럼 이제, Nest CLI가 자동으로 main.ts, app.module.ts, app.controller.ts, app.service.ts 등을 만들어 준다.

<br/>

# nest generate
다시 한번 구조를 정확히 익히기 위해 아래 4개 파일을 삭제해 주자. <br/>

![img.png](img.png)

<br/>

Nest CLI를 이용해서 MessagesModule을 만들어 보자. <br/>
만약 messages 모듈을 만들고 싶은 경우 messages만 입력하면 된다.
```shell
nest generate module messages
# CREATE src/messages/messages.module.ts (85 bytes)
```

<br/>

또한 main.ts에 NestFactory에 MessagesModule을 주입해준다.

```typescript
  const app = await NestFactory.create(MessagesModule);
```

<br/>

이번에는 NestCLI를 이용해 컨트롤러를 만들어보자.
```shell
nest generate controller messages/messages --flat
```

<br/>

generate를 이용해 controller를 만들면 이번에는 controller 파일을 만들어 주고, 해당 module에 주입까지 자동으로 해준다. <br/>

명령어를 한번 분석해보자면

```shell
#               클래스 타입   src안의 messages 디렉터리                 클래스 이름    이 명령어를 사용하지 않으면  src/messages/controller/messages.controller.ts 로 생성된다.  (프로젝트 구조 차이)
nest generate controller        messages              /           messages            --flat
```


<br/>

# 라우팅 추가하기
- 이제 생성한 컨트롤러에 다양한 라우트 핸들러를 추가해보자. 간단하게 만들고 2가지 방식으로 테스트 해보자. 
- messages.controller.ts 파일을 참고해서 구현하자.

<br/>

간단하게 Get과 <br/>
![img_1.png](img_1.png)

<br/>

Post만 테스트 해보자 (Post의 경우 Body는 Body>Raw>JSON에서 넣을 수 있다.) <br/>
![img_2.png](img_2.png)

<br/>

- 아직 응답 데이터를 넣지 않아 응답 데이터는 나오지 않지만 상태코드 200, 201을 확인하자.
- 이제 다른 방식의 테스트를 진행해 보자.
  - VS Code의 경우 Rest Client나 IntelliJ의 경우 HTTP Client라는 플러그인을 통해 API 테스트가 가능한 파일을 만들어 보자.

<br/>

이렇게 함으로서의 장점은 아래와 같다.
1. API에 대한 문서화를 할 수 있다.
2. 버전 기록을 남길 수 있다.

<br/>

루트 디렉터리에 request.http 파일을 만들고 해당 파일을 참고해서 구현해보자.

<br/>

인텔리제이의 경우 아래와 같이 작성 후, 왼쪽의 플레이 버튼을 누르면 테스트가 되며 아래에 응답 창이 생긴다. <br/>
![img_3.png](img_3.png) <br/>

각각 잘 동작하나 테스트해보자. <br/>
![img_4.png](img_4.png) 
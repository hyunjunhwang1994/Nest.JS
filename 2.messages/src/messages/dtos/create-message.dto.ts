import { IsString } from "class-validator";

export class CreateMessageDto {
    // Validator
    @IsString() // CreateMessageDto 인스턴스가 생성될 때마다, content가 String 인지 검증해준다.
    content: string;
}